let navToggle=document.getElementById("nav-toggle");
let navMenu=document.getElementById("nav__menu");
let navClose=document.getElementById("nav-close");
let navLink=document.querySelectorAll(".nav__link");

navToggle.addEventListener("click",()=>{
    navMenu.classList.add("show_menu")
})


navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show_menu")
})

function linkAction(){
    navMenu.classList.remove("show_menu")
}

navLink.forEach((e)=>{
    e.addEventListener("click", linkAction)
})

function scrollHeader(){
    let header=document.getElementById("header");
    this.scrollY>=100?header.classList.add("scroll-header"): header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
