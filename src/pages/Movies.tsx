import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

type Movie = {
    id: number
    name: string
    image: {
        medium: string
        original: string
    }
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

function Movies() {
    <Navbar />
    const [movies, setMovies] = useState<Movie[]>([])
    
    useEffect (() => {
        fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        .then(data => {
            setMovies(data);
        })
    }, [])
    
    return (
        <>
            <Navbar />
            
            <main>
            <h1>Explore Movies</h1>

            {movies.map(movie => (
            <p key={movie.id}>{movie.name}</p>
            ))}
            </main>

            <Footer />
        </>
    )
}

export default Movies