import { Link } from "react-router-dom"
import backUp from "../assets/images/backup.png"

export const Card = ({movie}) => {

  const {id, original_title, overview, poster_path} = movie;
  const images = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backUp;
  return (
    
  <div className="max-w-sm m-4 max-h-128 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`movie/${id}`}>
          <img className="rounded-t-lg h-2/4 w-full" src={images} alt="" />
      </Link>
      <div className="p-5">
          <Link to={`movie/${id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
          
      </div>
  </div>

  )
}
