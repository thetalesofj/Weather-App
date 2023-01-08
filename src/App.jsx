import React, {useState} from 'react';
import axios from 'axios';
import {BsFillSunriseFill, BsFillSunsetFill, BsWind} from 'react-icons/bs';
import {WiHumidity} from 'react-icons/wi';
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa';
import {WEATHER_API} from './api.js';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const IMG_URL = `http://openweathermap.org/img/w/${data.weather?data.weather[0].icon:null}.png`;
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${WEATHER_API}`;
  
  const findLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(WEATHER_URL).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
   }
  }


  return (
    <div className={(data.main !== undefined) ? ((data.main.temp > 16) ? 'bg-app_warm bg-center bg-cover h-screen' 
    : 'bg-app_cold bg-center bg-cover h-screen') 
    : 'bg-app_cold bg-center bg-cover h-screen'}>
      <div className="flex justify-center">
        <input 
        className='border-4 border-black rounded-md mt-4'
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={findLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
      
      <div className="mt-20 sm:mt-5 lg:mt-10 xl:mt-20">
        {data.name !== undefined &&
          <div className="grid place-items-center gap-2 p-3 m-4 border-black border-4 rounded-lg backdrop-blur-xl">
           <div className="location">
             <p className='sm:text-xl text-6xl font-bold text-center'>{data.name}</p>
           </div>
           <div>
            {data.sys ? <p className='text-3xl font-bold flex justify-center'>{data.sys.country}</p> : null}
           </div> 
           <div className='text-xl font-bold'>
              <p className='flex justify-center'>{new Date().toLocaleString().slice(-20,-10)}</p>
           </div>
           <div className='text-6xl font-black'>
             {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
           </div>
           <div className="scale-150">
             <img src={IMG_URL} alt=""></img> 
           </div>
        </div>
}
      {data.name !== undefined && 
        <div className="grid place-items-center grid-cols-4 gap-2 p-3 m-4 border-black border-4 rounded-lg backdrop-blur-xl text-xl font-bold sm:grid-cols-2">
            <div className="flex place-items-center space-x-1"> 
              <FaTemperatureHigh/>
              {data.main ? <p>{data.main.temp_max.toFixed()}°C</p> : null}
            </div>
            <div className="flex place-items-center space-x-1">
              <FaTemperatureLow/>
              {data.main ? <p>{data.main.temp_min.toFixed()}°C</p> : null}
            </div>
            <div className="flex place-items-center space-x-1">
              <BsFillSunriseFill/>
              {data.sys ? <p>{new Date(data.sys.sunrise * 1000).toISOString().slice(-13,-8)}</p> : null}
            </div>
            <div className="flex place-items-center space-x-1">
              <BsFillSunsetFill/>
              {data.sys ? <p>{new Date(data.sys.sunset * 1000).toISOString().slice(-13,-8)}</p> : null}
            </div>
        </div>
    }
      {data.name !== undefined &&
        <div className="grid place-items-center grid-cols-3 gap-2 p-3 m-4 border-black border-4 rounded-lg backdrop-blur-xl text-xl font-bold sm:space-x-5">
          <div className="grid place-items-center">
            <FaTemperatureHigh/>
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
          <p className='sm:text-center'>Feels Like</p>
          </div>
          <div className="grid place-items-center">
            <WiHumidity/>
            {data.main ? <p>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
          </div>
          <div className="grid place-items-center sm:text-center">
            <BsWind/>
            {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        </div>
    }
      </div>
    </div>
  );
}

export default App;
