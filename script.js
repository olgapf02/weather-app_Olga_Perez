import { fetchLocation, defaultLocation } from "./scripts/locations.js"
import { fetchMeteo } from "./scripts/meteoApi.js"
import { updateDashboard } from "./scripts/dashboards.js"

let targetLocation = null

window.onload = () => {
    // Add event listeners
    let datalist = document.querySelector("#searchLocation").addEventListener("input",refreshSuggestions)

    //Load default data
    targetLocation = defaultLocation
    setInterval(refreshDashboard(), 5000)
}   

function refreshSuggestions(e) {
    console.log(e.target.value)
    if (e.target.value != "" & e.target.value.length > 1) {
        setTimeout((() => {
            fetchLocation(e.target.value)
        }), 250)
    }
}

function refreshDashboard() {
    fetchMeteo(targetLocation)
        .then(response => response.json())
        .then(((data) => updateDashboard(data)))
        .catch((error) => console.log(error)
        )
}