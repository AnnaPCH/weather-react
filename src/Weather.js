import React from "react";
import axios from 'axios';
 

export default function Weather() {
    function handleRespone(response){
    return (
     alert(`the temperature in London is ${response.data.main.temp}`));
    }    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
  axios.get(url).then(handleRespone);
  return (<h2>Hello from Weather</h2>);
}