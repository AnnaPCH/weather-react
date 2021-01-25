import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1> 19 </h1>
      <span className="links">
<a href="/"> °C  </a> | <a href="/"> °F</a>
      </span>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
        alt="#"
      />
      <div className="description"> Partly cloudy </div>
    </div>
  );
}