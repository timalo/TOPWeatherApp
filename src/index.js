import "./styles.css";

const api_key = "a0fa6d653a924d548e5123403240804"; // API key, shouldn't matter if someone sees it

async function getWeather(city) {
  // gets the weather info as json. info processed in other function
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`,
    { mode: "cors" }
  );
  const weatherInfo = await response.json();
  return weatherInfo;
}

function parseWeather(weatherInfo) {
  //Parses the weather JSON and displays the info on the page
  const cityName = weatherInfo.location.name;
  const countryName = weatherInfo.location.country;
  const temperature_c = weatherInfo.current.temp_c;
  const windSpeed_kph = weatherInfo.current.wind_kph;
  const feelsLike_c = weatherInfo.current.feelslike_c;

  const cityDiv = document.getElementsByClassName("cityName")[0];
  const countryDiv = document.getElementsByClassName("countryName")[0];
  const tempHeader = document.getElementsByClassName("tempHeader")[0];
  const tempValue = document.getElementsByClassName("tempValue")[0];

  const feelsLikeHeader = document.getElementsByClassName("feelsLikeHeader")[0];
  const feelsLikeValue = document.getElementsByClassName("feelsLikeValue")[0];

  const windHeader = document.getElementsByClassName("windHeader")[0];
  const windValue = document.getElementsByClassName("windValue")[0];

  cityDiv.innerHTML = cityName;
  countryDiv.innerHTML = countryName;
  tempHeader.innerHTML = "Temperature";
  tempValue.innerHTML = temperature_c + "°C";

  feelsLikeHeader.innerHTML = "Feels like";
  feelsLikeValue.innerHTML = feelsLike_c + "°C";

  windHeader.innerHTML = "Wind speed";
  windValue.innerHTML = windSpeed_kph + " km/h";
}

const searchButton = document.getElementsByClassName("searchButton")[0];
searchButton.addEventListener("click", () => {
  const city = document.getElementsByClassName("cityInput")[0].value;
  document.getElementsByClassName("cityInput")[0].value = ""; //Clear the input field
  getWeather(city).then((weatherInfo) => {
    parseWeather(weatherInfo);
  });
});
