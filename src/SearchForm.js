import React  from "react";
import "./SearchForm.css";
export default function SearchForm() { 
  return (
    <form className="SearchForm">
      <div className="row">
      <div className="col-9">
      <input type="search" placeholder="Enter city..." className="form-control"  autoFocus="on" /> 
      </div>
      <div className="col-3">
      <button className=" btn btn-secondary w-100"> Search </button>
    </div>
    </div>
    </form>
  );
}
