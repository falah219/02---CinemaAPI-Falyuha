import { useState, useEffect } from "react"

export const useFetch = (pathApi, value) => {

    const [data, setData] = useState([])
    const url = `https://api.themoviedb.org/3/${pathApi}?api_key=$519aa0d5114932b9a5abc57402be57dc&query=${value}`

    useEffect(() => {
      async function fetchMovies() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.results);
    }
    fetchMovies();
  }, [url])

  return {data}
}
