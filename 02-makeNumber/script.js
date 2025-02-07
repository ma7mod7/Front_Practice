let ser=document.querySelector(".serial");
let genbtn=document.querySelector(".generate");

genbtn.onclick=function(){
    let chars = "012345678910abcdefghijklmnopqrstuvwxyz@#";
    let numSize=10;
    let number="";
    for(let i=0;i<numSize;i++){
        number+=chars[Math.floor(Math.random()*chars.length)];
    }
    console.log(number);
    ser.innerHTML=number;
    localStorage.setItem("randomNumber",number);
}

window.onload=function(){
    let getnumber=localStorage.getItem("randomNumber");
    if(getnumber){
        ser.innerHTML=getnumber;
    }
}