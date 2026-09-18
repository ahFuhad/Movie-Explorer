import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-5">

                <Link
                to="/"
                className="text-2xl font-bold text-slate-900"
                >
                    MovieExplorer
                </Link>

                {/* In Desktop */}
                <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
                <li>
                    <Link to="/" className="hover:text-blue-600 transition">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/movies" className="hover:text-blue-600 transition">
                        Movies
                    </Link>
                </li>

                <li>
                    <Link to="/about" className="hover:text-blue-600 transition">
                        About
                    </Link>
                </li>
                </ul>

                {/* Desktop button */}
                <Link
                to="/movies"
                className="hidden md:block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 transition"
                >
                    Explore Movies
                </Link>

                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* In Mobile */}
            {menuOpen && (
                <div className="md:hidden border-t px-6 py-4">
                    <ul className="flex flex-col gap-4 text-lg font-semibold">

                        <li>
                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-blue-600"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/movies"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-blue-600"
                            >
                                Movies
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-blue-600"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/movies"
                                onClick={() => setMenuOpen(false)}
                                className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
                            >
                                Explore Movies
                            </Link>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar