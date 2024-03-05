const clock = document.getElementById('clock')

// setInterval() is a JavaScript function that repeatedly executes a given function at specified intervals, measured in milliseconds

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
