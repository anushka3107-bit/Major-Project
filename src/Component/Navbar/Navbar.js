import React from "react";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="py-5 w-full bg-cNavbar ">
      <div className="container mx-auto px-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="cursor-pointer w-10 h-10 rounded-3xl "
          />
          <span className="cursor-pointer text-xl font-semibold ml-2 text-white hover:text-cSearchIcon">
            PinYourMood
          </span>
        </a>
        <div className="flex items-center">
          <a
            href="/"
            className="pr-10 font-medium text-white hover:text-cSearchIcon"
          >
            About
          </a>
          <a
            href="/"
            className="pr-10 font-medium text-white hover:text-cSearchIcon"
          >
            Business
          </a>
          <a
            href="/"
            className="pr-10 font-medium text-white hover:text-cSearchIcon"
          >
            Blog
          </a>
          <a
            href="/login"
            className="bg-cSearchIcon cursor-pointer mr-4 px-5 py-2 rounded-3xl hover:bg-cHoverColorOrange text-white"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
