import React from 'react'

const WeatherInfo = ({ geolocationError, fetchError, currentHour}) => {
  return (
    <>
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
            <div>current weather: {currentHour?.[0].data.next_1_hours.summary.symbol_code.replace('_', ' ')}</div>
            <div>current temperature: {currentHour?.[0].data.instant.details.air_temperature} °C</div>
          </>
        }
      </div>
    }
    </>
  )
}

export default  WeatherInfo