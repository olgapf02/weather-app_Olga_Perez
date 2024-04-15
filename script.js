import { fetchLocation, defaultLocation, reverseGeocoding } from "./scripts/locations.js"
import { fetchMeteo } from "./scripts/meteoApi.js"
import { updateDashboard, updateSuggestions } from "./scripts/dashboards.js"
import { requestLogin, requestLogout, checkLogin, loggedIn } from "./scripts/login.js"

let targetLocation = null

window.onload = () => {
    // Add event listeners
    document.querySelector("#searchLocation").addEventListener("input", refreshSuggestions)
    document.querySelector('.search-button').addEventListener('click', searchLocation)
    document.querySelector('.button-login').addEventListener('click', requestLogin)
    document.querySelector('.boton-logout').addEventListener('click', requestLogout)
    document.querySelector('.current-location-button').addEventListener('click', getCurrentLocation)


    //Load default data
    checkLogin()
    targetLocation = defaultLocation
    setInterval(refreshDashboard(targetLocation), 5000)
}

function searchLocation() {
    let options = Array.from(document.querySelectorAll("#suggestions option"))
    let searchInput = document.querySelector("#searchLocation")

    let newLocation = {}
    for (let option of options) {
        if (option.value == searchInput.value) {
            newLocation.lon = option.getAttribute("lon")
            newLocation.lat = option.getAttribute("lat")
            newLocation.name = searchInput.value
        }
    }
    console.log(newLocation)
    targetLocation = newLocation
    refreshDashboard(targetLocation)
}

function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        let newLocation = {}
        newLocation.lon = position.coords.longitude
        newLocation.lat = position.coords.latitude
        // Reverse geocoding
        reverseGeocoding(newLocation.lat, newLocation.lon)
            .then(response => response.json())
            .then(data => {
                newLocation.name = data[0]["name"] + " (browser geolocation)"
                targetLocation = newLocation
                refreshDashboard(targetLocation)
            })
        newLocation.name = ""
        targetLocation = newLocation
        refreshDashboard(targetLocation)
    })
}


function refreshSuggestions(e) {
    console.log(e.target.value)
    if (e.target.value != "" & e.target.value.length > 1 & e.target.value.length < 8) {
        setTimeout((() => {
            fetchLocation(e.target.value)
                .then(response => response.json())
                .then(data => {
                    updateSuggestions(data["results"])
                })
                .catch((error) => console.log(error))
        }), 250)
    }
}

function refreshDashboard(location) {
    fetchMeteo(location)
        .then(response => response.json())
        .then(((data) => updateDashboard(data, location)))
        .catch((error) => console.log(error)
        )
}