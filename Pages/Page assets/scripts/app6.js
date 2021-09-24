const day = document.getElementById('days');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const newYear = "1 Jan 2022";
var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});
function timer(){
    const newYrDate = new Date(newYear);
    const currentDate = new Date();

    const seconds = (newYrDate - currentDate)/1000;
    const days = Math.floor(seconds/(3600*24));

    const hours = (Math.floor((seconds/3600)))%24;

    const minutes = (Math.floor((seconds/60)))%60;

    const currentSeconds = Math.round(seconds%60);

    console.log(currentSeconds);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = currentSeconds;
}
timer();

setInterval(timer, 1000);