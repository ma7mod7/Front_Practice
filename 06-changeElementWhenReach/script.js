let nums=document.querySelectorAll(".nums .num");
let section=document.querySelector(".three");
let flag=false;
window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
        if(!flag){
        nums.forEach((num)=>{
            startCount(num);
        })
    }
    flag=true;

    }
}

function startCount(ele){
    let goal=ele.dataset.goal;
    let count=setInterval(()=>{
        ele.textContent++;
        if(ele.textContent==goal){
            clearInterval(count);
        }
    },2000/goal)
}