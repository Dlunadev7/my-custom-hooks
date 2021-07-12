import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({data : null, loading: true, error : null})
  const isMount = useRef(true);
  
  useEffect(() => {
    
    return () => {
      isMount.current = false;
    }
  }, [])

  useEffect(() => {
    

    setState({data : null, loading: true, error : null})

    if( isMount.current ){
      
      fetch(url)
      .then( resp => resp.json())
      .then( data => {
        setState({
          loading: false,
          error: null,
          data
        })
      })
      .catch(() => {
        setState({
          data : null,
          loading : false,
          error : 'No se encontro el elemento'
        })
      })

    } else{
      console.log("se desmonto")
    }

  }, [url])

  return state;
}
