import { Link } from "react-router-dom"

function Navbar () {
    return (
        <nav  className="flex items-center justify-between px-6 py-4">
            
            <h1 className="text-2xl font-bold">
                MovieExplorer
            </h1>

            <ul className=" flex gap-6 text-2xl font-bold">
                <li className="cursor-pointer hover:text-blue-600">
                    Home
                </li>
                <li className="cursor-pointer hover:text-blue-600">
                    Movies
                </li>
                <li className="cursor-pointer hover:text-blue-600">
                    About
                </li>
            </ul>

            <Link
                to="/movies"
                className="shrink-0 whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-white  hover:bg-blue-700"
                >
                Explore Movies
            </Link>
        </nav>
    )
}

export default Navbar