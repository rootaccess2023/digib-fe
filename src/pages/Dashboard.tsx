import { useNavigate } from "react-router";
import { useEffect } from "react";
import useAuth from "../contexts/useAuth";
import { FaArrowRight } from "react-icons/fa6";

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
    <div className="h-full ui-bg --primary mx-auto p-8 bg-white">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      <section className="space-y-6">
        <div className="bg-white p-4 rounded">
          <h2 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
            Overview
          </h2>
          <div className="text-lg text-gray-700 mb-2">
            Welcome to your Barangay's digital hub.
          </div>
          <div className="text-base text-gray-600">
            You are now logged in. Here you can request documents, track your
            requests, and manage your account—all online.
          </div>
        </div>

        <ul className="flex justify-between gap-8">
          <li className="w-full flex items-center h-18 bg-white rounded text-2xl font-bold shadow group cursor-pointer">
            <span className="flex flex-1 items-center px-6 h-full group-hover:bg-[var(--olive-color)] rounded-tl rounded-bl">
              Request Document
            </span>
            <span className="h-full flex items-center bg-white px-4 rounded-tr rounded-br">
              <FaArrowRight className="size-4" />
            </span>
          </li>
          <li className="w-full flex items-center h-18 bg-white rounded text-2xl font-bold shadow group cursor-pointer">
            <span className="flex flex-1 items-center px-6 h-full group-hover:bg-[var(--olive-color)] rounded-tl rounded-bl">
              Request Document
            </span>
            <span className="h-full flex items-center bg-white px-4 rounded-tr rounded-br">
              <FaArrowRight className="size-4" />
            </span>
          </li>
          <li className="w-full flex items-center h-18 bg-white rounded text-2xl font-bold shadow group cursor-pointer">
            <span className="flex flex-1 items-center px-6 h-full group-hover:bg-[var(--olive-color)] rounded-tl rounded-bl">
              Request Document
            </span>
            <span className="h-full flex items-center bg-white px-4 rounded-tr rounded-br">
              <FaArrowRight className="size-4" />
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
