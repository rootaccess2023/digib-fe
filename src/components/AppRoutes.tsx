import { Route, Routes } from "react-router";
import SignupForm from "../features/SignupForm";
import Welcome from "../features/Welcome";
import LoginForm from "../features/LoginForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default AppRoutes;
