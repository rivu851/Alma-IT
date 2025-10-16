import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook, FaArrowLeft } from "react-icons/fa";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full flex "
      style={{
        background: "linear-gradient(to bottom, #7F8FFE, #D2AE82, #F69A22)",
      }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex justify-center items-center bg-white bg-opacity-100 p-10 relative">
  <button
    onClick={() => navigate(-1)}
    className="absolute top-6 left-6 text-2xl text-gray-500 hover:text-gray-800 transition"
  >
    <FaArrowLeft />
  </button>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-start max-w-lg"
  >
    {/* Small tagline */}
    <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
      AlmaIT
    </p>

    {/* Main heading */}
    <h1 className="text-5xl font-extrabold text-gray-900 leading-snug">
      Welcome Back
    </h1>

    {/* Subheading */}
    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
      Log in to continue your{" "}
      <span className="italic font-semibold text-indigo-600">journey </span>  
      and stay connected with your community.
    </p>
  </motion.div>
</div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center mt-24">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-50 rounded-2xl shadow-lg p-10 max-w-lg w-3/4 mb-8"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 mb-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Fixed: navigate to /home on click */}
          <button
            onClick={() => navigate("/home")}
            className="bg-black text-white w-1/2 py-4 rounded-full font-semibold mb-5 hover:bg-gray-800 transition mx-auto block"
          >
            Login
          </button>

          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">continue with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-8 text-2xl text-gray-600 mb-5">
            <FaGoogle className="cursor-pointer hover:text-red-500" />
            <FaGithub className="cursor-pointer hover:text-gray-800" />
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 hover:underline"
            >
              Sign-Up
            </button>
          </p>
        </motion.div>

        {/* Image (right below form, not too low) */}
        <div className="w-3/4">
          <img
            src="back.png"
            alt="Login"
            className="w-full h-60 object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
