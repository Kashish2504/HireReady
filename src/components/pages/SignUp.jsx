import { useState } from "react";
import { Link } from "react-router-dom";
import sign_up from "../Backend/sign_up/signup";
const SignupPage = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password" && value.length > 8) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError("Password must be at least 8 Characters long.");
    } else {
      const response= await sign_up(formData.username,formData.password,formData.fullName);
      console.log(response);
      if(response.status=="success"){
      window.location.href = "/login";
      }
      else{
        if(response.data=="UserName Already exist"){
          setError("UserName Already exist");
        }
      }
    }
  };


  return (
    <div className="flex h-screen items-center justify-center bg-contain">
      <div className="w-full max-w-md bg-gray-400/50 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Hire Ready
        </h2>
        <div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-emerald-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="flex justify-between space-x-4 mt-3">
            <button
            onClick={handleSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:bg-blue-400"
            >
              Sign Up
            </button>

          </div>
        </div>
        <p className="text-center mt-4 text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
