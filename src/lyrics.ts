import bezier from 'bezier-easing';

let initialised = false;

const lerp = (x: number, min: number, max: number) => min*(1-x)+max*x;
const unlerp = (x: number, min: number, max: number) => (x-min) / (max-min);
const clamp = (x: number, min?: number, max?: number) => Math.min(Math.max(x, min || 0), max || 1);

let lyricsAst: AST;
let renderedLyrics: Array<RenderedCard>;
function init() {
    const playerPromise = initialisePlayer();

    const lyricsFile = (document.querySelector<HTMLAnchorElement>("link.lyricsFile")).href;

    fetch(lyricsFile).then(response => {
        if(!response.ok) {
            console.error("Failed to load lyrics", response);
        }

        response.text().then(responseText => {
            lyricsAst = parseLyrics(responseText);
            renderedLyrics = renderLyrics();
            attachTimers(renderedLyrics);
            console.log(renderedLyrics);
            layoutLyrics();
            playerPromise.then(player => {
                initialised = true;
                const start = document.querySelector<HTMLDivElement>(".start");
                start.style.display = "block";
                const begin = () => {
                    const duration = player.duration();
                    start.style.display = "none";
                    window['player'] = player; // useful for debugging
                    const container = document.querySelector<HTMLDivElement>(".container");
                    container.style.opacity = '1';

                    // Set up controls
                    const controls = document.querySelector<HTMLDivElement>(".controls");
                    const timeline = document.querySelector<HTMLDivElement>(".timeline");
                    const playPause = controls.querySelector<HTMLButtonElement>("button.playPause");
                    const volume = controls.querySelector<HTMLButtonElement>("button.volume");
                    const volumeSliderContainer = controls.querySelector<HTMLButtonElement>("button.volume .volumeSliderContainer");
                    const volumeSlider = controls.querySelector<HTMLButtonElement>("button.volume .volumeSlider");
                    const fullscreenToggle = controls.querySelector<HTMLButtonElement>("button.fullscreen");

                    let playing = false;
                    let muted = player.muted();
                    let hideControlsTimeout = null;
                    volumeSlider.style.setProperty("--volume", player.volume());

                    playPause.addEventListener("click", () => {
                        playing ? player.pause() : player.play();
                    });
                    container.addEventListener("click", () => {
                        playing ? player.pause() : player.play();
                    });

                    controls.addEventListener("click", (evt) => {
                        evt.stopPropagation();
                    });
                    volumeSliderContainer.addEventListener("click", (evt) => {
                        evt.stopPropagation();
                    });
                    let adjustingVolume = false;
                    volumeSlider.addEventListener("mousedown", (evt) => {
                        adjustingVolume = true;
                        adjustVolume(evt);
                        volume.classList.add("adjusting");
                    });

                    const adjustVolume = (evt: MouseEvent) => {
                        const volumeSliderLocation = volumeSlider.getBoundingClientRect();
                        const desiredVolume = clamp(unlerp(evt.clientY, volumeSliderLocation.top + volumeSliderLocation.height, volumeSliderLocation.top));
                        player.volume(desiredVolume);
                    }

                    volume.addEventListener("click", () => {
                        muted ? player.unmute() : player.mute();
                    });

                    fullscreenToggle.addEventListener("click", () => {
                        document.fullscreenElement === container ? document.exitFullscreen() : container.requestFullscreen({ navigationUI: "hide" });
                    });

                    let seeking = false;
                    let playingBeforeSeek = false;
                    timeline.addEventListener("mousedown", (evt) => {
                        controls.classList.add("seeking");
                        playingBeforeSeek = playing;
                        seeking = true;
                        seek(evt);
                    });

                    container.addEventListener("mouseup", (evt) => {
                        if(seeking) {
                            seek(evt);
                            seeking = false;
                            if(playingBeforeSeek) {
                                player.play();
                                playPause.classList.add("playing");
                                playing = true;
                            }
                            controls.classList.remove("seeking");
                        }
                        if(adjustingVolume) {
                            adjustVolume(evt);
                            adjustingVolume = false;
                            volume.classList.remove("adjusting");
                        }
                    });

                    const seek = (evt: MouseEvent) => {
                        const timelineLocation = timeline.getBoundingClientRect();
                        const desiredTime = lerp(clamp(unlerp(evt.clientX, timelineLocation.left, timelineLocation.left + timelineLocation.width)), 0, duration);
                        player.pause(desiredTime);
                    }

                    const updateTimeline = () => {
                        timeline.style.setProperty("--progress", "" + (currentTime / player.duration()));
                        window.requestAnimationFrame(updateTimeline);
                    }
                    window.requestAnimationFrame(updateTimeline);

                    container.addEventListener("mousemove", (evt) => {
                        controls.classList.add("active");
                        if(hideControlsTimeout) {
                            window.clearTimeout(hideControlsTimeout);
                        }
                        hideControlsTimeout = window.setTimeout(() => {
                            controls.classList.remove("active");
                            hideControlsTimeout = null;
                        }, 1000);

                        if(seeking) {
                            seek(evt);
                        }
                        if(adjustingVolume) {
                            adjustVolume(evt);
                        }
                    })

                    player.on("play", () => {
                        playPause.classList.add("playing");
                        playing = true;
                    });
                    player.on("pause", () => {
                        playPause.classList.remove("playing");
                        playing = false;
                    });

                    player.on("volumechange", () => {
                        muted = player.muted();
                        volume.classList.toggle("muted", muted);
                        volumeSlider.style.setProperty("--volume", player.volume());
                    });

                    document.addEventListener("fullscreenchange", () => {
                        fullscreenToggle.classList.toggle("active", document.fullscreenElement === container);
                    });

                    document.addEventListener("keydown", (evt) => {
                        switch(evt.key) {
                            case "ArrowLeft":
                            case "ArrowRight":
                                const direction = evt.key == "ArrowRight" ? 1 : -1;
                                const magnitude = evt.ctrlKey ? 10 : 5;
                                const desiredTime = clamp(player.currentTime() + direction * magnitude, 0, duration);
                                playing ? player.play(desiredTime) : player.pause(desiredTime);
                                evt.preventDefault();
                                evt.stopPropagation();
                                break;
                            case "ArrowUp":
                            case "ArrowDown":
                                player.volume(clamp(player.volume() + 0.05 * (evt.key == "ArrowUp" ? 1 : -1)));
                                break;
                            case " ":
                                playing ? player.pause() : player.play();
                                evt.preventDefault();
                                evt.stopPropagation();
                                break;
                            default:
                                break;
                        }
                    });

                    player.play();
                };
                start.addEventListener("click", begin);
                const startKeyListener = (evt) => {
                    if(evt.key === " ") {
                        window.removeEventListener("keydown", startKeyListener);
                        begin();
                    }
                };
                window.addEventListener("keydown", startKeyListener);
            });
        }, err => {
            console.error("Failed to retrieve lyrics", err);
        });
    });
}
init();

