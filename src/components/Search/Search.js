import React from "react";
import "./Search.css";

export default function Search(props) {

    const inputKeyUpHandler = (event)=>{
        if(event.key === "Enter"){
            props.city(event.target.value);
        }
    }

  return (
    <>
      <div className="search-box">
        <input spellCheck="false" id="search" onKeyUp={inputKeyUpHandler} type="text" placeholder="Enter City Name..." />{" "}
      </div>
    </>
  );
}
