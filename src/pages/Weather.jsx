import { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Vijayawada&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!weather) return <h2>Loading...</h2>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        🌦 Weather Dashboard
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md">

        <h2 className="text-2xl font-bold">
          {weather.name}
        </h2>

        <h3 className="text-xl mt-3">
          🌡 {weather.main.temp} °C
        </h3>

        <p>
          💧 Humidity:
          {weather.main.humidity}%
        </p>

        <p>
          🌬 Wind:
          {weather.wind.speed} m/s
        </p>

        <p>
          🌥 Condition:
          {weather.weather[0].main}
        </p>

      </div>
    </div>
  );
}

export default Weather;