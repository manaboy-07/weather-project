import React from 'react'

function TopButtons() {
    const cities = [
        {
            id:1,
            title: 'London'
        },
        {
            id:2,
            title: 'Nigeria'
        },
        {
            id:3,
            title: 'China'
        },
        {
            id:4,
            title: 'Germany'
        },
        {
            id:5,
            title: 'Netherlands'
        },
    ]
  return (
    <div className='my-6 flex items-center justify-around'>
        {cities.map((city) => (
            <button key={city.id} className='text-white m-2 text-lg font-medium'>{city.title} </button>
        ))}
    </div>
  )
}

export default TopButtons