import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("heraklion");
    function showCity(response) {
      setCity(response.data.name);
    }
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
  axios(apiUrl).then(showCity)
  return ( <div className="container">
    <form className="SearchForm">
      <div className="row">
      <div className="col-9">
      <input type="search"  placeholder="Enter city..." className="form-control"  autoFocus="on" /> 
      </div>
      <div className="col-3">
      <button className=" btn btn-secondary w-100"> Search </button>
    </div>
    </div>
    </form>
   
    <div className="City">
      <h1>{city}</h1>
    </div>
    <div className="row">
    <div className="col">
    <div className="DateNtime">
      Last updated on Tuesday, 20:00 
    </div>
    <div className="Weather"><br />
      <h1> 19 </h1>
      <span className="links">
<a href="/"> °C  </a> | <a href="/"> °F</a>
      </span>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
        alt="partly cloudy" className="float-left"
      />
      <div className="description"> Partly cloudy </div>
      </div>
      </div>
      <div className="col">
       <ul className="HumNwind"><br /><br />
      <li className="hum">
        Humidity: <span id="humidity">70 </span>%
      </li>
      <li className="wind">
        Wind: <span id="windspeed">4 </span>
        <span id="wSpDeg">m/s</span>
      </li>
    </ul>
    </div>
    </div>
      <hr />
    </div>
    
  );
}