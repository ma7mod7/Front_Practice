let span=document.querySelector(".up");

window.onscroll=function(){
    console.log(this.scrollY);
    this.scrollY>=1000?span.classList.add("show"):span.classList.remove("show");
}
span.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}