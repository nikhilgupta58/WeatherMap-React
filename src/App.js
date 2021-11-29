import "./App.css";
import Search from "./components/Search/Search";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import CityContext from "./Context/CityContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [city, setCity] = useState("London");
  let configCity = (x) => {
    setCity(x);
  };
  const [country, setCountry] = useState("UK");
  const [state, setState] = useState({});
  const [lat, setLat] = useState(51.5085);
  const [lon, setLon] = useState(-0.1257);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8df2cbc6bd3eeb32371085e31bdb213e`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setState(res));
    // eslint-disable-next-line
  }, [city]);

  useEffect(() => {
    if (state.message) {
      console.log(state.message);
      setCity("London");
    } else if (state.sys && state.coord) {
      setCountry(state.sys.country);
      setLat(state.coord.lat);
      setLon(state.coord.lon);
    }
  }, [state]);

  useEffect(() => {
    if (lat && lon) {
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=8df2cbc6bd3eeb32371085e31bdb213e`;
      fetch(url)
        .then((res) => res.json())
        .then((res) => setWeather(res.daily));
    }
    // eslint-disable-next-line
  }, [lat]);

  useEffect(() => {
    if (weather) console.log(weather);
  }, [weather]);

  return (
    <Router>
      <CityContext.Provider value={{ city, configCity }}>
        <div className="container">
          <Search city={configCity} />
          <h1>5-Day Forecast.</h1>
          <p>
            {city}, {country}
          </p>
          <Routes>
            <Route
              path="/WeatherMap-React"
              element={
                <div className="card-container">
                  {weather.slice(0, 5).map((e, i) => (
                    <Card
                      key={i}
                      temp={e.temp.day}
                      main={e.weather}
                      index={i}
                    />
                  ))}
                </div>
              }
            />
          </Routes>
        </div>
      </CityContext.Provider>
    </Router>
  );
}

export default App;