window.addEventListener("resize", () => {
    if(initialised) {
        layoutLyrics();
    }
});


let currentTime = 0;
function initialisePlayer() {
    return new Promise<any>((resolve) => {
        const playerElement = document.querySelector<HTMLDivElement>(".playerContainer .player");
        const mediaUrl = playerElement.dataset.mediaUrl;
        const player = Popcorn.smart(playerElement, mediaUrl);

        player.on("canplay", () => {
            function update() {
                currentTime = player.currentTime() + lyricsAst.metadata.offset;
                window.requestAnimationFrame(update);
            }
            window.requestAnimationFrame(update);
            resolve(player);
        });
    });
}

interface AST {
    metadata: ASTMetadata;
    cards: Array<ASTCard>;
}
interface ASTMetadata {
    offset: number;
}
interface ASTCard {
    timecode: number;
    voices: {[voice: string]: Array<ASTWord>};
    classes: Array<string>;
}
interface ASTWord {
    timecode: number;
    contents: string;
    classes: Array<string>;
}
const timecodeRegex = /^([+-]?)(\d{2})\:(\d{2})\.(\d{2})$/;
const tagRegex = /^([a-z]+)\:(.*)$/;
function parseLyrics(lyricsFile): AST {
    const cards: Array<ASTCard> = [];
    const metadata = {
        offset: 0
    };

    let isEscaped = false;
    let currentCard = {
        timecode: null,
        voices: {},
        classes: []
    };
    let currentWord = {
        timecode: null,
        contents: "",
        classes: []
    };
    let currentVoice = null;
    for(let i = 0; i < lyricsFile.length; i++) {
        const char = lyricsFile[i];
        if(isEscaped) {
            currentWord.contents += char;
            isEscaped = false;
            continue;
        }

        switch(char) {
            case "\n":
                break;
            case "\\":
                isEscaped = true;
                break;
            case "[":
            case "<":
                const isCardTag = char === "[";
                const tagEnd = lyricsFile.indexOf(isCardTag ? "]" : ">", i + 1);
                if(tagEnd === -1) {
                    throw new Error("Lyrics parsing error: Expected ], reached EOF");
                }
                const tagContents = lyricsFile.slice(i + 1, tagEnd);
                i = tagEnd;

                const timecodeMatches = tagContents.match(timecodeRegex);
                if(timecodeMatches) {
                    const relative = timecodeMatches[1];
                    const rawTimecode = parseInt(timecodeMatches[2], 10) * 60 + parseInt(timecodeMatches[3], 10) + parseInt(timecodeMatches[4], 10) / 100;
                    // Start new word
                    if(currentWord.timecode !== null && currentWord.contents) {
                        if(!currentCard.voices[currentVoice]) {
                            currentCard.voices[currentVoice] = [];
                        }
                        currentCard.voices[currentVoice].push(currentWord);
                    }

                    // I wish there was an inline switch statement
                    const timecode = relative ?
                        (
                            relative == "+" ?
                                (currentCard.timecode || 0) + rawTimecode :
                                (currentCard.timecode || 0) - rawTimecode // Idk why someone would want to use a negative relative timecode, but they can if they want
                        ) :
                        rawTimecode;
                    currentWord = {
                        timecode,
                        contents: "",
                        classes: []
                    };
                    if(isCardTag) {
                        // Start new card
                        if(currentCard.timecode !== null) {
                            cards.push(currentCard);
                        }
                        currentCard = {
                            timecode,
                            voices: [],
                            classes: []
                        };
                    }
                } else {
                    const tagMatches = tagContents.match(tagRegex);
                    const [, tagType, tagValue] = tagMatches;

                    if(isCardTag) {
                        switch(tagType) {
                            case "offset":
                                metadata.offset = parseInt(tagValue, 10) / 1000;
                            case "voice":
                                // Start new word and change voice
                                if(currentWord.timecode !== null && currentWord.contents) {
                                    currentCard.voices[currentVoice].push(currentWord);
                                }
                                currentWord = {
                                    timecode: null,
                                    contents: "",
                                    classes: []
                                };
                                currentVoice = tagValue;
                                if(!currentCard.voices[currentVoice]) {
                                    currentCard.voices[currentVoice] = [];
                                }
                                break;
                            case "class":
                                currentCard.classes.push(tagValue);
                                break;
                            default:
                                // Unrecognised tag
                                break;
                        }
                    } else {
                        switch(tagType) {
                            case "class":
                                currentWord.classes.push(tagValue);
                                break;
                            default:
                                // Unrecognised tag
                                break;
                        }
                    }
                }
                
                break;
            default:
                currentWord.contents += char;
                break;
        }
    }

    if(currentWord.timecode !== null && currentWord.contents) {
        currentCard.voices[currentVoice].push(currentWord);
    }

    if(currentCard.timecode !== null) {
        cards.push(currentCard);
    }

    cards.forEach(card => {
        for(let voice in card.voices) {
            card.voices[voice].sort((a, b) => a.timecode - b.timecode);
        }
    });
    cards.sort((a, b) => a.timecode - b.timecode);

    return {
        metadata,
        cards,
    };
}

