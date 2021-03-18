import React from 'react'
import '../styles/WeatherInfo.css'

const WeatherInfo = ({ geolocationError, fetchError, currentHour}) => {
  return (
    <div className="weather-container">
    {geolocationError 
      ?
      <div>{`Your browser doesn't support geolocation`}</div>
      : 
      <div>
        {fetchError
        ?
          <div>Could not fetch weather data</div>
        :
          <>
            <div className="weather">current weather: {currentHour?.[0].data.next_1_hours.summary.symbol_code.replace('_', ' ')}</div>
            <div className="temperature">current temperature: {currentHour?.[0].data.instant.details.air_temperature}°C</div>
          </>
        }
      </div>
    }
    </div>
  )
}

export default  WeatherInfo