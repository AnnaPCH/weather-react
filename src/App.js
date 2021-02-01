import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";


export default function App() {

  return (<div className="App-Footer">
    <div className="App">
      
      <Weather />
     
    </div>
    <div className="footer">
    <Footer />
    </div>
    </div>
    );
}