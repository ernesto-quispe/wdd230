let current = document.querySelector(".currentTemp").textContent;
let wind = document.querySelector(".windSpeed").textContent;
let windChill = document.querySelector(".windChill");

function windchill(temp,windspeed) {
    let chill = ""

    if (temp <= 50 && windspeed > 3){
        chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16)
        chill = `${Math.round(chill,1)} &deg F`
        console.log(chill)
    }
    else {
        chill = 'N/A'
    }
    document.querySelector(".windChill").innerHTML = chill
}
windchill(current,wind);