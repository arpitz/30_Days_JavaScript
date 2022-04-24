let throttlePause;
const throttle = (callback, time) => {
    if(throttlePause) return;
    throttlePause = true;

    setTimeout(() => {
        callback();
        throttlePause = false;
    }, time);
}

// usage:
window.addEventListener("scroll", () => {
    throttle(handleScrollAnimation, 250);
})

// Reference: https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783