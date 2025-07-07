import { useNavigate } from "react-router"
import { logout } from "../api/auth";
// import { useUser } from "../contexts/AuthProviderContext";
import { useToken } from "../contexts/AuthProviderContext";


const LogoutButton = () => {
    const navigate = useNavigate();
    // const {user} = useUser();
    const {token, setToken} = useToken();

    const handleLogout = async () => {
        try {
            await logout(token?.token);
            console.log("Log out successful.")
        } catch (error) {
            console.error("Failed to log out: ", error)
        }
        setToken(null);
        navigate("/");
    }

    return (
        token ? (<div>
            <button onClick={handleLogout}>
                Log out
            </button>
        </div>) : null
        
    )
}

export default LogoutButton;