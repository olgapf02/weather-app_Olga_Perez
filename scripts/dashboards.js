import { variables, imageVariables } from "./maps.js"


function updateDashboard(data) {
    // Update meteo variables
    for (let [variableSet, values] of Object.entries(variables)) {
        for (let variable of values) {
            updateVariable(variableSet, variable, data[variableSet][variable],
                data[`${variableSet}_units`][variable])
        }
    }
    // Update meteo images
    for (let [imageVariableSet, values] of Object.entries(imageVariables)) {
        for (let variable of values) {
            updateWMO(imageVariableSet, variable, data[imageVariableSet][variable], data[imageVariableSet]["is_day"])
            updateWindDirection(imageVariableSet, variable, data[imageVariableSet][variable])
        }
    }
}

function updateVariable(variableSet, variable, value, units) {
    const targetClass = `.ph-${variableSet}-${variable}`
    let elements = document.querySelectorAll(targetClass)
    console.log(elements)
    if (value.length > 1) {     // FIX: hace que los value tipo string siempre pasen esta condición (current-time)
        for (let [index, element] of Array.from(elements).entries()) {
            if (variable == "sunrise" || variable == "sunset") {
                element.innerHTML = value[index].slice(11, 16)
            }
            else if (variable == "time") {
                element.innerHTML = value[index].slice(8, 10) + "/" + value[index].slice(5, 7)
            }
            else if (variableSet == "hourly") {
                element.innerHTML = value[index * 3 + 2] + "" + units
            }
            else {
                element.innerHTML = value[index] + "" + units
            }
        }
    }
    else {
        let element = Array.from(elements)[0]
        if (variable == "time") {
            element.innerHTML = value[index].slice(8, 10) + "/" + value[index].slice(5, 7)
        }
        else{
            element.innerHTML = value + "" + units
        }
        
    }
}

function updateWMO(variableSet, variable, value, isDay) {
    const targetClass = `.ph-${variableSet}-${variable}`
    let elements = document.querySelectorAll(targetClass)

    if (variable == "weather_code") {
        if (value.length > 1) {
            for (let [index, element] of Array.from(elements).entries()) {
                if (variableSet == "hourly") {
                    if (isDay[index * 3 + 2]) {
                        element.src = `./assets/images/weather_icons/${value[index * 3 + 2]}d.png`
                    }
                    else {
                        element.src = `./assets/images/weather_icons/${value[index * 3 + 2]}n.png`
                    }
                }
                else {
                    element.src = `./assets/images/weather_icons/${value[index]}d.png`
                }
            }
        }
        else {
            let element = Array.from(elements)[0]
            element.src = `./assets/images/weather_icons/${value}d.png`
        }
    }
}

function updateWindDirection(variableSet, variable, value) {
    const targetClass = `.ph-${variableSet}-${variable}`
    let elements = document.querySelectorAll(targetClass)

    if (variable == "wind_direction_10m") {
        if (value.length > 1) {
            for (let [index, element] of Array.from(elements).entries()) {
                if (variableSet == "hourly") {
                    element.style = `transform:rotate(${value[index * 3 + 2]}deg);`
                }
            }
        }
        else {
        }
    }
}

export { updateDashboard }