const apiKey = "01c651e5d4e8eacfe1ceb1611733c463";
const baseUrl = "https://api.openweathermap.org/data/2.5/";
const lat = "20.42";
const lon = "-86.92";
const units = "imperial";
const currentTemp = document.querySelector(".currentTemp");
const highTemp = document.querySelectorAll(".highTemp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weatherCaption");
const humidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feelsLike");
const cards = document.querySelector("#forecast");


async function apiFetch(lat, lon, endpoint, units='imperial') {
  const url = `${baseUrl}${endpoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  //console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}







function displayCurrentWeather(data) {
console.log(data)
  //display the weather icon, temperature and current weather status
  highTemp[0].textContent = `High today: ${Math.round(data.main.temp_max)}°F`;
  highTemp[1].textContent = `High today: ${Math.round(data.main.temp_max)}°F`;
  
  currentTemp.textContent = `${Math.round(data.main.temp)}°F`;
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  const desc = titleCase(data.weather[0].description);
  const humid = `${data.main.humidity}% Humidity`;
  const currentFeel = `Feels Like: ${Math.round(data.main.feels_like)}°F`;
  weatherIcon.src = iconSrc;
  weatherIcon.alt = desc;
  captionDesc.textContent = desc;
  humidity.textContent = humid;
  feelsLike.textContent = currentFeel;

}

// function displayForecast(data) {
//   // Create an dailytemperatures object and fill from the forecast api.
//   // Example:
//   // dailyTemperatures = {
//   //   "2023-05-13": { temp_max: 85, temp_min: 57 },
//   //   "2023-05-14": { temp_max: 88, temp_min: 60 },
//   //   // ... other dates
//   // };
//   // and make sure that the lowest and highest temperature for each day (the data is provided in 3 hour intervals).
//   // is inputted as the temp_min and temp_max

//   let dailyTemperatures = {};
//   data.list.forEach((entry) => {
//     const dateStr = entry.dt_txt.split(" ")[0];
//     if (!dailyTemperatures[dateStr]) {
//       dailyTemperatures[dateStr] = {
//         temp_max: Number.NEGATIVE_INFINITY,
//         temp_min: Number.POSITIVE_INFINITY,
//       };
//     }
//     dailyTemperatures[dateStr].temp_max = Math.max(
//       dailyTemperatures[dateStr].temp_max,
//       entry.main.temp_max
//     );
//     dailyTemperatures[dateStr].temp_min = Math.min(
//       dailyTemperatures[dateStr].temp_min,
//       entry.main.temp_min
//     );
//   });

//   // convert the object into array to work with forEach
//   Object.entries(dailyTemperatures).forEach(([dateStr, temps]) => {
//     let card = document.createElement("section");
//     let date = document.createElement("h4");

//     //convert the date into the named day of the week
//     date.textContent = getDayOfWeek(dateStr);

//     let tempMinDiv = document.createElement("div");
//     tempMinDiv.classList.add("temp-min");
//     let tempMin = document.createElement("p");
//     tempMin.textContent = `Min: ${Math.round(temps.temp_min)}°F`;
//     tempMinDiv.appendChild(tempMin);

//     let tempMaxDiv = document.createElement("div");
//     tempMaxDiv.classList.add("temp-max");
//     let tempMax = document.createElement("p");
//     tempMax.textContent = `Max: ${Math.round(temps.temp_max)}°F`;
//     tempMaxDiv.appendChild(tempMax);

//     card.appendChild(date);
//     card.appendChild(tempMinDiv);
//     card.appendChild(tempMaxDiv);
//     card.classList.add("forecast-card");

//     cards.appendChild(card);
//   });
// }

// function displayForecast(data) {
// let dailyTemperatures = {};
// data.list.forEach((entry) => {
//   const dateStr = entry.dt_txt.split(" ")[0];
//   if (!dailyTemperatures[dateStr]) {
//     dailyTemperatures[dateStr] = {
//       temp_max: Number.NEGATIVE_INFINITY,
//       temp_min: Number.POSITIVE_INFINITY,
//     };
//   }
//   dailyTemperatures[dateStr].temp_max = Math.max(
//     dailyTemperatures[dateStr].temp_max,
//     entry.main.temp_max
//   );
//   dailyTemperatures[dateStr].temp_min = Math.min(
//     dailyTemperatures[dateStr].temp_min,
//     entry.main.temp_min
//   );
// });

// // Get tomorrow's date
// let tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);
// let tomorrowStr = tomorrow.toISOString().split("T")[0];

// // Only create a card for tomorrow's forecast
// if (dailyTemperatures[tomorrowStr]) {
//   let temps = dailyTemperatures[tomorrowStr];
//   let card = document.createElement("section");
//   let date = document.createElement("h4");
//   date.textContent = getDayOfWeek(tomorrowStr);

//   let tempMinDiv = document.createElement("div");
//   tempMinDiv.classList.add("temp-min");
//   let tempMin = document.createElement("p");
//   tempMin.textContent = `Min: ${Math.round(temps.temp_min)}°F`;
//   tempMinDiv.appendChild(tempMin);

//   let tempMaxDiv = document.createElement("div");
//   tempMaxDiv.classList.add("temp-max");
//   let tempMax = document.createElement("p");
//   tempMax.textContent = `Max: ${Math.round(temps.temp_max)}°F`;
//   tempMaxDiv.appendChild(tempMax);

//   card.appendChild(date);
//   card.appendChild(tempMinDiv);
//   card.appendChild(tempMaxDiv);
//   card.classList.add("forecast-card");

//   cards.appendChild(card);
// }
// }
function displayForecast(data) {
  // Get tomorrow's date
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomorrowStr = tomorrow.toISOString().split("T")[0];

  // Find the forecast for tomorrow at 15:00
  let forecast = data.list.find((entry) => {
    return entry.dt_txt.startsWith(tomorrowStr) && entry.dt_txt.includes("15:00");
  });

  // If there is a forecast for tomorrow at 15:00, create a card for it
  if (forecast) {
    let card = document.createElement("section");
    let date = document.createElement("h4");
    date.textContent = getDayOfWeek(tomorrowStr);

    let tempDiv = document.createElement("div");
    tempDiv.classList.add("temp");
    let temp = document.createElement("p");
    temp.textContent = `Temp at 15:00: ${Math.round(forecast.main.temp)}°F`;
    tempDiv.appendChild(temp);

    card.appendChild(date);
    card.appendChild(tempDiv);
    card.classList.add("forecast-card");

    cards.appendChild(card);
  }
}


async function initWeatherApp() {
  //initiated the api call for weather and for the 5 day forecast.
  const currentWeatherData = await apiFetch(lat, lon, "weather", units);;
  if (currentWeatherData) displayCurrentWeather(currentWeatherData);

  const forecastData = await apiFetch(lat, lon, "forecast", units);
  if (forecastData) displayForecast(forecastData);
}

function getDayOfWeek(dateString) {

  //Convert the day of the imported date into a day of the week
  const days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateString);

  // using getUTCDay because sometimes the "getDay" function would return the wrong number because of time zon shenanigans.
  //All we need is the correct number, timezones don't matter
  return days[date.getUTCDay()];
}

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

initWeatherApp();
