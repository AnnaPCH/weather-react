import React, {useState} from "react";
import axios from "axios";

export default function City() {
   let [city, setCity] = useState("heraklion");
    function showCity(response) {
     return (
        setCity(response.data.name)
     );
    }

  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6870760fab0d60a8a4c52bbd8751c3cc&units=metric`;
  axios(apiUrl).then(showCity)

  return (
    <div className="City">
      <h1>{city}</h1>
    </div>
  );
}
