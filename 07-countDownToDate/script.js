
let countDown=new Date("Dec 31,2025 23:59:59").getTime();
console.log(countDown)

let count=setInterval(()=>{
    let curentDate=new Date().getTime();
    let difTime=countDown-curentDate;
    // get days
    let days=Math.floor(difTime/(1000*60*60*24));
    document.querySelector(".days").innerHTML=days>9?days:`0${days}`;
    let hours=Math.floor(difTime%(1000*60*60*24)/(1000*60*60));
    document.querySelector(".hours").innerHTML=hours>9?hours:`0${hours}`;
    let min=Math.floor(difTime%(1000*60*60)/(1000*60));
    document.querySelector(".minutes").innerHTML=min>9?min:`0${min}`;
    let seconds=Math.floor(difTime%(1000*60)/(1000));
    document.querySelector(".seconds").innerHTML=seconds>9?seconds:`0${seconds}`;

    if(difTime<0){
        clearInterval(count);
    }


},1000)