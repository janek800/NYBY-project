import React from 'react'
import WeatherInfo from './components/WeatherInfo'
import useGetGeolocation from "./hooks/useGetGeolocation";
import './App.css';

function App() {

  const [ latitude, longitude, geolocationError ] = useGetGeolocation();

  return (
    <div className="App">
      {console.log('latitude is: ', latitude)}
      {console.log('longitude is: ', longitude)}
      {console.log('geolocationError is: ', geolocationError)}
      <WeatherInfo />
    </div>
  );
}

export default App;
