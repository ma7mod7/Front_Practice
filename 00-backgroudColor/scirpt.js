
let numOfHex =[0,1,2,3,4,5,6,"A","B","C","D","E","F"];
let arrOfColors=[];

let mybutton=document.querySelector('.clicking');
mybutton.addEventListener('click', function() {
    for(let i = 0; i < 6; i++) {
        arrOfColors.push(numOfHex[Math.floor(Math.random() * numOfHex.length)]);
    }
    console.log(arrOfColors)
    let color = `#${arrOfColors.join("")}`;
    arrOfColors = [];
    document.body.style.backgroundColor = color;
});
