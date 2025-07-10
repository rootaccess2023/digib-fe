import "./App.css";
import { BrowserRouter as Router } from "react-router";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
