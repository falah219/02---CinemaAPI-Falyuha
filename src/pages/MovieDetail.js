import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backUp from "../assets/images/backup.png";

export const MovieDetail = () => {

  const params = useParams();
  //console.log(params);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
      const json = await response.json();
      console.log(json);
      setMovie(json);
    }
    fetchMovies();
  }, []);
  const images = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backUp;

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={images} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white text-center lg:text-left">
          <h1 className="text-4xl font-bold my-3">{movie.title}</h1>
          <p className="text-justify text-base mt-3 mb-6">{movie.overview}</p>
          {movie.genres ? (
            <div className="text-left">
              {movie.genres.map((genre)=> (
                <span className="text-sm border border-gray-700 dark:border-white p-1.5 mt-10 mr-4 " key={genre.id}>{genre.name}</span>
              ))}
            </div>
          ):""}
          
          <div className="flex items-center mt-6">
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{movie.vote_count} Review</span>
          </div>
          <p className="my-4">
            <span className="text-base font-bold">Runtime: </span>
            <span className="text-base"> {movie.runtime} min</span>
          </p>
          <p className="my-4">
            <span className="text-base font-bold">Budget: </span>
            <span className="text-base"> {movie.budget}</span>
          </p>
          <p className="my-4">
            <span className="text-base font-bold">Revenue: </span>
            <span className="text-base"> {movie.revenue}</span>
          </p>
          <p className="my-4">
            <span className="text-base font-bold">Release date: </span>
            <span className="text-base"> {movie.release_date}</span>
          </p>
          <p className="my-4">
            <span className="text-base font-bold">IMBD Code: </span>
            <span className="text-base"> {movie.imdb_id}</span>
          </p>

        <div>
            

          </div>
          

        </div>
      </section>
    </main>
  )
}
