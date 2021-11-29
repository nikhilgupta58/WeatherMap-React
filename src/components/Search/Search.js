import React, { useContext } from "react";
import "./Search.css";
import CityContext from "../../Context/CityContext";

export default function Search(props) {
  const city = useContext(CityContext);
  console.log(city)
  const inputKeyUpHandler = (event) => {
    if (event.key === "Enter") {
      city.configCity(event.target.value);
    }
  };

  return (
    <>
      <div className="search-box">
        <input
          spellCheck="false"
          id="search"
          onKeyUp={inputKeyUpHandler}
          type="text"
          placeholder="Enter City Name..."
        />{" "}
      </div>
    </>
  );
}
