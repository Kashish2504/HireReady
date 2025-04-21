import Navbar from "../UI/Navbar.jsx";
import logoutfun from "../Backend/profile/logoutbackend.jsx";
import { useState, useEffect } from "react";
import GetProfile from "../Backend/profile/loadData.jsx";
import ResetPassword from "../Backend/profile/resetPassword.jsx";
export default function Profile() {
  const [showReset, setShowReset] = useState(false);
  const [oldPassword, SetOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const payload = async () => {
    const response = await ResetPassword();
    if (response.status == "success") {
      setName(response.name);
      setUsername(response.username);
    }
  };
  useEffect(() => {
    payload();
  }, []);
  const handleReset = async () => {
    const response = await GetProfile(oldPassword, newPassword);
    if (response.status == "success") {
      alert("password reset");
      setShowReset(false);
    } else {
      setError(response.data);
    }
  };
  const handleButton= ()=>{
    setShowReset(true);
  }
  return (
    <>
      <Navbar />
      <div className="text-black h-screen p-9">
        <div className="flex justify-between">
          <h1 className="text-2xl text-black font-bold">Profile</h1>
          <button className="bg-blue-700 rounded-full p-2 text-white" onClick={logoutfun}>logout</button>
        </div>
        <div className="p-4">
          <h1 className="p-4 text-black text-xl">Name : {name}</h1>
          <h1 className="p-4 text-black text-xl">UserName : {username}</h1>
        </div>
        <div>
          {!showReset ? (
            <button onClick={handleButton} className="bg-blue-600 p-2 rounded-full text-white">Reset Password</button>
          ) : (
            <></>
          )}
        </div>
        {showReset ? (
          <>
          <div className="m-1 p-2">
            <span className="text-black">Old Password : </span>{" "}
            <input
              type="text"
              className="text-black"
              onChange={(e) => {
                SetOldPassword(e.target.value);
              }}
            />
            </div>
            <div className="m-1 p-2">
            <span className="text-black">New Password : </span>{" "}
            <input
              type="text"
              className="text-black"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            </div>
            <p>{error}</p>
            <div className="p-2 m-1 flex justify-between">
            <button onClick={handleReset} className="bg-blue-700 rounded-full p-2">Submit</button>
            <button onClick={()=>{setShowReset(false)}} className="bg-gray-700 rounded-full p-2">cancel</button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
