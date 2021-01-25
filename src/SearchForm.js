import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <input type="search" placeholder="Enter city..." /> 
      <button className=" btn btn-secondary"> Submit </button>
    </form>
  );
}
