import OpenWeather from "openweathermap-ts";

const openWeather = new OpenWeather({
  apiKey: "3cf55ce2735be632614ff860741f8796"
});

openWeather.setUnits("metric");

export default openWeather;