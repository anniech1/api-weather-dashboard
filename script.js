var keyAPI = "1ced721104d07f711043eeabff75388a";
var searchInputEl = document.getElementById("search-input");
var searchBtnEl = document.getElementById("search-btn");
var searchCity = "";
var searchTerm


searchBtnEl.addEventListener("click", saveCity)

function saveCity (event) {
    event.preventDefault()
    searchTerm = event.target.value
        console.log(event.target.value)
        
    // if (searchTerm === ""){
    //     alert("Enter a city!")
    //     return
    // }
    // else 
    // (saveCity(city));
    // apiSearch(searchTerm, city)
    // input.addEventListener
    // const input = document.querySelector("#search-input")
    // input.addEventListener("click", function()
    //     console.log("input vlaue", input.value)
    //     cities.push(input.value)
    //     localStorage.setItem("cities", cities))
}

// let cities = []


function apiSearch(search, city){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + keyAPI;
    fetch(requestUrl)
    .then(function (response){
        if (!response.ok){
            console.log("error getting data")
        } else {
            return response.json()
        }

    })
    .then(function (data){
        console.log(data)
        // saveCity(city);
        // let currentCityWeatherHTML = data;

        // ('#current-city-weather').html(currentCityWeatherHTML)

    })
}
// function printData(data){

// function
// }