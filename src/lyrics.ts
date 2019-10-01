var onYouTubeIframeAPIReady;

const textMovementDistance = 0.4;
const textMovementTime = 1;
const cardTransitionTime = 0.5;
const separatorTransitionTime = 2;

let initialised = false;
const ytReady = new Promise((resolve) => {
    onYouTubeIframeAPIReady = () => { resolve(); };
})

const lerp = (a, b, t) => a*(1-t)+b*t;
const easeOutQuad = t => t*(2-t);
const easeInOutQuad = t => t<.5 ? 2*t*t : -1+(4-2*t)*t;

function init() {
    const youtubePromise = initialiseYoutubePlayer();

    const lyricsFile = (document.querySelector<HTMLAnchorElement>("link.lyricsFile")).href;

    fetch(lyricsFile).then(response => {
        if(!response.ok) {
            console.error("Failed to load lyrics", response);
        }

        response.text().then(responseText => {
            const lyricsAst = parseLyrics(responseText);
            console.log(lyricsAst);
            renderLyrics(lyricsAst);
            layoutLyrics();
            youtubePromise.then(player => {
                initialised = true;
                const start = document.querySelector<HTMLDivElement>(".start");
                start.style.display = "block";
                start.addEventListener("click", () => {
                    start.style.display = "none";
                    player.playVideo();
                    document.querySelector<HTMLDivElement>(".container").style.opacity = '1';
                })
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
let playbackSpeed = 0;
let playing = false;
function initialiseYoutubePlayer() {
    return new Promise<YT.Player>((resolve) => {
        ytReady.then(() => {
            const youtubePlayer = document.querySelector<HTMLDivElement>(".youtubeContainer .player");
            const youtubeId = youtubePlayer.dataset.youtubeId;
            const player = new YT.Player(youtubePlayer, {
                height: '100%',
                width: '100%',
                videoId: youtubeId,
                playerVars: {
                    modestbranding: 1
                },
                events: {
                    'onReady': () => {
                        window.setInterval(() => {
                            playbackSpeed = player.getPlaybackRate();
                            currentTime = player.getCurrentTime();
                            playing = player.getPlayerState() == 1;
                        }, 1000);
                        resolve(player);
                    },
                    'onStateChange': state => {
                        playbackSpeed = player.getPlaybackRate();
                        currentTime = player.getCurrentTime();
                        playing = player.getPlayerState() == 1;
                        if(state.data == 0) {
                            player.seekTo(0, true);
                            player.playVideo();
                        }
                    }
                }
            });
        });
    });
}


const timecodeRegex = /^(\d{2})\:(\d{2})\.(\d{2})$/;
const tagRegex = /^([a-z]+)\:(.*)$/;
function parseLyrics(lyricsFile) {
    const cards = [];

    let isEscaped = false;
    let currentCard = {
        timecode: null,
        voices: []
    };
    let currentWord = {
        timecode: null,
        contents: ""
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
                    const timecode = parseInt(timecodeMatches[1], 10) * 60 + parseInt(timecodeMatches[2], 10) + parseInt(timecodeMatches[3], 10) / 100;
                    // Start new word
                    if(currentWord.timecode !== null && currentWord.contents) {
                        if(!currentCard.voices[currentVoice]) {
                            currentCard.voices[currentVoice] = [];
                        }
                        currentCard.voices[currentVoice].push(currentWord);
                    }
                    currentWord = {
                        timecode,
                        contents: ""
                    };
                    if(isCardTag) {
                        // Start new card
                        if(currentCard.timecode !== null) {
                            cards.push(currentCard);
                        }
                        currentCard = {
                            timecode,
                            voices: []
                        };
                    }
                } else {
                    const tagMatches = tagContents.match(tagRegex);
                    const [, tagType, tagValue] = tagMatches;

                    if(isCardTag) {
                        switch(tagType) {
                            case "voice":
                                // Start new word and change voice
                                if(currentWord.timecode !== null && currentWord.contents) {
                                    currentCard.voices[currentVoice].push(currentWord);
                                }
                                currentWord = {
                                    timecode: null,
                                    contents: ""
                                };
                                currentVoice = tagValue;
                                if(!currentCard.voices[currentVoice]) {
                                    currentCard.voices[currentVoice] = [];
                                }
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
        cards
    };
}

const cardElms: Array<HTMLDivElement> = [];
const container = document.querySelector<HTMLDivElement>(".lyricsContainer");
function renderLyrics(lyricsAst) {
    lyricsAst.cards.forEach(card => {
        const cardElm = document.createElement("div");
        cardElm['card'] = card;
        cardElm.classList.add("card");
        cardElm.style.setProperty("--card-start-time", "" + card.timecode * 1000);
        const contentsElm = document.createElement("div");
        contentsElm.classList.add("contents");
        let firstVoice = true;
        for(let voice in card.voices) {
            const voiceElm = document.createElement("div");
            if(!firstVoice) {
                const separatorElm = document.createElement("div");
                separatorElm.classList.add("voiceSeparator");
                separatorElm['previousVoice'] = contentsElm.lastElementChild;
                separatorElm['nextVoice'] = voiceElm;
                contentsElm.appendChild(separatorElm);
            }
            voiceElm.classList.add("voice");
            voiceElm.classList.add(voice);
            const words = card.voices[voice];
            words.forEach(word => {
                const wordElm = document.createElement("span");
                wordElm['word'] = word;
                wordElm.classList.add("word");
                wordElm.innerHTML = word.contents
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;")
                    .replace(/ /g, "&nbsp;")
                    .replace(/\n/g, "<br />");
                voiceElm.appendChild(wordElm);
            });
            contentsElm.appendChild(voiceElm);
            firstVoice = false;
        }
        cardElm.appendChild(contentsElm);
        container.appendChild(cardElm);
        cardElms.push(cardElm);
    });
}

function layoutLyrics() {
    const container = document.querySelector<HTMLDivElement>(".lyricsContainer");

    // It's important to ensure that all voices have the same height, otherwise the separator will move and it will look bad
    const cardElms = Array.from(container.querySelectorAll<HTMLDivElement>(".card"));
    cardElms.forEach(cardElm => {
        const voiceElms = Array.from(cardElm.querySelectorAll<HTMLDivElement>(".voice"));
        voiceElms.forEach(voiceElm => voiceElm.style.height = "auto");
        const voiceHeight = Math.max(...voiceElms.map(voiceElm => voiceElm.getBoundingClientRect().height));
        voiceElms.forEach(voiceElm => voiceElm.style.height = voiceHeight + "px");
    });

    // For the separator resizing animation, each separator also needs to know the size of the previous separator
    let previousSeparatorWidths = [];
    for(let i = 0; i < cardElms.length; i++) {
        const cardElm = cardElms[i];

        const separators = Array.from(cardElm.querySelectorAll<HTMLDivElement>(".voiceSeparator"));

        separators.forEach((sepElm, index) => {
            sepElm['previousWidth'] = previousSeparatorWidths[index];
            sepElm['intendedWidth'] = (sepElm['previousVoice'].getBoundingClientRect().width + sepElm['nextVoice'].getBoundingClientRect().width) / 2;
            sepElm.style.transform = "scaleX(" + sepElm['intendedWidth'] + ")"; // This prevents inactive separators from causing layout issues if the browser is resized
        });

        previousSeparatorWidths = separators.map(sepElm => sepElm['intendedWidth']);
    }
}

let lastDraw = null;
function redraw(now) {
    if(!initialised) {
        window.requestAnimationFrame(redraw);
        return;
    }

    if(lastDraw) {
        const delta = now - lastDraw;
        if(playing) {
            currentTime += delta * playbackSpeed / 1000;
        }
    }
    lastDraw = now;

    container.style.setProperty("--current-time", "" + currentTime * 1000);

    // Set card opacity
    let activeCards: Array<HTMLDivElement> = [];
    for(let i = 0; i < cardElms.length; i++) {
        const cardElm = cardElms[i];
        if(cardElm['card'].timecode > currentTime + cardTransitionTime) {
            //cardElm.style.opacity = 0;
            continue;
        }
        if(cardElm['card'].timecode < currentTime) {
            //cardElm.style.opacity = 1;
            activeCards = [cardElm];
            continue;
        }
        activeCards = [cardElm];
        if(i > 0) {
            activeCards.push(cardElms[i-1]);
        }
        const progress = (currentTime - cardElm['card'].timecode) / cardTransitionTime + 1;
        //cardElm.style.opacity = progress;
    }

    // Animate words
    for(let i = 0; i < activeCards.length; i++) {
        const cardElm = activeCards[i];
        const contentsElm = cardElm.children[0];
        const separators = <Array<HTMLDivElement>> Array.from(contentsElm.children).filter((_, index) => (index % 2));
        for(let i = 0; i < separators.length; i++) {
            const sepElm = separators[i];
            if(sepElm['previousWidth']) {
                const progress = Math.max(0, Math.min(1, (currentTime - cardElm['card'].timecode) / separatorTransitionTime));
                sepElm.style.transform = "scaleX(" + lerp(sepElm['previousWidth'], sepElm['intendedWidth'], easeInOutQuad(progress)) + ")";
            } else {
                sepElm.style.transform = "scaleX(" + sepElm['intendedWidth'] + ")";
            }
        }
        const voices = Array.from(contentsElm.children).filter((_, index) => !(index % 2));
        for(let i = 0; i < voices.length; i++) {
            const voiceElm = voices[i];
            const words = <Array<HTMLDivElement>> Array.from(voiceElm.children);
            const movementDirection = i ? -1 : 1;
            for(let i = 0; i < words.length; i++) {
                const wordElm = words[i];
                const word = wordElm['word'];
                const progress = Math.max(0, Math.min(1, (currentTime - word.timecode) / textMovementTime));
                wordElm.style.opacity = "" + progress;
                wordElm.style.transform = "translateY(" + ((1-easeOutQuad(progress)) * movementDirection * textMovementDistance) + "rem)";
            }
        }
    }

    window.requestAnimationFrame(redraw);
}
redraw(window.performance.now());