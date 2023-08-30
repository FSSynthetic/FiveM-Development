let timeLeft;
let interval;
let active = false;
RegisterCommand('setTimer', (source, args) => {
    let totalTime = parseInt(args[0]);
    let time = (args[1]);
    const checkChar = (char) => {
        if (char === 's' || char === 'm' || char === 'h') return true;
        else return false;
    }
    if (!active) {
        if (!isNaN(totalTime) && checkChar(time)) {
            calculateTime(totalTime, time)
            active = true;
        } else {
            notify("~r~Invalid format")
        }
    } else {
        notify("~o~You already have a timer started!")
    }
})

RegisterCommand('stopTimer', (source) => {
    if (active) {
        clearInterval(interval)
        notify("Timer has been cleared!")
        active = false;
    } else {
        notify("~o~There's no timer active!")
    }
})

RegisterCommand('checkTime', (source) => {
    if (active) {
        let hLeft = Math.floor(timeLeft / 3600);
        let mLeft = Math.floor(timeLeft % 3600 / 60);
        let sLeft = Math.floor(timeLeft % 3600 % 60);

        let h = hLeft > 0 ? hLeft + (hLeft == 1 ? " hour, " : " hours, ") : "";
        let m = mLeft > 0 ? mLeft + (mLeft == 1 ? " minute, and " : " minutes, and ") : "";
        let s = sLeft > 0 ? sLeft + (sLeft == 1 ? " second " : " seconds ") : "";
        notify("You have: " + h + m + s + "left")
    } else {
        notify("~o~There's no timer active!")
    }
})

function calculateTime(count, increase) {
    let info;
    let nTime;
    if (increase === 'h') {
        count = (count * 60) * 60;
        nTime = (count / 60) / 60;
        info = 'hour(s)';
    } else if (increase === 'm') {
        count = count * 60;
        nTime = count / 60;
        info = 'minute(s)';
    } else {
        nTime = count;
        info = 'second(s)';
    }
    start()
    notify("~g~Timer started: " + nTime + " " + info)

    function start() {
        interval = setInterval(function(){
            timeLeft = count--;
            if (count === 0){
                active = false;
                clearInterval(interval); // Stopping the counter when reaching 0.
                notify("Timer has ended!")
            }
        }, 1000);
    }
}

function notify(text) { // simple notification text
    SetNotificationTextEntry("STRING")
    AddTextComponentString(text)
    DrawNotification(true, true)
}
