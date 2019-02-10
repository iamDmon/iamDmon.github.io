var min,sec;
var dmin=0,dsec=0;
var running = false;
function getTime() {
    var date = new Date();
    min = date.getMinutes();
    sec = date.getSeconds();
}
getTime();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startTimer() {
    getTime();
    while(running) {
        dsec++;
        if(dsec == 60) {
            dsec = 0;
            dmin++;
        }
        document.getElementById('time').innerHTML = (49 - dmin) + ":" + (60 - dsec);
        await sleep(1000);
    }
}

function play() {
    running = true;
    document.getElementById('toggle').style.display = "none";
    startTimer();
}
function reset() {
    running = false;
    dhrs=0,dmin=0,dsec=0;
    document.getElementById('time').innerHTML = "50:00"
    document.getElementById('toggle').style.display = "inline";
}