import "./styles.css";

const api_key = "a0fa6d653a924d548e5123403240804"; // API key, shouldn't matter if someone sees it

async function getWeather(city) {
  // gets the weather info as json. JSON processed in other function
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`,
    { mode: "cors" }
  );
  console.log(response);
}
