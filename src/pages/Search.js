import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const Search = ({pathApi}) => {
  const [searchParams] = useSearchParams();
  const value = searchParams.get("q");
  console.log(value);
  const {data: movies} = useFetch(pathApi, value)

  return (
    <main>
      <section>
        <p className="m-4 text-3xl text-gray-900 dark:text-white">
          {movies.length === 0 ? `Pencarian untuk ${value} tidak ditemukan` : `Pencarian untuk ${value}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap other1:justify-evenly">       
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}