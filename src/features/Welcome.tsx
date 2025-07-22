import { Link } from "react-router-dom";

function Welcome() {
    return (
        <section className="container mx-auto text-center flex flex-col items-center justify-center min-h-screen gap-8">
            <h1 className="text-4xl text-black-400 mb-8">Welcome. Please log in to access the dashboard.</h1>
            <div className="flex gap-4 justify-center">
                <Link
                    to="/login"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-lg px-8 py-3 transition-colors duration-200 focus:outline-none"
                >
                    Login
                </Link>
                <Link
                    to="/signup"
                    className="bg-gray-200 hover:bg-green-100 text-green-900 font-semibold rounded-lg text-lg px-8 py-3 transition-colors duration-200 focus:outline-none"
                >
                    Register
                </Link>
            </div>
        </section>
    );
}

export default Welcome;