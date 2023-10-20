import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "../../images/bg.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      console.log(formData);
      navigate("/home");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full">
        {/* login screen background */}
        <img src={Bg} alt="" />
      </div>

      <div className="absolute w-full max-w-md m-5">
        <form
          className="bg-black shadow-md rounded-2xl px-8 pt-6 pb-8 mt-40"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center">
            <p className="py-3 text-3xl font-extrabold text-cSearchIcon">
              PinYourMood
            </p>
          </div>

          <div className="mb-3 ">
            <label
              className="block text-white text-sm font-bold mb-2 "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center py-5">
            <button
              className="bg-cSearchIcon hover:bg-cHoverColorOrange text-white font-bold py-3 px-5 rounded-full  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
