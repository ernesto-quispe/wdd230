// // select HTML elements in the document
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.41&lon=-70.51&units=imperial&appid=01c651e5d4e8eacfe1ceb1611733c463';

//   const currentTemp = document.querySelector('#current-temp');
//   const weatherIcon = document.querySelector('#weather-icon');
//   const captionDesc = document.querySelector('#caption');

//   async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         //console.log(data);
//         displayResults(data);
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }

//   apiFetch();

// function displayResults(data) {
//   currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
//   const iconCode = data.weather[0].icon;
//   const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
//   let desc = data.weather[0].description;

//   weatherIcon.setAttribute('src', iconSrc);
//   weatherIcon.setAttribute('alt', desc);
//   captionDesc.textContent = `${desc}`;
// }
// // /////////////////////////////////////////////////////////////////////////

// const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=-33.41&lon=-70.51&units=imperial&appid=01c651e5d4e8eacfe1ceb1611733c463';
// async function apiFetch2(url) {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       //console.log(data);

//       let daily_temperatures = {};

//       // Iterate over each data object in weather_data
//       data.list.forEach(data => {
//           // Extract date from dt_txt
//           const date_str = data.dt_txt.split(' ')[0];

//           // If date is not already in the dictionary, add it
//           if (!(date_str in daily_temperatures)) {
//               daily_temperatures[date_str] = { "temp_max": Number.NEGATIVE_INFINITY, "temp_min": Number.POSITIVE_INFINITY };
//           }

//           // Update highest temp_max and lowest temp_min for the date
//           daily_temperatures[date_str].temp_max = Math.round(Math.max(daily_temperatures[date_str].temp_max, data.main.temp_max));
//           daily_temperatures[date_str].temp_min = Math.round(Math.min(daily_temperatures[date_str].temp_min, data.main.temp_min));
//       });

//       // Print the results
//       const cards = document.querySelector('#forecast');

//       for (const date_str in daily_temperatures) {
//           const temps = daily_temperatures[date_str];
//           //console.log(`Date: ${date_str}, Max Temp: ${temps.temp_max}, Min Temp: ${temps.temp_min}`);

//           let card = document.createElement('section');
//           let date = document.createElement('h4');
//           date.textContent = `${date_str.split('-')[2]}`;

//           let div_temp_min = document.createElement('div');
//           div_temp_min.classList.add('div_temp_min');
//           let temp_min = document.createElement('p');
//           temp_min.textContent = `Min: ${temps.temp_min}`;
//           div_temp_min.appendChild(temp_min);

//           let div_temp_max = document.createElement('div');
//           div_temp_max.classList.add('div_temp_max');
//           let temp_max = document.createElement('p');
//           temp_max.textContent = `Max: ${temps.temp_max}`;
//           div_temp_max.appendChild(temp_max);

//           card.appendChild(date);
//           card.appendChild(div_temp_min);
//           card.appendChild(div_temp_max);
//           card.classList.add('forecast-card');

//           cards.appendChild(card);

//       }
//       //console.log(daily_temperatures[0]);

//     } else {
//         throw Error(await response.text());
//     }
//   } catch (error) {
//       console.log(error);
//   }
// }

// apiFetch2(url2);

// // function displayResults2(data) {
// // currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
// // const iconCode = data.weather[0].icon;
// // const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
// // let desc = data.weather[0].description;

// // weatherIcon.setAttribute('src', iconSrc);
// // weatherIcon.setAttribute('alt', desc);
// // captionDesc.textContent = `${desc}`;
// // }

const apiKey = "01c651e5d4e8eacfe1ceb1611733c463";
const baseUrl = "https://api.openweathermap.org/data/2.5/";
const lat = "-33.41";
const lon = "-70.51";
const units = "imperial";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#caption");
const cards = document.querySelector("#forecast");

async function apiFetch(lat, lon, endpoint, units='imperial') {
  const url = `${baseUrl}${endpoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function displayCurrentWeather(data) {
  //display the weather icon, temperature and current weather status
  currentTemp.textContent = `${Math.round(data.main.temp)}°F`;
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  let desc = titleCase(data.weather[0].description);

  weatherIcon.src = iconSrc;
  weatherIcon.alt = desc;
  captionDesc.textContent = desc;
}

function displayForecast(data) {
  // Create an dailytemperatures object and fill from the forecast api.
  // Example:
  // dailyTemperatures = {
  //   "2023-05-13": { temp_max: 85, temp_min: 57 },
  //   "2023-05-14": { temp_max: 88, temp_min: 60 },
  //   // ... other dates
  // };
  // and make sure that the lowest and highest temperature for each day (the data is provided in 3 hour intervals).
  // is inputted as the temp_min and temp_max

  let dailyTemperatures = {};
  data.list.forEach((entry) => {
    const dateStr = entry.dt_txt.split(" ")[0];
    if (!dailyTemperatures[dateStr]) {
      dailyTemperatures[dateStr] = {
        temp_max: Number.NEGATIVE_INFINITY,
        temp_min: Number.POSITIVE_INFINITY,
      };
    }
    dailyTemperatures[dateStr].temp_max = Math.max(
      dailyTemperatures[dateStr].temp_max,
      entry.main.temp_max
    );
    dailyTemperatures[dateStr].temp_min = Math.min(
      dailyTemperatures[dateStr].temp_min,
      entry.main.temp_min
    );
  });

  // convert the object into array to work with forEach
  Object.entries(dailyTemperatures).forEach(([dateStr, temps]) => {
    let card = document.createElement("section");
    let date = document.createElement("h4");

    //convert the date into the named day of the week
    date.textContent = getDayOfWeek(dateStr);

    let tempMinDiv = document.createElement("div");
    tempMinDiv.classList.add("temp-min");
    let tempMin = document.createElement("p");
    tempMin.textContent = `Min: ${Math.round(temps.temp_min)}°F`;
    tempMinDiv.appendChild(tempMin);

    let tempMaxDiv = document.createElement("div");
    tempMaxDiv.classList.add("temp-max");
    let tempMax = document.createElement("p");
    tempMax.textContent = `Max: ${Math.round(temps.temp_max)}°F`;
    tempMaxDiv.appendChild(tempMax);

    card.appendChild(date);
    card.appendChild(tempMinDiv);
    card.appendChild(tempMaxDiv);
    card.classList.add("forecast-card");

    cards.appendChild(card);
  });
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
