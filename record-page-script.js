var currentTime = 0;

// Stub window.performance.now to allow us to control the time
window.performance.now = function() {
    return currentTime;
}

// Monkey-patch requestAnimationFrame to fire on command and use our own window.performance.now value
const animationFrameRequests = [];
window.requestAnimationFrame = function(callback) {
    animationFrameRequests.push(callback);
};
const renderFrame = function() {
    const currentRequests = animationFrameRequests.splice(0, animationFrameRequests.length);
    currentRequests.forEach(req => req(currentTime));
}

window.setTime = function(time) {
    currentTime = time;
    renderFrame();
};

// Hide some UI elements we don't need
document.querySelector(".back").style.display = "none";
document.querySelector(".controls").style.display = "none";

// Mock Popcorn since we don't want to actually play videos in our headless browser
window.initialisationPromise = new Promise((resolve, reject) => {
    Popcorn = {
        smart: function() {
            const eventListeners = {};
            window.setTimeout(function() {
                // Notify the script that "Popcorn" is ready to start playback
                if(eventListeners["canplay"]) {
                    eventListeners["canplay"].forEach(function(listener) {
                        listener();
                    });

                    resolve();
                }
            }, 1);
            return {
                currentTime: function() {
                    return currentTime / 1000;
                },
                on: function(eventName, listener) {
                    if(!eventListeners[eventName]) {
                        eventListeners[eventName] = [];
                    }
                    eventListeners[eventName].push(listener);
                },
                play: function() {
                    eventListeners["play"].forEach(function(listener) {
                        listener();
                    });
                },
                duration: function() {
                    return 1;
                },
                muted: function() {
                    return false;
                },
                volume: function() {
                    return 1;
                }
            };
        }
    };
});
console.log("Page script initialised");