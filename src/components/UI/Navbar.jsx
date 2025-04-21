import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <div className="nav text-white">
        <nav className="flex items-center justify-between px-4 shadow-md">
          <div className="flex n-left">
            <img src={logo} alt="" className="w-10 " />
            <h1 className=" text-2xl font-bold drop-shadow-lg">
              <Link to="../">
                HIRE
                <sup className="text-l font-bold drop-shadow-xl shadow-zinc-700/80">READY</sup>
              </Link>
            </h1>
          </div>
          
          <div className=" flex justify-around mx-2 px-2">
            <button className=" my-1 mx-0 py-1 px-0 font-bold   border-b-4 border-transparent hover:border-white transition ease-in duration-200 hover:bg-purple-300/20">
              <Link to="/dashboard">Job&apos;s</Link>{" "}
            </button>
            <button className=" my-1 mx-0 py-1 px-0 font-bold  border-b-4 border-transparent hover:border-white transition ease-in duration-200 hover:bg-purple-300/20">
              <Link to="/dashboard/mcq">MCQ&apos;s</Link>{" "}
            </button>
            <button className=" my-1 mx-0 py-1 px-0 font-bold border-b-4 border-transparent hover:border-white transition ease-in duration-200 hover:bg-purple-300/20">
              <Link to="/dashboard/coding">Coding Problems</Link>
            </button>
            {/* <button className=" my-1 mx-0 py-1 px-0 text-purple-50 font-bold   pb-2 border-b-4 border-transparent hover:border-purple-50 transition ease-in duration-200 hover:bg-purple-300/20">
              <Link to="/dashboard/chat">Expert Chat</Link>
            </button> */}
            <button className=" my-1 mx-0 py-1 px-0 font-bold border-b-4 border-transparent hover:border-white transition ease-in duration-200 hover:bg-purple-300/20">
              <Link to="/dashboard/virtual_interview">Virtual Interview</Link>
            </button>
            <button className=" my-1 mx-0 py-1 px-0 font-bold border-b-4 border-transparent hover:border-white transition ease-in duration-200 hover:bg-purple-300/20">
              <Link to="/dashboard/about">About</Link>
            </button>
          </div>
          <div className="n-right flex justify-end">
            <button className="p-2 shadow-lg shadow-zinc-700/80 rounded-full bg-white-500 hover:bg-blue-300  transition">
              <Link to="/dashboard/profile">
                <FaUserCircle size={28} className=""/>
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
