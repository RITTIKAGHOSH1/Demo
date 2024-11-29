const dayEl=document.getElementById("day")
const hr=document.getElementById("hour")
const min=document.getElementById("minute")
const sec=document.getElementById("second")

const newYearTime=new Date("October 1 2024 00:00:00").getTime()

updateCountdown()

function updateCountdown(){
const now=new Date().getTime();
const gap=newYearTime - now

const second=1000;
const minute=second*60;
const hour=minute*60;
const day=24*hour;

const d=Math.floor(gap/day)
const h=Math.floor((gap % day) / hour);
const m=Math.floor((gap % hour)/minute)
const s=Math.floor((gap%minute)/ second)
dayEl.innerText=d;
hr.innerText=h;
min.innerText=m;
sec.innerText=s;

setTimeout(updateCountdown,1000)

    console.log(h);
    
}
console.log()