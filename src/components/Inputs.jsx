/** @format */

import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
function Inputs() {
  return (
    <div className='flex my-6 flex-row justify-center '>
      <div className='flex flex-row w-3/4 justify-center space-x-4'>
        <input
          type='text'
          placeholder='search for city'
          className='p-2 text-xl shadow-xl font-light focus:outline-none capitalize placeholder:lowercase'
        />
        <UilSearch
          size={25}
          className='text-white cursor-pointer transition ease-out mt-2 hover:scale-125'
        />
        <UilLocationPoint
          size={25}
          className='text-white cursor-pointer mt-2 transition ease-out hover:scale-125'
        />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-white'>
          ℃
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='imperial' className='text-white'>
          ℉
        </button>
      </div>
    </div>
  );
}

export default Inputs;
