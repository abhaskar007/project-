const daysEL=document.getElementById("days");
const hoursEL=document.getElementById('hours');
const minEL=document.getElementById('min');
const secEL=document.getElementById('sec');


const newYear = "1 jan 2023";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const sec = (newYearDate-currentDate)/1000;
    const days= Math.floor(sec/3600/24);
    const hours = Math.floor(sec/3600)%24;
    const min = Math.floor(sec/60)%60;
    const second = Math.floor(sec%60)
    // console.log(days,hours,min,second)


    daysEL.innerHTML=days;
    hoursEL.innerHTML=formatTime(hours);
    minEL.innerHTML=formatTime(min);
    secEL.innerHTML= formatTime(second);
}



countdown();
function formatTime(time){
    return time<10?(`0${time}`):time;
}
setInterval(countdown,1000)