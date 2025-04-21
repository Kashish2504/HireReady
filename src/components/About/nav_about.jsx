import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

<img src={logo} alt="Logo" />;

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 shadow-md flex items-center justify-evenly w-screen">
        <h1 className="text-xl font-bold text-purple-600 flex">
          <img
            src={logo}
            alt="Logo"
            className="rounded-lg"
            width={60}
            height={50}
          />
          <Link to="../">
            HIRE <sup className="text-l font-bold text-purple-600">READY</sup>
          </Link>
        </h1>
        <div className="flex items-center mx-4 max-w-lg w-full gap-3">
          <button className="mx-1 text-black relative pb-2 border-b-4 border-transparent hover:border-purple-500 transition duration-200 hover:bg-purple-300/20 px-1">
            <Link to="/dashboard">Job&apos;s</Link>{" "}
          </button>
          <button className="mx-1 text-black relative pb-2 border-b-4 border-transparent hover:border-purple-500 transition duration-200 hover:bg-purple-300/20 px-1">
            <Link to="/dashboard/mcq">MCQ&apos;s</Link>{" "}
          </button>
          <button className="mx-1 text-black relative pb-2 border-b-4 border-transparent hover:border-purple-500 transition duration-200 hover:bg-purple-300/20 px-1">
            <Link to="/dashboard/coding">Coding Practice Problems</Link>
          </button>
          <button className="mx-1 text-black relative pb-2 border-b-4 border-transparent hover:border-purple-500 transition duration-200 hover:bg-purple-300/20 px-1">
            <Link to="/dashboard/chat">Expert Chat</Link>
          </button>
          <button className="mx-1 text-black relative pb-2 border-b-4 border-transparent hover:border-purple-500 transition duration-200 hover:bg-purple-300/20 px-1">
            <Link to="/dashboard/virtual_interview">Virtual Interview</Link>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-gray-800  text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-500 transition">
            <Link to="/dashboard/profile">
              <FaUserCircle size={28} />
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
