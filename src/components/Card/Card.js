import React from "react";
import "./Card.css";

export default function Card(props) {
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const monthNames = [
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
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const icon = props.main[0].icon;
  const main = props.main[0].main;

  let date = addDays(Date.now(), props.index);
  console.log(date);

  let day = days[date.getDay()];
  let month = monthNames[date.getMonth()];
  let dateno = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  const temp = parseInt(props.temp) - 273;

  return (
    <>
      <div className="card-con">
        <h3>{day}</h3>
        <p>
          {month} {dateno}, {hour}:{minute}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
        ></img>
        <h2>
          {temp} <span>&#176;</span>C
        </h2>
        <p className="cond">{main}</p>
      </div>
    </>
  );
}
