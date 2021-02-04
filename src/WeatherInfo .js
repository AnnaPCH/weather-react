import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props) {
    return (
    <div className="WeatherInfo">
      <br />
    <div className="City">
      <h1>{props.data.city}</h1>
    </div>
    <div className="row">
    <div className="col">
    <div className="DateNtime">
     <FormatedDate date={props.data.date} />
    </div>
    <div className="text-capitalize"> {props.data.description} </div>
    <div className="Weather">
      <h1>{Math.round(props.data.temperature)} </h1>
      <span className="links">
          <a href="/">°C  </a> | <a href="/">  °F</a>
      </span>
      <div className="float-left">
      <WeatherIcon code={props.data.icon}  alt={props.data.description}/>
      </div>
      </div>
      </div>
      <div className="col">
       <ul className="HumNwind"><br /><br />
      <li className="hum">
        Humidity: <span id="humidity"> {props.data.humidity} </span>%
      </li>
      <li className="wind">
        Wind: <span id="windspeed"> {Math.round(props.data.wind)}  </span>
        <span id="wSpDeg">m/s</span>
      </li>
    </ul>
    </div>
    </div>
      <hr />
    </div>
    );
}