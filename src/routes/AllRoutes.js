import { Routes, Route } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-700">
        <Routes>
            <Route path="/" element={<MovieList pathApi="movie/now_playing"/>} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/movie/popular" element={<MovieList pathApi="movie/popular"/>} />
            <Route path="/movie/top" element={<MovieList pathApi="movie/top_rated"/>} />
            <Route path="/movie/upcoming" element={<MovieList pathApi="movie/upcoming"/>} />    
            <Route path="/search" element={<Search/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}
