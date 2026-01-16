import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const ApiKey = "42f960b327158df7a8a6b42f20944c41";
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setWeather(null);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-blue-500/50">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Weather App</h1>
        <div className="flex flex-col space-y-4">
          <input
            value={city}
            onChange={handleChange}
            type="text"
            name="city"
            placeholder="Enter City Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400"
          />
          <button
            onClick={fetchWeather}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Search
          </button>
        </div>

        {
          weather && (
            <div className="mt-8 text-center animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
              <div className="flex justify-center items-center my-4">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                  className="w-24 h-24 drop-shadow-md"
                />
                <p className="text-5xl font-bold text-gray-900">{Math.round(weather.main.temp)}°C</p>
              </div>
              <p className="text-lg text-gray-600 capitalize mb-6 font-medium">{weather.weather[0].description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-500 mb-1">Humidity</p>
                  <p className="text-xl font-semibold text-gray-800">{weather.main.humidity}%</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-500 mb-1">Wind Speed</p>
                  <p className="text-xl font-semibold text-gray-800">{weather.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default App;
