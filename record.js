// In order to run this script you must have selenium-webdriver and http-proxy installed.
// npm install --no-save selenium-webdriver@4.0.0-alpha.5 http-proxy@1.18.0
// You can use this script with a command like:
// node record.js 'etoile-et-toi-(edition-le-blanc)' ../recording.mp4 0 365000
// The parameters are:
// song name
// output video file name (container format must support x264, so mp4 and mkv should work)
// start time (ms)
// end time (ms)

const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');
const selenium = require('selenium-webdriver');
const http = require('http');
const httpProxy = require('http-proxy');

const proxyPort = 9019;
const proxyMockPath = "/popcorn-package"; // The proxy will replace any requests starting with this path with the custom harness JavaScript that we want to inject.
const width = 1920;
const height = 1080;
const fps = 30;
const song = process.argv[2];
const outputFilename = process.argv[3];
const startTime = parseInt(process.argv[4], 10);
const endTime = parseInt(process.argv[5], 10);


async function record() {
    console.log("Launching Parcel dev server");
    const parcelProcess = childProcess.spawn('npm', [
        'run-script',
        'dev'
    ], {
        shell: true
    });
    const parcelServerAddress = await new Promise((resolve, reject) => {
        let started = false;
        parcelProcess.stdout.on('data', (chunk) => {
            var output = chunk.toString('utf8');
            var matches = output.match(/Server running at (.*?)\s/);
            if(matches) {
                resolve(matches[1]);
                started = true;
            }
        });
        parcelProcess.on('close', (code) => {
            console.log('close', code);
            if(!started) {
                reject();
            }
        })
    });
    console.log("Parcel server started at ", parcelServerAddress);

    console.log("Launching ffmpeg");
    const ffmpegProcess = childProcess.spawn('ffmpeg', [
        '-y',
        '-f', 'image2pipe',
        '-vcodec', 'png',
        '-r', fps.toString(), // 30fps
        '-i', '-',
        '-c:v', 'libx264',
        '-preset', 'slow',
        '-crf', '17',
        outputFilename
    ]);
    const ffmpegPromise = new Promise((resolve, reject) => {
        ffmpegProcess.on('close', (code) => {
            console.log("ffmpeg terminated, killing Parcel");
            parcelProcess.kill();
            if(!code) {
                console.log("Done!");
                resolve();
            } else {
                reject(new Error("ffmpeg closed with code " + code));
            }
        });
    });
    ffmpegProcess.stdout.on('data', (d) => {
        console.log(d.toString('utf8'));
    });
    ffmpegProcess.stderr.on('data', (d) => {
        console.warn(d.toString('utf8'));
    });


    console.log("Launching proxy server");
    const proxy = httpProxy.createProxyServer({});
    const server = http.createServer((req, res) => {
        if(req.url.substr(0, proxyMockPath.length) === proxyMockPath) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            fs.readFile("record-page-script.js", 'utf8', (err, data) => {
                if(err) {
                    console.error("Error loading page script", err);
                }
                res.write(data);
                res.end();
            });
        } else {
            proxy.web(req, res, { target: parcelServerAddress });
        }
    });
    server.listen(proxyPort);
    const proxyServerAddress = "http://localhost:" + proxyPort;
    console.log("Started proxy server at", proxyServerAddress);


    console.log("Launching browser");
    const browser = await (new selenium.Builder).forBrowser('firefox').build();
    await browser.get(proxyServerAddress + "/songs/" + song + "/index.html");
    await browser.executeAsyncScript(function() {
        window.initialisationPromise.then(arguments[arguments.length - 1]);
    });
    const startButton = await browser.findElement(selenium.By.css('.start'))
    await browser.wait(selenium.until.elementIsVisible(startButton));
    await startButton.click();
    // Due to the "chrome" of the browser (not Google Chrome, the GUI chrome: https://www.nngroup.com/articles/browser-and-gui-chrome/)
    // while we may set the browser size to one value, the viewport size is likely to be smaller.
    // So here we attempt to set the browser to the desired resolution, measure the actual resolution, and then use the difference to try again.
    await browser.manage().window().setRect({ x: 0, y: 0, width, height });
    const [ measuredWidth, measuredHeight ] = await browser.executeScript(function() {
        return [ window.innerWidth, window.innerHeight ];
    });
    await browser.manage().window().setRect({ x: 0, y: 0, width: width + width - measuredWidth, height: height + height - measuredHeight });
    console.log("Browser ready!");

    let frame = 0;
    for(let frame = 0, currentTime = startTime; currentTime < endTime; frame++, currentTime = startTime + frame * 1000 / fps) {
        await browser.executeScript("setTime(" + currentTime + ")");
        const screenshot = await browser.takeScreenshot();
        ffmpegProcess.stdin.write(Buffer.from(screenshot, 'base64'));
    }

    console.log("Shutting down...");
    ffmpegProcess.stdin.end();
    await browser.quit();
    server.close();
    proxy.close();
    await ffmpegPromise.finally();
}
record().then(() => {
    console.log("done");
}, err => {
    console.error(err);
});