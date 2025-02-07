let mainPhoto=document.querySelector(".mai-photo");
let container=document.querySelector(".container");
function action(src){
    mainPhoto.src=src;
    localStorage.setItem("phone",src)

}
function changeColor(color){
    container.style.background=color;
    localStorage.setItem("backColor",color)
}
window.onload=function(){
    phoneColor=localStorage.getItem("phone");
    backgroundColor=localStorage.getItem("backColor");
    action(phoneColor);
    changeColor(backgroundColor);
}