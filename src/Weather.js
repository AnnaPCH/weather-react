import React, {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo ";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {

  const [city,setCity] = useState(props.defaultcity)
  let [weatherData, setWeatherData] = useState({ready: false});
  
  function handleResposne (response) {
    
    setWeatherData({
     ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: new Date(response.data.dt * 1000)
    });
  } 

function search() {
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
  axios.get(apiUrl).then(handleResposne);
}

 function handleSubmit(event) {
  event.preventDefault(); 
  search();

 }
 function handleChange(event) {
    setCity(event.target.value);
 }

  if(weatherData.ready){
     return ( <div className="container">
    <form onSubmit={handleSubmit} className="SearchForm">
      <div className="row">
      <div className="col-9">
      <input onChange={handleChange} type="search"  placeholder="Enter city..." className="form-control"  autoFocus="on" /> 
      </div>
      <div className="col-3">
      <button className=" btn btn-secondary w-100"> Search </button>
    </div>
    </div>
    </form>
   <WeatherInfo data={weatherData}/>
    </div>
    
  );
  } else {

    search();
  return <Loader type="BallTriangle" color="#f8f8c9" height={80} width={80} />;
  }
}