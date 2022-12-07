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
    <div className="">
      <div className="">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={findLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            {data.sys ? <p>{data.sys.country}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            <img src={IMG_URL} alt=""></img> 
          </div>
        </div>

      {data.name !== undefined && 
        <div className="bottom1">
          <div className="tempReadings">
            <div className="tempMax"> 
              <FaTemperatureHigh/>
              <p>Max: </p>
              {data.main ? <p>{data.main.temp_max.toFixed()}°C</p> : null}
            </div>
            <div className="tempMin">
              <FaTemperatureLow/>
              <p>Min: </p>
              {data.main ? <p>{data.main.temp_min.toFixed()}°C</p> : null}
            </div>
          </div>
          <div className="sun">
            <div className="sunrise">
              <BsFillSunriseFill/>
              <p>Rise: </p>
              {data.sys ? <p>{new Date(data.sys.sunrise * 1000).toISOString().slice(-13,-8)}</p> : null}
            </div>
            <div className="sunset">
              <BsFillSunsetFill/>
              <p>Set: </p>
              {data.sys ? <p>{new Date(data.sys.sunset * 1000).toISOString().slice(-13,-8)}</p> : null}
            </div>
          </div>
          
        </div>
    }
      {data.name !== undefined &&
        <div className="bottom2">
          <div className="feels">
            <FaTemperatureHigh/>
            <p>Feels Like</p>
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
          </div>
          <div className="humidity">
            <WiHumidity/>
            <p>Humidity: </p>
            {data.main ? <p>{data.main.humidity}%</p> : null}
          </div>
          <div className="wind">
            <BsWind/>
            <p>Wind: </p>
            {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        </div>
    }
      </div>
    </div>
  );
}

export default App;
