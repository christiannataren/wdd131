const temperature = 25;
const wind_speed = 5;

function calculateWindChill(temperature, wind_speed) {
    return (temperature <= 10 && wind_speed > 4.8) ? 13.12 + (0.6215 * temperature) - (11.37 * wind_speed ** 0.16) + 0.3965 * (temperature * wind_speed ** 0.16) : undefined;
}


function setWindChill() {
    let data = calculateWindChill(temperature, wind_speed);
    if (data == undefined) {
        document.getElementById("wind-chill").textContent = "N/A";
    } else {
        document.getElementById("wind-chill").textContent = data.toFixed(1);
    }

}
function setTemperature() {
    document.getElementById("temperature").textContent = temperature;
}

function setWind() {
    document.getElementById("wind").textContent = wind_speed;

}


setTemperature();
setWind();
setWindChill();




