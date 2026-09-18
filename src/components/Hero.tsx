function Hero() {
    return (
        <section className="flex min-h-125 items-center justify-center bg-linear-to-r from-slate-950 via-slate-800 to-slate-950 px-6 text-center text-white">
            <div>
                <h1 className="text-4xl font-bold md:text-6xl">
                    Discover Your Next Favorite Movie
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                    Explore amazing movies and discover something new to watch.
                </p>

                <button  className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                    Explore Movies
                </button>
            </div>
        </section>
    )
}

export default Hero