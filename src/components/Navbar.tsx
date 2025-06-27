import { Link } from "react-router"

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Navbar;