import { useNavigate } from "react-router"
import { logout } from "../api/auth";
// import { useUser } from "../contexts/AuthProviderContext";
import { useToken } from "../contexts/AuthProviderContext";


const LogoutButton = () => {
    const navigate = useNavigate();
    // const {user} = useUser();
    const {token} = useToken();

    const handleLogout = async () => {
        try {
            await logout(token?.token);
            console.log("Log out successful.")
        } catch (error) {
            console.error("Failed to log out: ", error)
        }
        navigate("/");
    }

    return (
        <div>
            <button onClick={handleLogout}>
                Log out
            </button>
        </div>
    )
}

export default LogoutButton;