interface RenderedCard {
    cardAst: ASTCard,
    cardElm: HTMLDivElement,
    contentsElm: HTMLDivElement,
    voices: Array<RenderedVoice>,
    cardTimers?: Array<Timer>
}
interface RenderedVoice {
    name: string,
    voiceElm: HTMLDivElement,
    contentsElm: HTMLDivElement,
    words: Array<RenderedWord>
}
interface RenderedWord {
    wordAst: ASTWord,
    wordElm: HTMLSpanElement,
    wordTimers?: Array<Timer>
}
const container = document.querySelector<HTMLDivElement>(".lyricsContainer");
function renderLyrics() {
    return lyricsAst.cards.map<RenderedCard>(cardAst => {
        const cardElm = document.createElement("div");
        cardElm.classList.add("card");
        for(const currentClass of cardAst.classes) {
            cardElm.classList.add(currentClass);
        }

        const contentsElm = document.createElement("div");
        contentsElm.classList.add("contents");

        cardElm.appendChild(contentsElm);
        container.appendChild(cardElm);

        const voices: Array<RenderedVoice> = [];
        for(let voice in cardAst.voices) {
            const voiceElm = document.createElement("div");
            voiceElm.classList.add("voice");
            voiceElm.classList.add(voice);

            contentsElm.appendChild(voiceElm);

            const voiceContentsElm = document.createElement("div");
            voiceContentsElm.classList.add("voiceContents");
            voiceElm.appendChild(voiceContentsElm);

            const words = cardAst.voices[voice].map<RenderedWord>(wordAst => {
                const wordElm = document.createElement("span");
                wordElm.classList.add("word");
                for(const currentClass of wordAst.classes) {
                    wordElm.classList.add(currentClass);
                }
                wordElm.innerHTML = wordAst.contents
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;")
                    .replace(/ /g, "&nbsp;")
                    .replace(/\n/g, "<br />");
                voiceContentsElm.appendChild(wordElm);

                return {
                    wordAst,
                    wordElm,
                };
            });

            voices.push({
                name: voice,
                voiceElm,
                contentsElm: voiceContentsElm,
                words
            });
        }

        return {
            cardAst,
            cardElm,
            contentsElm,
            voices,
        };
    });
}

