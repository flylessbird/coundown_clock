setInterval(convertTime,1000)
function convertTime() {var xmasDay = new Date(new Date().getFullYear(), "11", "25");
var today = new Date();
var oneSec = 1000;
var oneMin = 60 * oneSec;
var oneHour = 60 * oneMin;
var oneDay = 24 * oneHour;
var xmasDayTime = xmasDay.getTime();
var todayTime = today.getTime();
var timeDifference = xmasDayTime - todayTime;
var dayBeforeXmas = Math.floor(timeDifference / oneDay);
var hourBeforeXmas = Math.floor((timeDifference % oneDay) / oneHour);
var minBeforeXmas = Math.floor((timeDifference % oneHour) / oneMin);
var secBeforeXmas = Math.floor((timeDifference % oneMin) / oneSec);
document.getElementById('day').innerHTML = dayBeforeXmas
document.getElementById('hour').innerHTML = hourBeforeXmas
document.getElementById('min').innerHTML = minBeforeXmas
document.getElementById('sec').innerHTML = secBeforeXmas}
