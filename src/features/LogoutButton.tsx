import { useNavigate } from "react-router"
import { logout } from "../api/auth";
import { useToken } from "../contexts/AuthProviderContext";

const LogoutButton = () => {
    const navigate = useNavigate();
    const {token, setToken} = useToken();

    const handleLogout = async () => {
        try {
            await logout(token?.token);
            console.log("Log out successful.")
        } catch (err : any) {
            console.error("Failed to log out: ", err.message);
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