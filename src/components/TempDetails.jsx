/** @format */

import React from "react";
import {
  UilArrowDown,
  UilArrowUp,
  UilTemperature,
  UilTear,
  UilSunset,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";
function TempDetails() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p className="text-white">Cloudy</p>
      </div>
      <div className='flex flex-row items-center justify-between py-3 text-white'>
        <img
          src='http://openweathermap.org/img/wn/01d@2x.png'
          alt=''
          className='w-20'
        />
        <p className='text-5xl'>34°</p>
        <div className='space-y-2 flex flex-col '>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1'/>
            Real fell
            <span className="font-medium ml-1">34°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1'/>
            Humidity
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1'/>
            Wind 
            <span className="font-medium ml-1">3 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempDetails;
