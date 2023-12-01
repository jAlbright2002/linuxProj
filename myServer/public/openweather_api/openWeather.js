//https://alwazkazi3.medium.com/creating-a-weather-app-using-api-javascript-4d7bb26bbc92
// https://api.openweathermap.org/data/2.5/weather?q=Galway,ie&units=metric&appid=8dba034299cc23d31370692738fac593

//const KEY = '8dba034299cc23d31370692738fac593';
const KEY = '1234'; // this is to save api calls a day

// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');


// ADDING EVENT LISTENER TO SEARCH BUTTON  
function updateWeather(){

    // Fection data from open weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Galway,ie&units=metric&appid=${KEY}`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 
}

// Function to diplay weather on html document
const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].main}`
}

window.onload = updateWeather();

setInterval(updateWeather, 60 * 60 * 1000);

    
