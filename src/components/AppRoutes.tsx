import { Route, Routes } from "react-router";
import SignupForm from "../features/SignupForm";
import Welcome from "../features/Welcome";
import LoginForm from "../features/LoginForm";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
