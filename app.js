const secondPerMinute = 60;
const timePomodoro = 25;
const timeShortBreak = 5;
let focusSecond = timePomodoro* secondPerMinute;
let breakSecond = timeShortBreak* secondPerMinute;
const pomodoro = document.getElementById("inputPomodoro");
const setup = document.getElementById("setup");
const button = document.getElementById("start");
const run = document.querySelector(".run");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");
run.style.opacity = "0";

function timeFocus(){
    focusSecond--;
    var minuteLeft = Math.floor(focusSecond/60)
    var secondLeft = focusSecond%60;
    minuteDisplay.innerHTML = minuteLeft;
    secondDisplay.innerHTML = secondLeft;
}

function timeBreak(){
    breakSecond--;
    var minuteLeft = Math.floor(breakSecond/60)
    var secondLeft = breakSecond%60;
    minuteDisplay.innerHTML = minuteLeft;
    secondDisplay.innerHTML = secondLeft;
}
button.addEventListener("click", function(){
    if (setup.style.display == "none"){
        document.getElementById("setup").style.display = "block";
        button.style.opacity = "1"
        button.innerHTML = "Start";
        run.style.opacity = "0";
        button.style.width = "300px";
    }
    else{
        document.getElementById("setup").style.display = "none";
        button.innerHTML = "Stop";
        button.style.opacity = "0.1"
        run.style.opacity = "1";
        button.style.width = "70px";
        setInterval(timeFocus,1000)
        }
})