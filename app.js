//const time = document.querySelector("#timeArea");
//const digitalClock = () => {
//    const date = new Date();
//    let hour = date.getHours();
//    let minute = date.getMinutes();
//    let second = date.getSeconds();
//    let session = "AM";
//    if (hour >= 12) {
//        session = "PM";
//    } else {
//        session = "AM";
//        hour = hour - 12;
//    }
//    if (hour < 10) {
//        hour = "0" + hour;
//    } else {
//        hour;
//    }
//    if (minute < 10) {
//        minute = "0" + minute;
//    } else {
//        minute;
//    }
//    if (second < 10) {
//        second = "0" + second;
//    } else {
//        second;
//    }
//    time.textContent = hour + ":" + minute + ":" + second + ":" + session;
//    setTimeout(digitalClock, 1000);
//}
//window.addEventListener("load", digitalClock);
//
//
//


const myDigitalClockTime = document.querySelector("#myDesigtalClock");
const myHourId = document.querySelector("#myDesigtalColckShowHour");
const myMinutesId = document.querySelector("#myDesigtalColckShowMinutes");
const mySecondsId = document.querySelector("#myDesigtalColckShowSeconds");
const mySessionId = document.querySelector("#myDesigtalColckShowSession");
const myDesigtalClockView = () => {
    const date = new Date();
    let clockHour = date.getHours();
    let clockMinute = date.getMinutes();
    let clockSeconds = date.getSeconds();
    let clockSession = "AM";

    if (clockHour > 11) {
        clockHour = clockHour % 12;
    }
    //    clockHour >11 ? (clockHour = clockHour % 12);
    clockHour <= 12 ? (clockSession = "PM") : clockSession;
    clockHour < 10 ? (clockHour = "0" + clockHour) : clockHour;
    clockMinute < 10 ? (clockMinute = "0" + clockMinute) : clockMinute;
    clockSeconds < 10 ? (clockSeconds = "0" + clockSeconds) : clockSeconds;
    myHourId.textContent = clockHour;
    myMinutesId.textContent = clockMinute;
    mySecondsId.textContent = clockSeconds;
    mySessionId.textContent = clockSession;
    setTimeout(myDesigtalClockView, 1000);
}
window.addEventListener("load", myDesigtalClockView)
