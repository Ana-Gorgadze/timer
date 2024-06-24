const display = document.getElementById("display");
let timer = null;
let startTimes = 0;
let elapseTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTimes = Date.now() - elapseTime;
        timer = setInterval(update, 10);
        isRunning = true
    }
    display.style.marginLeft = "27%"
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapseTime = Date.now() - startTimes;
        isRunning = false
    }
}

function reset(){
    clearInterval(timer);
    startTimes = 0;
    elapseTime = 0;
    isRunning = false;
    display.textContent = "00:00:00"
    display.style.marginLeft = "35%"
}

function update(){
    const currentTime = Date.now();
    elapseTime = currentTime - startTimes;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minute = Math.floor(elapseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapseTime / 1000 % 60);
    let milisecond = Math.floor(elapseTime %1000 / 10);


    hours = String(hours).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milisecond = String(milisecond).padStart(2, "0");

    display.textContent = `${ hours}: ${minute}: ${seconds}: ${milisecond}`;
}

