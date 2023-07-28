/** @format */

import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempDetails from "./components/TempDetails";
import TimeAndLoacation from "./components/TimeAndLoacation";
import TopButtons from "./components/TopButtons";

function App() {
  return (
    <div className=' rounded-md mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grade-400'>
      <TopButtons />
      <Inputs />
      <TimeAndLoacation />
      <TempDetails/>
      <Forecast />
    </div>
  );
}

export default App;
