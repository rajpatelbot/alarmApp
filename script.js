var input = document.getElementById('inputBox');
var btn = document.getElementById('setAlarm');
var stop = document.getElementById('stopAlarm');
var result = document.getElementById('result');
var audio = new Audio('alarm.mp4');

btn.addEventListener('click', alarm);

function alarm(e){
    e.preventDefault();
    alarmDate = new Date(input.value);
    result.innerText = `Alarm set on ${alarmDate}`;
    current = new Date();

    let timeAlarm = alarmDate - current;
    console.log(timeAlarm);
    if(timeAlarm >= 0){
        setTimeout(() => {
            result.innerText = "Alarm is ringing...";
            ringAlarm();
        }, timeAlarm);
    }
}

function ringAlarm(){
    setInterval(() => {
        audio.play();
    }, 1000);
}

function stopAlarm(){
    setInterval(() => {
        audio.pause();
    }, 1000);
}