import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png"

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px2">
        <div className="flex flex-col items-center py-5">
          <p className="text-5xl my-10 dark:text-white">OOPS, Halaman tidak ditemukan</p>
          <div className="max-w-lg">
            <img className="rounded-xl" src={PageNotFoundImage} alt="halo" />
          </div>
        </div>
        <div className="flex justify-center my-8">
          <Link to="/">
            <Button>Kembali ke Home</Button>      
          </Link>
        </div>
      </section>
    </main>
  )
}
