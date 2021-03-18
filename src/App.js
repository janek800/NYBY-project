import React from 'react'
import moment from 'moment';
import WeatherInfo from './components/WeatherInfo'
import useGetGeolocation from "./hooks/useGetGeolocation";
import useFetch from "./hooks/useFetch";
import './App.css';

function App() {

  const [ latitude, longitude, geolocationError ] = useGetGeolocation();

  const url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=54.381674399999994&lon=18.6111'
  const [response, fetchError ] = useFetch(url)

  const date = moment().format('YYYY-MM-DDTHH');
  const currentHour = response?.timeseries.filter((item) => item.time.includes(date))

  return (
    <div className="App">
      {console.log('latitude is: ', latitude)}
      {console.log('longitude is: ', longitude)}
      {console.log('geolocationError is: ', geolocationError)}
      {console.log('response:', currentHour)}
      {console.log('fetch error:', fetchError)}
      <WeatherInfo />
    </div>
  );
}

export default App;
