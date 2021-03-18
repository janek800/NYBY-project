import { useState, useEffect} from 'react'

export default function useGetGeolocation() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [geolocationError, setGeolocationError] = useState(false)  

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      });
    } else {
      setGeolocationError(true);
    }
  }, [])    
  
  return [ latitude, longitude, geolocationError ]
}