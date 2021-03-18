import { useState, useEffect} from 'react'

export default function useFetch( url ) {
  const [response, setResponse] = useState(null)  
  const [fetchError, setFetchError] = useState(false) 

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>  setResponse(data.properties))
      .catch(() => setFetchError(true));
  }, [url])    
  
  return [ response, fetchError ]
}