// // // global variables
// // const keyAPI = "1ced721104d07f711043eeabff75388a";
// // const API_URL = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}`;

// const API_KEY = `1ced721104d07f711043eeabff75388a`;
// const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

// // //retrieve and console log the data we will be using

// // // function apiSearch(search, city){
// // // var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + keyAPI;
// // //     fetch(requestUrl)
// // fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1ced721104d07f711043eeabff75388a")
// //   .then((response) => {
// //     if (response.ok) {
// //       return response.json();
// //     } else {
// //       throw new Error("error with api");
// //     }
// //   })
// //   .then(data => {
// //     console.log(data);
// //     displayCity(data)
// //   })
// //   .catch((error) => console.error("error with catch", error));

// // function displayCity (data){
// //     const city = data.city.name[0];
// //     const currentcityDiv = document.getElementById("current-city");
// //     const cocktailName = cocktail.strDrink;
// //   const heading = document.createElement("h1");
// //   heading.innerHTML = cocktailName;
// //   cocktailDiv.appendChild(heading);

// // }


// // // var searchInputEl = document.getElementById("search-input");
// // // var searchBtnEl = document.getElementById("search-btn");
// // // var searchCity = "";
// // // var searchTerm


// // // // searchBtnEl.addEventListener("click", saveCity)

// // // function saveCity (event) {
// // //     event.preventDefault()
// // //     searchTerm = event.target.value
// // //         console.log(event.target.value)
        
// // //     // if (searchTerm === ""){
// // //     //     alert("Enter a city!")
// // //     //     return
// // //     // }
// // //     // else 
// // //     // (saveCity(city));
// // //     // apiSearch(searchTerm, city)
// // //     // input.addEventListener
// // //     // const input = document.querySelector("#search-input")
// // //     // input.addEventListener("click", function()
// // //     //     console.log("input vlaue", input.value)
// // //     //     cities.push(input.value)
// // //     //     localStorage.setItem("cities", cities))
// // // }

// // // // let cities = []

// // attempt two

// // var button = document.querySelector('.button')
// // var searchInput = document.querySelector('.search-input');
// // var cityName = document.querySelector('.current-city');
// // var temp = document.querySelector('.temp');
// // var wind = document.querySelector('.wind');
// // var hudmitiy = document.querySelector('.humidity');
// // var uvIndex = document.querySelector('.uv-index')

// // button.addEventListener('click', function(){
// //   fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+ '&units=imperial' + '&appid=' + keyAPI)
// //   .then(response => response.json())
// //   .then(data => {
// //     var nameValue = data['cityName'];
// //     var tempValue = data['main']['temp'];
// //     var descValue = data['weather'][0]['description'];

// //     cityName.innerHTML = nameValue;
// //     temp.innerHTML = tempValue;

// //   })
// //   .catch(err => alert("Please reenter a city name!"))
// // })

// //attempt 3

// class App {
//     constructor(el) {
//         this.el = el;
//         const citiesJson = localStorage.getItem('cities');
//         let cities = [];
//         if (citiesJson) {
//             cities = JSON.parse(citiesJson);
//         } 
//         this.cities =  cities.map(c => new City(c.name, this));
//         this.render();
//     }
    
//     addCity(c) {
//         this.cities.push(c);
//         this.render();
//         this.saveIntoStorage();
//     }

//     removeCity(c) {
      

//         // Way 2
//         this.cities = this.cities.filter(city => city.name !== c.name);

//         this.render();
//         this.saveIntoStorage();
//     }

//     render() {
//         this.el.innerHTML = '';
//         this.cities.forEach(city => city.render(this.el))
//     }

//     saveIntoStorage() {
//         localStorage.setItem('cities', JSON.stringify(this.cities))
//     }

// }

// class City {
//     constructor(name, app) {
//         this.name = name;
//         this.app = app;
//     }

//     async getWeather() {
//         const res = await fetch(`${API_URL}&q=${this.name}`)
//             .then(response => response.json())

//         return res.current.temp_c ;
//     }

//     async render(ctr) {
//         const temp = await this.getWeather();
//         const cityEl = document.createElement('div');
//         cityEl.className = 'city-el d-flex flex-column align-items-center'
//         cityEl.innerHTML = `
//             <span class="city-temp">${temp}℃</span>    
//             <span class="city-name">${this.name}</span>
//             <span class="city-close"><i class="fas fa-times"></i></span>        
//         `
//         ctr.appendChild(cityEl);
//         const close = cityEl.querySelector('.city-close');
//         close.addEventListener('click', () => this.app.removeCity(this))
//     }

//     toJSON() {
//         return {name: this.name};
//     }
// }

// const app = new App(document.querySelector('.weather-locations'));

// const modal = document.querySelector('#addCityModal');
// const bootstrapModal = new bootstrap.Modal(modal, {
//     keyboard: false
// })
// const input = document.querySelector('#cityName')
// const saveBtn = document.querySelector('#saveCity');
// saveBtn.addEventListener('click', () => {
//     addCity();
// })
// input.addEventListener('keypress', (ev) => {
//     if (ev.key === 'Enter') {
//         addCity();
//     }
// })
// modal.addEventListener('shown.bs.modal', () => {
//     input.focus();
// })

// function addCity() {
//     const city = new City(input.value, app);
//     app.addCity(city);
//     bootstrapModal.hide();
//     input.value = '';
// }

//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});

class Fetch {
  async getCurrent(input) {
    const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}

class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}