function fetchLocation(location) {
    fetch('https://geocoding-api.open-meteo.com/v1/search?' + new URLSearchParams({
        "name": location,
        "count": 10,
        "language": "en",
        "format": "json"
    }))
        .then(response => response.json())
        .then(data => updateSuggestions(data["results"]))
        .catch((error) => console.log(error))
}

function updateSuggestions(data){
    let datalist = document.querySelector("#suggestions")
    datalist.innerHTML = ""
    data.forEach((item,index)=>{
        let option = document.createElement('option')
        if(item["admin1"] != "" & item["admin1"] != undefined){
            option.value=`${item["name"]}, ${item["admin1"]}, ${item["country"]}`
        }
        else{
            option.value=`${item["name"]}, ${item["country"]}`
        }
        datalist.appendChild(option)
    })
}

export {fetchLocation}