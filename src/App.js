import React, {useState} from 'React';
import './App.css';

const url = url();

function App() {
  
  const [locationInput, Location] = useState({});
  const [data, setLocation] = useState("");
  
  return (
    <div className="App">
      <div className="top">
        <div className="title">London</div>
        <div className="temp"></div>
        <div className="weatherFeeling">Cloudy</div>
        
        <div className="bottom">
          <div className="feels"></div>
           <div className="wind"></div>
           <div className="humidity"></div>
           <div className="sunSetting">
             <div className="sunrise"></div>
             <div className="sunset"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
