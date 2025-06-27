import OpenWeather from "openweathermap-ts";

const openWeather = new OpenWeather({
  apiKey: "",
});

openWeather.setUnits("metric");

export default openWeather;
