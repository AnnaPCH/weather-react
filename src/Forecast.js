import React, {useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";



export default function Forecast(props) {
    const [loaded, setLoaded] =  useState(false);
    
    const [forecastData, setForecastData] =  useState(null);

    function handleForecastResponse(response) {
        setForecastData(response.data);
        setLoaded(true);
    }

 if(loaded && props.city === forecastData.city.name) {
 return ( 
 <div className="row">

  
        <ForecastPreview data={forecastData.list[0]} />
        <ForecastPreview data={forecastData.list[1]} />
        <ForecastPreview data={forecastData.list[2]} />
        <ForecastPreview data={forecastData.list[3]} />
        <ForecastPreview data={forecastData.list[4]} />
        <ForecastPreview data={forecastData.list[5]} />
       
  
</div>
 );
} else {
let forecastUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
 axios.get(forecastUrl).then(handleForecastResponse);
 return null;
}
}