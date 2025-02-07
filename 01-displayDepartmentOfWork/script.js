let switcherLi=document.querySelectorAll(".switcher li");
let imgs=Array.from(document.images);

switcherLi.forEach((li)=>{
    li.addEventListener("click",function(){
        switcherLi.forEach((list)=>{
            list.classList.remove("active");
        })
        this.classList.add("active");
    })
    li.addEventListener("click",function(){
        imgs.forEach((ele)=>{
            ele.style.display="none";
        })
        console.log( document.querySelectorAll(this.dataset.cat));
        document.querySelectorAll(this.dataset.cat).forEach((ele)=>{
            ele.style.display="block";
        })
    })
})

/* need to write local sotrage*/