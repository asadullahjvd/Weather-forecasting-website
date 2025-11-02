const apiKey = "a8f5c27a3d2c417985352424250907";

const getWeather = (city) => {
  document.getElementById("cityname").innerHTML = city;

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  async function fetchWeather() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const weather = data.current;
      document.getElementById("last_updated_epoch").innerHTML = weather.last_updated_epoch;
      document.getElementById("last_updated").innerHTML = weather.last_updated;
      document.getElementById("temp_c").innerHTML = weather.temp_c;
      document.getElementById("temp_f").innerHTML = weather.temp_f;
      document.getElementById("is_day").innerHTML = weather.is_day;
      document.getElementById("condition").innerHTML = JSON.stringify(weather.condition);
      document.getElementById("text").innerHTML = weather.condition.text;
      document.getElementById("icon").innerHTML = `<img src="https:${weather.condition.icon}" alt="icon">`;
      document.getElementById("code").innerHTML = weather.condition.code;
      document.getElementById("wind_mph").innerHTML = weather.wind_mph;
      document.getElementById("wind_kph").innerHTML = weather.wind_kph;
      document.getElementById("wind_degree").innerHTML = weather.wind_degree;
      document.getElementById("wind_dir").innerHTML = weather.wind_dir;
      document.getElementById("pressure_mb").innerHTML = weather.pressure_mb;
      document.getElementById("pressure_in").innerHTML = weather.pressure_in;
      document.getElementById("precip_mm").innerHTML = weather.precip_mm;
      document.getElementById("precip_in").innerHTML = weather.precip_in;
      document.getElementById("humidity").innerHTML = weather.humidity;
      document.getElementById("cloud").innerHTML = weather.cloud;
      document.getElementById("feelslike_c").innerHTML = weather.feelslike_c;
      document.getElementById("feelslike_f").innerHTML = weather.feelslike_f;
      document.getElementById("windchill_c").innerHTML = weather.windchill_c;
      document.getElementById("windchill_f").innerHTML = weather.windchill_f;
      document.getElementById("heatindex_c").innerHTML = weather.heatindex_c;
      document.getElementById("heatindex_f").innerHTML = weather.heatindex_f;
      document.getElementById("dewpoint_c").innerHTML = weather.dewpoint_c;
      document.getElementById("dewpoint_f").innerHTML = weather.dewpoint_f;
      document.getElementById("vis_km").innerHTML = weather.vis_km;
      document.getElementById("vis_miles").innerHTML = weather.vis_miles;
      document.getElementById("uv").innerHTML = weather.uv;
      document.getElementById("gust_mph").innerHTML = weather.gust_mph;
      document.getElementById("gust_kph").innerHTML = weather.gust_kph;

    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  fetchWeather();
};
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault(); 
  const cityInput = document.getElementById("city").value.trim();
  if (cityInput) {
    getWeather(cityInput);
  } else {
    alert("Please enter a city name.");
  }
});
getWeather("Lahore");
