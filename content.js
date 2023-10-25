// var api_url = `https://api.openweathermap.org/data/2.5/weather?q=Vellore&appid=002beaafd53bbcdf7efd8f32b3930a9a`
// const api_key = `002beaafd53bbcdf7efd8f32b3930a9a`;


var url =""; 
let val ="";

let name = document.getElementsByClassName("city-name")[0];
let temp = document.getElementsByClassName("city-temp")[0];
let windspeed = document.getElementsByClassName("city-Weather-type")[0];
let desc = document.getElementsByClassName("city-weather-desc")[0];


const button = document.getElementById("btn");
button.addEventListener("click", function(){
    val = document.getElementById("inp-city").value;

    url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=002beaafd53bbcdf7efd8f32b3930a9a&units=metric`;
    console.log(url);
    var data = fetch(url);
    data.then((response)=>{
        console.log(response.status);
        // console.log(response.text());
        return response.json();
    })
    .then((value2)=>{
        console.log(value2);
        console.log(value2.weather[0].icon)
        name.textContent = val;
        temp.textContent = value2.main.temp+" °C";
        windspeed.textContent = value2.wind.speed+" km/hr";
        desc.textContent = value2.weather[0].description;
    })    
})


// var data = fetch(url+`${val}`+"%7D");

// data.then((value1)=>{
//     return value1;
// })
// .then((value2)=>{
//     return value2;
// })