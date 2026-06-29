import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaCloudSun,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaSearch,
  FaCloudRain,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";

function Weather() {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:5000/api/weather/${city}`
      );

      setWeather(data.data);

    } catch (err) {
      console.log(err);
      alert("City not found");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);

          const { latitude, longitude } = position.coords;

          const { data } = await axios.get(
            `http://localhost:5000/api/weather/${latitude},${longitude}`
          );

          setWeather(data.data);
          setCity(data.data.location.name);

        } catch (err) {
          console.log(err);
          alert("Unable to fetch your location.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        alert("Location permission denied.");
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 py-24">

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto text-center px-6">

          <div className="w-28 h-28 rounded-full bg-white mx-auto flex items-center justify-center shadow-2xl">

            <FaCloudSun className="text-6xl text-green-700" />

          </div>

          <h1 className="text-6xl font-extrabold text-white mt-8">
            Weather Forecast
          </h1>

          <p className="text-xl text-green-100 mt-5">
            Smart weather insights for better farming decisions.
          </p>

        </div>

      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">

        <div className="bg-white rounded-[30px] shadow-2xl border border-green-100 p-5">

          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1 flex items-center gap-4 border border-green-200 rounded-2xl px-5">

              <FaSearch className="text-2xl text-green-600" />

              <input
                type="text"
                placeholder="Search City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchWeather()}
                className="flex-1 py-4 outline-none"
              />

            </div>

            <button
              onClick={searchWeather}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold"
            >
              Search
            </button>

            <button
              onClick={getCurrentLocation}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold"
            >
              📍 My Location
            </button>

          </div>

        </div>

      </div>
      {loading && (

        <div className="flex justify-center py-24">

          <div className="bg-white rounded-3xl shadow-xl px-12 py-10 text-center">

            <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>

            <h2 className="mt-6 text-2xl font-bold text-green-700">
              Fetching Weather...
            </h2>

            <p className="text-gray-500 mt-2">
              Please wait a moment.
            </p>

          </div>

        </div>

      )}

      {weather && !loading && (

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="bg-white rounded-[35px] shadow-2xl overflow-hidden">

            <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 p-10 text-white">

              <div className="flex flex-col lg:flex-row justify-between items-center">

                <div>

                  <div className="flex items-center gap-3">

                    <FaMapMarkerAlt />

                    <h2 className="text-5xl font-extrabold">
                      {weather.location.name}
                    </h2>

                  </div>

                  <p className="text-green-100 mt-3 text-xl">
                    {weather.location.region}, {weather.location.country}
                  </p>

                  <p className="mt-4 text-lg">
                    {weather.current.condition.text}
                  </p>

                </div>

                <div className="text-center">

                  <img
                    src={`https:${weather.current.condition.icon}`}
                    alt="Weather"
                    className="w-36 mx-auto"
                  />

                  <h1 className="text-7xl font-extrabold">
                    {Math.round(weather.current.temp_c)}°
                  </h1>

                  <p className="text-2xl">
                    Feels Like {Math.round(weather.current.feelslike_c)}°
                  </p>

                </div>

              </div>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">

              <div className="bg-green-50 rounded-3xl p-8 text-center">

                <FaTemperatureHigh className="mx-auto text-5xl text-red-500" />

                <h3 className="mt-5 font-bold text-xl">
                  Temperature
                </h3>

                <p className="text-4xl font-bold mt-3">
                  {weather.current.temp_c}°C
                </p>

              </div>

              <div className="bg-blue-50 rounded-3xl p-8 text-center">

                <FaTint className="mx-auto text-5xl text-blue-500" />

                <h3 className="mt-5 font-bold text-xl">
                  Humidity
                </h3>

                <p className="text-4xl font-bold mt-3">
                  {weather.current.humidity}%
                </p>

              </div>

              <div className="bg-gray-50 rounded-3xl p-8 text-center">

                <FaWind className="mx-auto text-5xl text-gray-600" />

                <h3 className="mt-5 font-bold text-xl">
                  Wind Speed
                </h3>

                <p className="text-4xl font-bold mt-3">
                  {weather.current.wind_kph} km/h
                </p>

              </div>

              <div className="bg-indigo-50 rounded-3xl p-8 text-center">

                <FaCloudRain className="mx-auto text-5xl text-indigo-600" />

                <h3 className="mt-5 font-bold text-xl">
                  Pressure
                </h3>

                <p className="text-4xl font-bold mt-3">
                  {weather.current.pressure_mb} mb
                </p>

              </div>

              <div className="bg-yellow-50 rounded-3xl p-8 text-center">

                <FaSun className="mx-auto text-5xl text-yellow-500" />

                <h3 className="mt-5 font-bold text-xl">
                  UV Index
                </h3>

                <p className="text-4xl font-bold mt-3">
                  {weather.current.uv}
                </p>

              </div>
              <div className="bg-purple-50 rounded-3xl p-8 text-center">

                <FaCloudSun className="mx-auto text-5xl text-purple-500" />

                <h3 className="mt-5 font-bold text-xl">
                  Air Quality
                </h3>

                <p className="text-4xl font-bold mt-3">
                  AQI {weather.current.air_quality["us-epa-index"]}
                </p>

              </div>

              <div className="bg-orange-50 rounded-3xl p-8 text-center">

                <FaSun className="mx-auto text-5xl text-orange-500" />

                <h3 className="mt-5 font-bold text-xl">
                  Sunrise
                </h3>

                <p className="text-2xl font-bold mt-3">
                  {weather.forecast.forecastday[0].astro.sunrise}
                </p>

              </div>

              <div className="bg-slate-50 rounded-3xl p-8 text-center">

                <FaMoon className="mx-auto text-5xl text-slate-600" />

                <h3 className="mt-5 font-bold text-xl">
                  Sunset
                </h3>

                <p className="text-2xl font-bold mt-3">
                  {weather.forecast.forecastday[0].astro.sunset}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

      {weather && (

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="text-4xl font-extrabold text-green-700 mb-10">
            7-Day Weather Forecast
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">

            {weather.forecast.forecastday.map((day, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 border border-green-100 hover:-translate-y-2 transition"
              >

                <h3 className="font-bold text-lg text-center text-green-700">

                  {new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}

                </h3>

                <p className="text-center text-sm text-gray-500 mt-2">
                  {day.date}
                </p>

                <img
                  src={`https:${day.day.condition.icon}`}
                  alt=""
                  className="w-20 mx-auto my-4"
                />

                <h4 className="text-center font-semibold">
                  {day.day.condition.text}
                </h4>

                <div className="mt-6 space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span>🌡 Max</span>
                    <span>{day.day.maxtemp_c}°C</span>
                  </div>

                  <div className="flex justify-between">
                    <span>❄ Min</span>
                    <span>{day.day.mintemp_c}°C</span>
                  </div>

                  <div className="flex justify-between">
                    <span>💧 Rain</span>
                    <span>{day.day.daily_chance_of_rain}%</span>
                  </div>

                  <div className="flex justify-between">
                    <span>💨 Wind</span>
                    <span>{day.day.maxwind_kph} km/h</span>
                  </div>

                  <div className="flex justify-between">
                    <span>☀ UV</span>
                    <span>{day.day.uv}</span>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      )}
      {weather && (

        <section className="max-w-7xl mx-auto px-6 pb-16">

          <h2 className="text-4xl font-extrabold text-green-700 mb-8">
            Today's Hourly Forecast
          </h2>

          <div className="overflow-x-auto">

            <div className="flex gap-5 pb-4">

              {weather.forecast.forecastday[0].hour.map((hour, index) => (

                <div
                  key={index}
                  className="min-w-[170px] bg-white rounded-3xl shadow-lg p-5 border border-green-100 hover:-translate-y-2 transition"
                >

                  <h3 className="text-center font-bold">
                    {hour.time.split(" ")[1]}
                  </h3>

                  <img
                    src={`https:${hour.condition.icon}`}
                    alt=""
                    className="w-16 mx-auto my-3"
                  />

                  <p className="text-center font-semibold text-gray-700">
                    {hour.condition.text}
                  </p>

                  <h2 className="text-center text-3xl font-extrabold text-green-700 mt-3">
                    {hour.temp_c}°
                  </h2>

                  <div className="mt-4 space-y-2 text-sm">

                    <p>💧 Humidity : {hour.humidity}%</p>

                    <p>💨 Wind : {hour.wind_kph} km/h</p>

                    <p>🌧 Rain Chance : {hour.chance_of_rain}%</p>

                    <p>☁ Cloud : {hour.cloud}%</p>

                    <p>🌡 Feels Like : {hour.feelslike_c}°C</p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}

      {weather && (

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <h2 className="text-4xl font-extrabold text-green-700 mb-10">

            🌾 Smart Farming Advice

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">

              <h3 className="text-2xl font-bold text-green-700">

                💧 Irrigation

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                {weather.forecast.forecastday[0].day.daily_chance_of_rain > 60
                  ? "High chance of rain today. Delay irrigation to avoid waterlogging."
                  : "Low chance of rain. Irrigation can be scheduled if soil moisture is low."}

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">

              <h3 className="text-2xl font-bold text-green-700">

                🌱 Crop Care

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                Monitor crops regularly. Maintain proper drainage and inspect plants for pests and fungal diseases.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">

              <h3 className="text-2xl font-bold text-green-700">

                ☀ Field Work

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                {weather.current.uv > 8
                  ? "Strong sunlight today. Prefer field work during early morning or evening."
                  : "Weather is suitable for regular farming activities."}

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">

              <h3 className="text-2xl font-bold text-green-700">

                🌦 Today's Summary

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                Temperature {weather.current.temp_c}°C with {weather.current.condition.text.toLowerCase()}.

                <br /><br />

                Humidity: {weather.current.humidity}%

                <br />

                Wind: {weather.current.wind_kph} km/h

                <br />

                Pressure: {weather.current.pressure_mb} mb

                <br />

                UV Index: {weather.current.uv}

              </p>

            </div>

          </div>

        </section>

      )}

    </>

  );

}

export default Weather;