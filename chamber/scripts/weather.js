// select HTML elements in the document
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.41&lon=-70.51&units=imperial&appid=01c651e5d4e8eacfe1ceb1611733c463';


  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('#caption');


  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); 
        displayResults(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  let desc = data.weather[0].description;


  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
// /////////////////////////////////////////////////////////////////////////

const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=-33.41&lon=-70.51&units=imperial&appid=01c651e5d4e8eacfe1ceb1611733c463';
async function apiFetch2(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); 

      let daily_temperatures = {};

      // Iterate over each data object in weather_data
      data.list.forEach(data => {
          // Extract date from dt_txt
          const date_str = data.dt_txt.split(' ')[0];
      
          // If date is not already in the dictionary, add it
          if (!(date_str in daily_temperatures)) {
              daily_temperatures[date_str] = { "temp_max": Number.NEGATIVE_INFINITY, "temp_min": Number.POSITIVE_INFINITY };
          }
      
          // Update highest temp_max and lowest temp_min for the date
          daily_temperatures[date_str].temp_max = Math.round(Math.max(daily_temperatures[date_str].temp_max, data.main.temp_max));
          daily_temperatures[date_str].temp_min = Math.round(Math.min(daily_temperatures[date_str].temp_min, data.main.temp_min));
      });
      
      // Print the results
      const cards = document.querySelector('#forecast');

      for (const date_str in daily_temperatures) {
          const temps = daily_temperatures[date_str];
          //console.log(`Date: ${date_str}, Max Temp: ${temps.temp_max}, Min Temp: ${temps.temp_min}`);


          let card = document.createElement('section');
          let date = document.createElement('h4'); 
          date.textContent = `${date_str.split('-')[2]}`; 

          let div_temp_min = document.createElement('div');
          div_temp_min.classList.add('div_temp_min'); 
          let temp_min = document.createElement('p');
          temp_min.textContent = `Min: ${temps.temp_min}`; 
          div_temp_min.appendChild(temp_min);

          let div_temp_max = document.createElement('div');
          div_temp_max.classList.add('div_temp_max'); 
          let temp_max = document.createElement('p');
          temp_max.textContent = `Max: ${temps.temp_max}`; 
          div_temp_max.appendChild(temp_max);
   
          card.appendChild(date);
          card.appendChild(div_temp_min);
          card.appendChild(div_temp_max);
          card.classList.add('forecast-card');
      
          cards.appendChild(card);

          
      }
      //console.log(daily_temperatures[0]);

    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch2(url2);

// function displayResults2(data) {
// currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
// const iconCode = data.weather[0].icon;
// const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
// let desc = data.weather[0].description;


// weatherIcon.setAttribute('src', iconSrc);
// weatherIcon.setAttribute('alt', desc);
// captionDesc.textContent = `${desc}`;
// }
