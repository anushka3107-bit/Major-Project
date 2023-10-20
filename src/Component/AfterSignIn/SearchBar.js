import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <>
      <div className="bg-cSearchBar flex justify-between w-full h-20 shadow-[0px_5px_20px_rgba(0,0,0,0.15)] ">
        <div className="flex items-center justify-center pl-10 cursor-pointer">
          <img
            className="w-10 h-10"
            src="https://i.pinimg.com/236x/8e/e1/23/8ee12366506cd70d2896ea0543934e3e.jpg"
            alt="logo"
          />

          <div className="pl-10 text-lg font-semibold">
            <button className="px-2 py-2 rounded-3xl font-bold  text-white hover:text-white hover:bg-[#f8777d]">
              <a href="/home">Home</a>
            </button>
          </div>

          <div className=" pl-5 text-lg font-semibold">
            <button
              type="button"
              className="px-2 py-2 rounded-3xl font-bold  text-white hover:text-white hover:bg-[#f8777d] "
            >
              Create Pin
            </button>
          </div>
        </div>

        <div className="flex w-3/5 cursor-pointer h-10 bg-white mt-5 m-2 px-[15px] py-2 rounded-[50px] ">
          <input
            className="w-[75rem] text-gray-500 bg-transparent border-r-2 border-r-gray-300 justify-left outline-none"
            type="text"
            placeholder="Search Interests"
          />
          <div className="flex justify-center items-center w-[10%] ">
            <BiSearchAlt className="text-2xl text-gray-500" />
          </div>
        </div>

        <div className="flex text-2xl cursor-pointer items-center justify-end mr-8 ml-0 ">
          <div className="text-white py-2 px-2  hover:bg-[#f8777d] rounded-full">
            <BsSun />
          </div>
          <div className="text-white py-2 px-2  hover:bg-[#f8777d] rounded-full">
            <BsBellFill />
          </div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src="https://img.freepik.com/free-icon/boy_318-860787.jpg?size=626&ext=jpg&uid=R74909077&ga=GA1.2.1579045408.1691049242&semt=ais"
            className="w-3 min-w-[30px] h-3 min-h-[30px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userProfile"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
