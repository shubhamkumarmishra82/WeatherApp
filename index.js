
const input = document.querySelector(".input")
const btn = document.querySelector("#search")
async function checkwheather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${(city)}&appid=98a6ea873df2e7515455fba9e6a3e43e&units=metric`)
var data =await response.json()


document.querySelector(".city").innerHTML = data.name
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
if(data.weather[0].main==="Clouds"){
    document.querySelector(".weather-icon").src = "weather-app-img/images/clouds.png"
}
else if(data.weather[0].main==="Clear"){
    document.querySelector(".weather-icon").src = "weather-app-img/images/clear.png"
}
else if(data.weather[0].main==="Rain"){
    document.querySelector(".weather-icon").src = "weather-app-img/images/rain.png"
}
else if(data.weather[0].main==="Drizzle"){
    document.querySelector(".weather-icon").src = "weather-app-img/images/drizzle.png"
}
else if(data.weather[0].main==="Mist"){
    document.querySelector(".weather-icon").src = "weather-app-img/images/mist.png"
}
}

btn.addEventListener("click",()=>{
    
checkwheather(input.value)
})