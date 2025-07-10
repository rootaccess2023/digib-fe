import { useNavigate } from "react-router"
import { logout } from "../api/auth";
import { useToken } from "../contexts/AuthProviderContext";
import toast from "react-hot-toast";

const LogoutButton = () => {
    const navigate = useNavigate();
    const {token, setToken} = useToken();
    const successMessage = "Logged out successfully.";
    const errorMessage = "Failed to log out.";

    const handleLogout = async () => {
        try {
            await logout(token?.token);
        } catch (err : any) {
            toast.error(errorMessage);
            console.error("Failed to log out: ", err.message);
        }
        toast.success(successMessage);
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