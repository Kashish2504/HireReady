import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        credentials
      );
      setMessage("Login successful!");
      console.log(response.data);
      localStorage.setItem("token", response.data.token); // store JWT if returned
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      {message && <p className="mb-4 text-sm text-red-500">{message}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import check_login from "../Backend/login/login";
// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (name === "password" && value.length > 8) {
//       setError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password.length < 8) {
//       setError("Password must be at least 8 Characters long.");
//     } else {
//       const response = await check_login(formData.username, formData.password);
//       console.log(response);
//       if (response.status == "success") {
//         if (response.data == "Admin") {
//           alert("Welcome Admin");
//           localStorage.setItem("absiedfufndfjs", "asefsdAdermisdfnasdafsdedf");
//           window.location.href = "/admin/dashboard";
//         } else if (response.data == "Developer") {
//           localStorage.setItem("absiedfufndfjs", "asderwerfDesdfvelopersdfdf");
//           alert("Welcome Developer");
//           window.location.href = "/dashboard";
//         } else if (response.data == "loggedin") {
//           localStorage.setItem("absiedfufndfjs", formData.username);
//           window.location.href = "/dashboard";
//         }
//       } else {
//         if (response.data == "Incorrect Password") {
//           setError("Incorrect Password");
//         } else if (response.data == "Incorrect UserName") {
//           setError("Incorrect UserName");
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-contain bg-zinc-200">
//       <div className="w-full max-w-md bg-white/50 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
//           Hire Ready
//         </h2>
//         <div>
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="text-blue-500 w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="border-2 border-gray-300 mb-2 text-blue-500 w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//           </div>

//           <div className="flex justify-between space-x-4 mt-3">
//             <button
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:bg-blue-400"
//               onClick={handleSubmit}
//             >
//               Login
//             </button>

//           </div>
//         </div>
//         <p className="text-center mt-4 text-black">
//           Do not have an account?{" "}
//           <Link to="/signup" className="text-blue-500">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
