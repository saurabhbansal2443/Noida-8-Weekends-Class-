let inputBar = document.getElementById("inputTag");
let addBtn  = document.getElementById("btn");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let temp = document.getElementById("temp");
let windspeed = document.getElementById("ws");
let img = document.getElementById("img");

let apiKey = "f4172c4f6fdb47baa5b125809241605";

let api = 'http://api.weatherapi.com/v1/current.json?key=f4172c4f6fdb47baa5b125809241605&q=london&aqi=no'


async function getData(city){
   let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
   let obj = await data.json();
   console.log(obj)
     updateUI(obj);
}

addBtn.addEventListener("click", function() {
    let city = inputBar.value ;
    let obj = getData(city)
}) 

function updateUI(obj){
    console.log(obj)
    city.innerHTML = obj.location.name + " , " + obj.location.country ;
    humidity.innerHTML = obj.current.humidity ;
    temp.innerHTML = obj.current.temp_c;
    
    windspeed.innerHTML =obj.current.wind_kph; 
    img.src = obj.current.condition.icon;
}