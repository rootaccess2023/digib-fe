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
        <ul className="flex justify-between gap-8">
          <li className="w-full flex items-center h-18 bg-white rounded text-2xl font-bold shadow group cursor-pointer">
            <span className="flex flex-1 items-center px-6 h-full group-hover:bg-[var(--olive-color)] rounded-tl rounded-bl">
              Request Document
            </span>
            <span className="h-full w-18 flex items-center justify-center bg-white rounded-tr rounded-br">
              <FaArrowRight className="size-4 text-[var(--olive-color)]" />
            </span>
          </li>
          <li className="w-full flex items-center h-18 bg-white rounded text-2xl font-bold shadow group cursor-pointer">
            <span className="flex flex-1 items-center px-6 h-full group-hover:bg-[var(--olive-color)] rounded-tl rounded-bl">
              Request Document
            </span>
            <span className="h-full w-18 flex items-center justify-center bg-white rounded-tr rounded-br">
              <FaArrowRight className="size-4 text-[var(--olive-color)]" />
            </span>
          </li>
          <li className="w-full flex items-center h-18 bg-white rounded text-2xl font-bold shadow group cursor-pointer">
            <span className="flex flex-1 items-center px-6 h-full group-hover:bg-[var(--olive-color)] rounded-tl rounded-bl">
              Request Document
            </span>
            <span className="h-full w-18 flex items-center justify-center bg-white rounded-tr rounded-br">
              <FaArrowRight className="size-4 text-[var(--olive-color)]" />
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
