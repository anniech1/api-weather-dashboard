// global variables
var keyAPI = "1ced721104d07f711043eeabff75388a";
var city = "";


//retrieve and console log the data we will be using

// function apiSearch(search, city){
// var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + keyAPI;
//     fetch(requestUrl)
fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1ced721104d07f711043eeabff75388a")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("error with api");
    }
  })
  .then(data => {
    console.log(data);
    displayCity(data)
  })
  .catch((error) => console.error("error with catch", error));

function displayCity (data){
    const city = data.city.name[0];
    const currentcityDiv = document.getElementById("current-city");
    const cocktailName = cocktail.strDrink;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);

}


// var searchInputEl = document.getElementById("search-input");
// var searchBtnEl = document.getElementById("search-btn");
// var searchCity = "";
// var searchTerm


// // searchBtnEl.addEventListener("click", saveCity)

// function saveCity (event) {
//     event.preventDefault()
//     searchTerm = event.target.value
//         console.log(event.target.value)
        
//     // if (searchTerm === ""){
//     //     alert("Enter a city!")
//     //     return
//     // }
//     // else 
//     // (saveCity(city));
//     // apiSearch(searchTerm, city)
//     // input.addEventListener
//     // const input = document.querySelector("#search-input")
//     // input.addEventListener("click", function()
//     //     console.log("input vlaue", input.value)
//     //     cities.push(input.value)
//     //     localStorage.setItem("cities", cities))
// }

// // let cities = []