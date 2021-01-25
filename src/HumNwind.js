import React from "react";
import "./HumNwind.css";

export default function HumNwind() {
  return (
    <ul className="HumNwind"><br /><br />
      <li className="hum">
        Humidity: <span id="humidity">70 </span>%
      </li>
      <li className="wind">
        Wind: <span id="windspeed">4 </span>
        <span id="wSpDeg">m/s</span>
      </li>
    </ul>
  );
}
