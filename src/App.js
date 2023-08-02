/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempDetails from "./components/TempDetails";
import TimeAndLoacation from "./components/TimeAndLoacation";
import TopButtons from "./components/TopButtons";

import getFormattedWeatherData from "./services/weatherService";
function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      // const data = await getFormattedWeatherData({ q: "London" }); // use q as query string
      // console.log(data);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className=' rounded-md mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grade-400'>
      <TopButtons />
      <Inputs />
      {weather && (
        <div>
          <TimeAndLoacation />
          <TempDetails />
          <Forecast title={"Hourly forecast"} />
          <Forecast title={"Daily forecast"} />
        </div>
      )}
    </div>
  );
}

export default App;
