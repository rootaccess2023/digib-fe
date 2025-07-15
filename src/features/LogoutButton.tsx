import { useNavigate } from "react-router";
import { logout as apiLogout } from "../api/auth";
import useAuth from "../contexts/useAuth";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const successMessage = "Logged out successfully.";
  const errorMessage = "Failed to log out.";

  const handleLogout = async () => {
    try {
      await apiLogout(token?.token);
    } catch (err: unknown) {
      toast.error(errorMessage);
      if (err instanceof Error) {
        console.error("Failed to log out: ", err.message);
      } else {
        console.error("Failed to log out: ", err);
      }
    }
    toast.success(successMessage);
    logout();
    navigate("/");
  };

  return token ? (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  ) : null;
};

export default LogoutButton;
