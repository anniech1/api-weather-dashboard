var keyAPI = "1ced721104d07f711043eeabff75388a";
var searchInputEl = document.getElementById("search-input");
var searchBtnEl = document.getElementById("search-btn");
var searchCity = "";

searchBtnEl.addEventListener("click", saveCity)

function saveCity (event) {
    event.preventDefault()
    var searchTerm = searchInputEl.value
    if (searchTerm === ""){
        alert("Enter a city!")
        return
    }
    else (saveCity(city));
    apiSearch(searchTerm, city)
}

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
    .then(response (display){
        saveCity(city);
        let currentCityWeatherHTML = 

        $('#current-city-weather').html(currentCityWeatherHTML)

    })
}
function printData(data){

}