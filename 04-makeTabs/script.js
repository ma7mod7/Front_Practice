let tabs =document.querySelectorAll(".tabs li");
let tabsArr=Array.from(tabs);

let divs =document.querySelectorAll(".content div");
let divsArr=Array.from(divs);
console.log(divs);
tabsArr.forEach((ele)=>{
    ele.addEventListener("click",function(el){
        tabsArr.forEach((ele)=>{
            ele.classList.remove("active");
        })
        this.classList.add("active");
        divsArr.forEach((ele)=>{
            ele.style.display="none";
        });
        document.querySelector(this.dataset.cont).style.display="block"
    })

})
