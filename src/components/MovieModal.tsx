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

type MovieModalProps = {
    movie: Movie
    onClose: () => void
}

function MovieModal({ movie, onClose }: MovieModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-2xl">
                <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80">
                    X
                </button>

                {movie.image && (
                <img
                    className="h-72 w-full object-cover"
                    src={movie.image.original}
                    alt={movie.name}
                />
                )}

                <div className="p-6">
                    <h2 className="text-3xl font-bold">
                        {movie.name}
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
                        <span>⭐ {movie.rating.average ?? "N/A"}</span>

                        <span>
                            📅{" "}
                            {movie.premiered
                            ? movie.premiered.slice(0, 4)
                            : "N/A"}
                        </span>

                        <span>
                        🎭 {movie.genres.join(", ") || "N/A"}
                        </span>
                    </div>
                    <div className="mt-4 space-y-2 text-gray-600">
                        <p>🌐 Language: {movie.language || "N/A"}</p>

                        <p>
                        ⏱️ Runtime:{" "}
                        {movie.runtime ? `${movie.runtime} min` : "N/A"}
                        </p>

                        <p>📺 Status: {movie.status}</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-bold">
                            Overview
                        </h3>

                        <div
                            className="mt-2 text-gray-600"
                            dangerouslySetInnerHTML={{
                                __html:
                                movie.summary ||
                                "No summary available.",
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default MovieModal