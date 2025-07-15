import { useContext } from "react";
import AuthContext from "./AuthProviderContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProviderContext");
  }
  return context;
};

export default useAuth;
