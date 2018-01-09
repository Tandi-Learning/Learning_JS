const elapsetTimeInterval = 120;

var stopwatchRunHandle = null;

var stopwatchElapsedTime;
var stopwatchStartTime;


window.onload = function() {
    setupEventListener();    
    init();
}

window.addEventListener("keyup", keyPressed)

function init() {
    stopwatchElapsedTime = 0;
    stopwatchStartTime = 0;
    document.getElementById('timer').innerHTML = stopwatchElapsedTime;
}

function setupEventListener() {
    document.getElementById("btnStartStop").addEventListener("click", startStop)
    document.getElementById("btnReset").addEventListener("click", reset)
    document.getElementById("btnRecordTime").addEventListener("click", recordTime)    
}

function keyPressed(e) {
    var key = e.key.toLowerCase();
    switch (key) {
        case "s":
            startStop();
            break;
        case "r":
            reset();
            break;
        case "t":
            recordTime();
            break;            
    }
}

function startStop() {
    if (stopwatchRunHandle === null) 
        stopwatchStart();
    else 
        stopwatchStop();
}

function stopwatchStart() {
    if (stopwatchStartTime === 0)
        stopwatchStartTime = Date.now();
     else 
        stopwatchStartTime = Date.now() - (stopwatchElapsedTime * 1000);
    stopwatchRunHandle = setInterval(stopwatchRun, elapsetTimeInterval);
}

function stopwatchStop() {
    clearInterval(stopwatchRunHandle);
    stopwatchRunHandle = null;
}

function reset() {
    if (stopwatchRunHandle !== null) 
        stopwatchStop();

    init();
    document.getElementById("pastTimes").innerHTML = "";
}

function recordTime() {
    var ul = document.getElementById("pastTimes");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(stopwatchElapsedTime));
    ul.appendChild(li);
}

function stopwatchRun() {
    stopwatchElapsedTime = (Date.now() - stopwatchStartTime) / 1000;
    document.getElementById("timer").innerHTML = stopwatchElapsedTime.toFixed(2);
}