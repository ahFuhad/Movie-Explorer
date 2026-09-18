import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"
import MovieModal from "../components/MovieModal"

type Movie = {
    id: number
    name: string
    image: {
        medium: string
        original: string
    } | null
    rating: {
        average: number | null
    }
    genres: string[]
    type: string
    language: string
    runtime: number | null
    status: string
    premiered: string | null
    ended: string | null
    summary: string | null
}


type SearchResult = {
    score: number
    show: Movie
}

function Movies() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        .then(data => {
            setMovies(data)
        })
    }, [])

    useEffect(() => {
        if (!search) {
        return
        }

        fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then(response => response.json())
        .then(data => {
            const results = data.map(
            (item: SearchResult) => item.show
            )

            setMovies(results)
        })
    }, [search])
    return (
        <>
            <Navbar />
            
            <main  className="min-h-screen bg-gray-100 px-6 py-10">
            
                <h1 className="mb-8 text-center text-4xl font-bold">
                    Explore Movies
                </h1>

                <div className="mx-auto mb-10 max-w-2xl">
                    <input className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                        type="text"
                        placeholder="Search for a movie..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onDetails={setSelectedMovie}
                    />
                    ))}
                </div>
                
                {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
                )}
            </main>

            <Footer />
        </>
    )
}

export default Movies