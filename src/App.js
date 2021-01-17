import React from "react";
import "./App.css";
import Weather from "./Weather";
import City from "./City";
import SearchForm from "./SearchForm";
import DateNtime from "./DateNtime";
import HumNwind from "./HumNwind";
import Footer from "./Footer";


export default function App() {
  return (<div className="App-Footer">
    <div className="App">
        <SearchForm />
       <City />
      <DateNtime />
      <Weather />
      <HumNwind />
    </div>
    <div className="footer">
    <Footer />
    </div>
    </div>
    );
}