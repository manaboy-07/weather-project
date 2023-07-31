/** @format */

import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempDetails from "./components/TempDetails";
import TimeAndLoacation from "./components/TimeAndLoacation";
import TopButtons from "./components/TopButtons";

import getFormattedWeatherData from "./services/weatherService";
function App() {
  const fetchWeather = async () => {
  const data = await getFormattedWeatherData({q:"London"}) // use q as query string
  console.log(data)
  }
  fetchWeather();
  return (
    <div className=' rounded-md mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grade-400'>
      <TopButtons />
      <Inputs />
      <TimeAndLoacation />
      <TempDetails/>
      <Forecast title={'Hourly forecast'}/>
      <Forecast title={'Daily forecast'}/>
    </div>
  );
}

export default App;
