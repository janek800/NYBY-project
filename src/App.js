import React from 'react'
import moment from 'moment';
import WeatherInfo from './components/WeatherInfo'
import useGetGeolocation from "./hooks/useGetGeolocation";
import useFetch from "./hooks/useFetch";
import './styles/App.css';

function App() {

  const [ latitude, longitude, geolocationError ] = useGetGeolocation();

  const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${latitude}&lon=${longitude}`
  const [response, fetchError ] = useFetch(url)

  const date = moment().format('YYYY-MM-DDTHH');
  const currentHour = response?.timeseries.filter((item) => item.time.includes(date))

  return (
    <div className="App">
      <WeatherInfo currentHour={currentHour} geolocationError={geolocationError} fetchError={fetchError}/>
    </div>
  );
}

export default App;
