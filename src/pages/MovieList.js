
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card"


export const MovieList = ({pathApi}) => {

  // const [movies, setMovies] = useState([]);
  const {data: movies} = useFetch(pathApi)

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other1:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
