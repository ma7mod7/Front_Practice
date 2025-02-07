let section=document.querySelector(".three");
let spans=document.querySelectorAll(".progress span");


window.onscroll=function(){
    if(window.scrollY>=section.offsetTop-100){
        spans.forEach((ele)=>{
            ele.style.width=ele.dataset.width;
        })
    }
}