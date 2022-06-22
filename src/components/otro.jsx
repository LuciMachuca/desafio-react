import { useEffect, useState } from "react"
import './App.css'
import axios from 'axios'
import Movie from "./components/Movie.jsx"
/* const { BASE_API,
  SEARCH_API,
  DISCOVER_API,
  API_KEY,
  IMG_PATH } = process.env; */



function App() {

  const API_KEY = "1e40352e4ee54a4b38c2efc103a08b2b"
  const BASE_API = "https://api.themoviedb.org/3/"
  const SEARCH_API = BASE_API + "search/movie"
  const DISCOVER_API = BASE_API + "discover/movie"
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

  const [movies, setMovies] = useState([]) // Populares
  const [query, setQuery] = useState("") // SearchBar - cambia el query, el filtro
  const [movie, setMovie] = useState({ title: "Loading Movies" }) // Query - Barra de búsqueda
  
  const [filter, setFilter] = useState(0) // Filtro de Clasificación -> "vote_average"

  useEffect(() => {
    listMovies()
  }, [])

  const listMovies = async (event) => {
    if (event) {
      event.preventDefault()
    }

    // si buscan una peli la muestro, sino voy al Home Discovery
    const { data } = await axios.get(`${query ? SEARCH_API : DISCOVER_API}`, {
      params: {
        api_key: API_KEY,
        query: query
      }
    })

    console.log(data.results[0])
    setMovies(data.results)
    setMovie(data.results[0])
   

    if (data.results.length) {
      await searchMovie(data.results[0].id)
    }
  }

  const searchMovie = async (id) => {
    const { data } = await axios.get(`${BASE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
      }
    })

    setMovie(data)
  }

  const selectMovie = (movie) => {
    searchMovie(movie.id)
    setMovie(movie)
    /* window.scrollTo(0, 0) */
  }

  const renderMovies = () => (
    movies.map(movie => (

      <Movie
        selectMovie={selectMovie}
        key={movie.id}
        movie={movie}
      />
    ))
  )


  return (
    <div className="container m-5">

      <div>
        <h1>Movies App</h1>
        <h4>By Luci Machuca</h4>

        <form className="d-flex" onSubmit={listMovies}>
          <input className="form-control my-3" type="text" id="search" placeholder="Search your Movie" 
            onInput={(event) => setQuery(event.target.value)} />
          <button className="btn btn-outline-succes" type="submit">Go!</button>
        </form>

      </div>

      {movies.length ?
        <main>
          {movie ?
            <div className="movie"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${IMG_PATH}${movie.backdrop_path})` }}>

            </div>
            : null}

          <div>
            {renderMovies()}
          </div>
        </main>

        : 'Sorry, no movies found'}
    </div>

  )
}

export default App;