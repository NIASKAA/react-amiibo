import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
    const url = "https://www.amiiboapi.com/api/amiibo/?name=mario";
    const [result, setResult] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setResult(response.data.amiibo)
        }, [url])
        
    })
    return (
        <>
          <h1>{result[0].name}</h1>
        </>
    )
}

export default Home
