import React from 'react'
import WeatherInfo from './components/WeatherInfo'
import useGetGeolocation from "./hooks/useGetGeolocation";
import useFetch from "./hooks/useFetch";
import './App.css';

function App() {

  const [ latitude, longitude, geolocationError ] = useGetGeolocation();

  const url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=54.381674399999994&lon=18.6111'
  const [response, fetchError ] = useFetch(url)

  return (
    <div className="App">
      {console.log('latitude is: ', latitude)}
      {console.log('longitude is: ', longitude)}
      {console.log('geolocationError is: ', geolocationError)}
      {console.log('response:', response)}
      {console.log('fetch error:', fetchError)}
      <WeatherInfo />
    </div>
  );
}

export default App;