const oscillateFunctionGenerator = (numberOfOscillations) => (magnitude, t) => Math.sin(t * Math.PI * 2 * numberOfOscillations);

const timingFunctions: {[name: string]: (x: number) => number} = {
    instant: x => x > 0 ? 1 : 0,
    linear: x => x,
    ease: bezier(0.25, 0.1, 0.25, 1),
    easeIn: bezier(0.42, 0, 1, 1),
    easeOut: bezier(0, 0, 0.58, 1),
    easeInOut: bezier(0.42, 0, 0.58, 1),
};
const postprocessingFunctions: {[name: string]: (timedProgress: number, linearProgress: number) => number} = {
    none: x => x,
    oscillate1: oscillateFunctionGenerator(1),
    oscillate2: oscillateFunctionGenerator(2),
    oscillate4: oscillateFunctionGenerator(4),
};
interface Timer {
    name: string,
    fromReference: string,
    fromOffset: number,
    toReference: string,
    toOffset: number,
    timingFunction: (x: number) => number,
    lastValue?: number
};
function parseTimers(timersString: string): Array<Timer> {
    return timersString.split(",").filter(s => s).map(timerString => {
        let [name, fromReference, fromOffset, toReference, toOffset, forwardTimingFunctionName, reverseTimingFunctionName, postprocessingFunctionName] = timerString.trim().split(" ");

        if(!forwardTimingFunctionName) {
            forwardTimingFunctionName = "linear";
        }
        if(!timingFunctions[forwardTimingFunctionName]) {
            throw new Error("Attempt to use non-existent timing function " + forwardTimingFunctionName);
        }

        if(reverseTimingFunctionName == "none") {
            reverseTimingFunctionName = null;
        }
        if(reverseTimingFunctionName && !timingFunctions[reverseTimingFunctionName]) {
            throw new Error("Attempt to use non-existent reverse timing function " + reverseTimingFunctionName);
        }

        if(!postprocessingFunctionName) {
            postprocessingFunctionName = "none";
        }
        if(!postprocessingFunctions[postprocessingFunctionName]) {
            throw new Error("Attempt to use non-existent postprocessing function " + postprocessingFunctionName);
        }

        const forwardTimingFunction = timingFunctions[forwardTimingFunctionName];
        const reverseTimingFunction = reverseTimingFunctionName ? timingFunctions[reverseTimingFunctionName] : null;
        const postprocessingFunction = postprocessingFunctions[postprocessingFunctionName];

        const timingFunction = (linearProgress) => {
            const timedProgress = reverseTimingFunction ?
                (
                    linearProgress < 0.5 ?
                    forwardTimingFunction(unlerp(linearProgress, 0, 0.5)) :
                    lerp(reverseTimingFunction(unlerp(linearProgress, 0.5, 1)), 1, 0)
                ) :
                forwardTimingFunction(linearProgress);
        
            const postprocessed = postprocessingFunction ? postprocessingFunction(timedProgress, linearProgress) : timedProgress;
        
            return postprocessed;
        }

        return {
            name,
            fromReference,
            fromOffset: parseFloat(fromOffset),
            toReference,
            toOffset: parseFloat(toOffset),
            timingFunction
        };
    });
}

