function fetchMeteo(location) {
    fetch(buildURL())
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.log(error)
        )
}

function fetchMeteoXHR(location) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(JSON.parse(xhttp.responseText))
        }
    };
    xhttp.open("GET", buildURL(), true);
    xhttp.send();
}

function buildURL() {
    // const url = 'https://api.open-meteo.com/v1/forecast?' + new URLSearchParams({
    //     // Default location: Barcelona, Spain
    //     "latitude": 41.390205,
    //     "longitude": 2.154007,
    //     "hourly": "temperature_2m,relative_humidity_2m,is_day,precipitation,surface_pressure,wind_speed_10m,wind_direction_10m",
    //     "daily": "sunrise,sunset,precipitation_probability_max"
    // })

    // URL para trabajr todos con ella
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current=temperature_2m,relative_humidity_2m,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset'
    // const url = `https://api.open-meteo.com/v1/forecast?latitude=41.390205&longitude=2.154007&daily=sunrise,sunset,precipitation_probability_max`
    return url
}

export { fetchMeteo }