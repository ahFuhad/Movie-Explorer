import { Link } from "react-router-dom"

function Hero() {
    return (
        <section className="min-h-[80vh] bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-6 text-center">
            
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Discover Your Next Favorite Movie
                </h1>

                <p className="mt-6 text-lg text-slate-300">
                Explore amazing movies and discover something new to watch.
                </p>

                <Link
                to="/movies"
                className="inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
                >
                Explore Movies
                </Link>
            </div>

        </section>
    )
}

export default Hero