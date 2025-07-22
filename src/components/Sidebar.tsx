import { NavLink } from "react-router-dom";
import useAuth from "../contexts/useAuth";
import LogoutButton from "../features/LogoutButton";

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <aside className="w-64 h-screen shadow-md flex flex-col p-6 justify-between">
      <nav className="flex flex-col gap-4">
        {user && (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive ? "ui-bg --green" : "hover:ui-bg --green"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/request"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive ? "ui-bg --green" : "hover:ui-bg --green"
                }`
              }
            >
              Request Document
            </NavLink>
            <NavLink
              to="/requests"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive ? "ui-bg --green" : "hover:ui-bg --green"
                }`
              }
            >
              My Requests
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive ? "ui-bg --green" : "hover:ui-bg --green"
                }`
              }
            >
              Profile
            </NavLink>
          </>
        )}
      </nav>
      {user && (
        <div className="mt-8">
          <LogoutButton />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
