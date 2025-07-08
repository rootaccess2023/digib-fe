import { Link } from "react-router"
import LogoutButton from "../features/LogoutButton";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white-shadow">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <ul className="flex gap-2.5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <LogoutButton/>
            </div>
        </nav>
    )
}

export default Navbar;