import React, { useState } from "react";
import Input from "./Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast,Bounce  } from "react-toastify";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        dispatch(
          loginAction({
            email: userCredential.user.email,
          })
        );
        navigate("/");
        toast.success("Successfully Signed in!", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true, // Allow click to close the toast
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                });
      }
    } catch (err) {
      setError("Failed to sign up. Please try again.");
      console.error(err.message); // Debugging
    }
  };

  return (
    <div className="h-screen ">
      <div className="w-1/4 mx-auto px-16 pt-24 pb-28  bg-slate-400 bg-opacity-10 flex flex-col justify-center rounded-lg h-auto">
        <h1 className="text-left text-4xl font-bold text-white mb-6">Sign up</h1>
        <div className="flex flex-col space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password" // Ensure secure input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            className="bg-red-700 text-white w-full h-12 text-xl py-2 px-2 rounded-md hover:bg-red-600"
            onClick={handleSignup}
          >
            Sign up
          </button>
          <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick={false}
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                     
                    />
          <h3 className="mx-auto text-gray-200 font-normal">OR</h3>
          <button
           className="bg-slate-400 text-black w-full h-12 text-xl py-2 px-2 rounded-md"
            onClick={() => navigate("/login")}
          >
            Already have an account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
