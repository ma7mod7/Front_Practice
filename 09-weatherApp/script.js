let city=document.getElementById("city");
let temp=document.getElementById("temperature");
let desc=document.querySelector(".description");
let cloud=document.getElementById("cloud");
let humidity=document.querySelector(".humidity");
let Pressure=document.querySelector(".Pressure");
let form=document.querySelector("form");
let main=document.querySelector("main")
let valueSearch=document.getElementById("valueSearch");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(valueSearch.value!=" "){
        searchWeather();
        valueSearch.value=" "

    }
})
let id = '9505fd1df737e20152fbd78cdb289b6a';

let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id

function searchWeather(){
    fetch(url +'&q='+valueSearch.value)
    .then(resp =>resp.json())
    .then(data => {
        console.log(data);
        if(data.cod===200){
            city.querySelector("figcaption").innerHTML=data.name;
            city.querySelector("img").src= `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            temp.querySelector("img").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
            temp.querySelector("figcaption span").innerText=data.main.temp
            desc.innerText = data.weather[0].description;
            humidity.innerText=data.main.humidity;
            Pressure.innerHTML=data.main.pressure;
            cloud.innerHTML=data.clouds.all;
        }
        else{
            main.classList.add("error");
            setTimeout(()=>{
                main.classList.remove("error")
            },1000)
        }

    })
}
