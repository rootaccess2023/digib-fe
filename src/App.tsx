import "./App.css";
import { BrowserRouter as Router } from "react-router";
import Sidebar from "./components/Sidebar";
import useAuth from "./contexts/useAuth";
import AppRoutes from "./components/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  const { user } = useAuth();
  return (
    <>
      <Router>
        <div className="flex min-h-screen">
          {user && <Sidebar />}
          <main className="flex-1">
            <AppRoutes />
          </main>
        </div>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
