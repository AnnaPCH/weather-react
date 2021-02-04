import React from "react";

export default function FormatedDate(props) {

let now = new Date(props.date);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let year = now.getFullYear();
let hour =now.getHours();
let minutes = now.getMinutes();
if (minutes <= 9) {
  minutes = `0${minutes}`;
}
if (hour<= 9) {
  hour = `0${hour}`;
}
let date = now.getDate();
let month = months[now.getMonth()];
let day = days[now.getDay()];
return(
 <div> {day}, {month} {date} {year} {hour}:{minutes} </div>
 ); 
}
