let debounceTimer;

const debounce = (callback, time) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
}

// usage:
let input = document.getElementById('name');
let debounceValue = document.getElementById('debounce-value');

const updateDebounceValue = () => {
    debounceValue.innerHTML = input.value;
}

input.addEventListener("input", () => {
    debounce(updateDebounceValue, 500)
}, false);




// Reference: https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
