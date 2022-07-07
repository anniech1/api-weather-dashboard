var searchInputEl = document.getElementById("search-input")
var formatInputEl = document.getElementById("format-input")
var searchBtnEl = document.getElementById("search-btn")

searchBtnEl.addEventListener("click", getParams)

function getParams (event) {
    event.preventDefault()
    var searchTerm = searchInputEl.value
    var format = formatInputEl.value
    if (searchTerm === ""){
        alert("Enter a city!")
        return
    }
    apiSearch(searchTerm, format)
}

function 