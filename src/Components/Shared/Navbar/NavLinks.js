import { Link } from "react-router-dom";


export const NavLinks =
    <>
        <li>
            <Link
                to="/"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                to="/AllProducts"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Shop
            </Link>
        </li>
        <li>
            <Link
                to="/dashboard"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Dashboard
            </Link>
        </li>
        <li>
            <Link
                to="/MyCart"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                My Cart
            </Link>
        </li>
    </>
