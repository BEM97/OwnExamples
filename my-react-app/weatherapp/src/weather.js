import React, { useState } from "react";
import featchweather from "./weatherapi";
import "./weatherCss.css";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({ location: "", current: "" });

  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await featchweather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="enter the city name"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      <div className="city">
        <div className="date">{new Date().toDateString("en-US")}</div>

        <h2 className="city-name">
          <span>{weather.location.name}</span>
          <sup>{weather.location.country}</sup>
        </h2>
        <div className="city-temp">
          {Math.round(weather.current.temp_c)}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
          <h3>{weather.current && weather.current.condition.text}</h3>
          {/* <img>src={weather.current && weather.current.condition.icon}</img> */}
        </div>
      </div>
    </div>
  );
};

export default Weather;