function getTimerValue(timer: Timer, time: number, referenceValues: {[name: string]: number}): number {
    const from = referenceValues[timer.fromReference] + timer.fromOffset;
    const to = referenceValues[timer.toReference] + timer.toOffset;
    const linearProgress = clamp(unlerp(time, from, to));
    return timer.timingFunction(linearProgress);
}

function attachTimers(renderedCards: Array<RenderedCard>): void {
    for(let card of renderedCards) {
        card.cardTimers = parseTimers(getComputedStyle(card.cardElm).getPropertyValue("--card-timers"));

        for(let voice of card.voices) {
            for(let word of voice.words) {
                word.wordTimers = parseTimers(getComputedStyle(word.wordElm).getPropertyValue("--word-timers"));
            }
        }
    }
}

function layoutLyrics() {
    let previousVoiceWidths = [];
    for(let card of renderedLyrics) {
        // It's important to ensure that all voices have the same height, otherwise the separator will move and it will look bad
        const voiceElms = card.voices.map(v => v.voiceElm);
        const voiceContentsElms = card.voices.map(v => v.contentsElm);
        voiceContentsElms.forEach(voiceElm => voiceElm.style.height = "auto");
        const voiceHeight = Math.max(...voiceContentsElms.map(voiceElm => voiceElm.getBoundingClientRect().height));
        voiceContentsElms.forEach(voiceElm => voiceElm.style.height = voiceHeight + "px");

        // Here's some extra data that's used for separator sizing (e.g. etoile et toi)
        const voiceWidths = voiceContentsElms.map(contentsElm => contentsElm.getBoundingClientRect().width);
        voiceElms.forEach((voiceElm, i) => {
            voiceElm.style.setProperty("--voice-width", "" + voiceWidths[i]);
            voiceElm.style.setProperty("--next-voice-width", "" + (voiceWidths[i + 1] || 0));
            voiceElm.style.setProperty("--previous-card-voice-width", "" + (previousVoiceWidths[i] || voiceWidths[i]));
            voiceElm.style.setProperty("--previous-card-next-voice-width", "" + (previousVoiceWidths[i + 1] || (voiceWidths[i + 1] || 0)));
        });
        previousVoiceWidths = voiceWidths;
    }
}

function redraw(now) {
    if(!initialised) {
        window.requestAnimationFrame(redraw);
        return;
    }

    for(let cardIndex = 0; cardIndex < renderedLyrics.length; cardIndex++) {
        const card = renderedLyrics[cardIndex];
        const nextCard = renderedLyrics[cardIndex + 1];
        const cardEnd = (nextCard || card).cardAst.timecode;
        card.cardTimers.forEach(timer => {
            const value = getTimerValue(timer, currentTime, { start: card.cardAst.timecode, end: cardEnd });
            if(value != timer.lastValue) {
                card.cardElm.style.setProperty(timer.name, "" + value);
                timer.lastValue = value;
            }
        });

        for(let voice of card.voices) {
            for(let wordIndex = 0; wordIndex < voice.words.length; wordIndex++) {
                const word = voice.words[wordIndex];
                const nextWord = voice.words[wordIndex + 1];
                word.wordTimers.forEach(timer => {
                    const value = getTimerValue(timer, currentTime, { start: word.wordAst.timecode, end: nextWord ? nextWord.wordAst.timecode : cardEnd });
                    if(value != timer.lastValue) {
                        word.wordElm.style.setProperty(timer.name, "" + value);
                        timer.lastValue = value;
                    }
                });
            }
        }
    }

    window.requestAnimationFrame(redraw);
}
redraw(window.performance.now());