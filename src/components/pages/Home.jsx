import { Link } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Features from "./Features.jsx";
import Team from "./Team.jsx";
import Footer from "../UI/footer.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-[98vw] items-center justify-center ">
        <div className="text-center ">
          <h1 className="text-2xl font-bold mb-6 text-black">
            {" "}
            Your dream job is just one smart preparation away. <br />
            Practice, improve, and ace your interviews with confidence!
          </h1>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>
      </div>
      <Features />
      <Team></Team>
      <Footer/>
    </>
  );
};

export default HomePage;