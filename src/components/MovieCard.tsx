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

type MovieCardProps = {
    movie: Movie
    onDetails: (movie: Movie) => void
}

function MovieCard({ movie, onDetails }: MovieCardProps) {
    return (
        <div  className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            {movie.image && (
            <img className="h-72 w-full object-cover"
            src={movie.image.medium} 
            alt={movie.name} />
            )}

            <div className="p-4">
                <h2 className="truncate text-xl font-bold">
                    {movie.name}
                </h2>

                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                    <span>⭐ {movie.rating.average ?? "N/A"}</span>

                    <span>
                    📅 {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}
                    </span>
                </div>

                <button 
                    className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                    onClick={() => onDetails(movie)}
                >
                    See Details
                </button>
            </div>
        </div>
    )
}

export default MovieCard