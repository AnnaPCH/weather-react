import React, {useState} from "react";


export default function Units(props) {

const [unit, setUnit] = useState("celsius");

    function showF(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showC(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit() {
     return (props.celsius * 9/5)+32;
    }

        if (unit=== "celsius") {
         return (
    <div className="Units">
    <h1>{Math.round(props.celsius)} </h1>
      <span className="links">
         <span className="active">°C </span>  | <a href="/" onClick={showF}>  °F</a>
      </span>
      </div> 
      );
         } else {
              return (
    <div className="Units">
    <h1>{Math.round(fahrenheit())} </h1>
      <span className="links">
         <a href="/" onClick={showC}> °C </a> |  <span className="active">°F</span> 
      </span>
      </div> 
      );
         }

}