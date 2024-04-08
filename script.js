import {fetchLocation} from "./scripts/locations.js"
import {fetchMeteo} from "./scripts/meteoApi.js"


window.onload = () => {
    // Add event listeners
    // let datalist = document.querySelector("#searchLocation").addEventListener("input",refreshSuggestions)

    //Load default data
    refreshDashboard()


}

function refreshSuggestions(e){
    console.log(e.target.value )
    if(e.target.value != "" & e.target.value.length > 1 ){
        setTimeout((()=>{
            fetchLocation(e.target.value)
    }),250)
    }
}

function refreshDashboard(){
    fetchMeteo(location)
    // updateDashboard()
}