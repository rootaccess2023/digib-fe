import { useNavigate } from "react-router";
import { useEffect } from "react";
import useAuth from "../contexts/useAuth";

export default function Dashboard() {
  // imported user and token just to test if login works
  const { user, token } = useAuth();
  const navigate = useNavigate();
  console.log("after login: ", user, token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to your dashboard!</h1>
      <p className="mt-4">You are now logged in.</p>
    </div>
  );
}
