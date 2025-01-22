import React from "react";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
function header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status= useSelector((state) => state.auth);
  const handleSignout = async () => {
    try {
      await signOut(auth); 
      dispatch(logout());
      navigate("/login"); 
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };
  return (
    <header className="container mx-auto  flex justify-between items-center py-6 ">
      <div>
        <Logo reducted={false} width={130} height={130} />
      </div>
      <div>
        {status.loggedIn && (
          <ul>
            <li className="text-slate-400 text-left">Movies</li>
          </ul>
        )}
      </div>
      <div>
        {status.loggedIn ? (
          <ul className="flex space-x-6">
            <li className="text-slate-400 text-left flex justify-center items-center">Profile</li>
            <button className="bg-red-700 text-white w-full text-md py-2 px-2 rounded-md hover:bg-red-600"
            onClick={handleSignout}>
              Sign out
            </button>
          </ul>
        ) : (
          <ul className="flex space-x-4">
            <button
              className="text-xl  w-24 text-white bg-red-700 rounded-md py-2 hover:bg-red-600 shadow-md  "
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="border-none text-xl  w-24 bg-none text-white rounded-md py-2  shadow-md"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </ul>
        )}
      </div>
    </header>
  );
}

export default header;
