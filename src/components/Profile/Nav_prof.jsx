import { FaUserCircle} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className=" shadow-md p-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-emerald-600 dark:text-blue-400">
          <Link to="../">Hire Ready</Link>
        </h1>
        <div className="flex items-center mx-4 max-w-lg w-full">
        <button className="m-1 bg-gray-900"><Link to="/dashboard">Job&apos;s</Link> </button>
          <button className="m-1 bg-gray-900"><Link to="/dashboard/mcq">MCQ&apos;s</Link> </button>
          <button className="m-1 bg-gray-900"><Link to="/dashboard/coding">Coding Practice Problems</Link></button>
          <button className="m-1 bg-gray-900"><Link to="/dashboard/chat">Expert Chat</Link></button>
          <button className="m-1 bg-gray-900"><Link to="/dashboard/virtual_interview">Virtual Interview</Link></button>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-gray-800 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 transition">
          <Link to="/dashboard/profile"><FaUserCircle size={28} /></Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
