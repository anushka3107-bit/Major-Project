import React from "react";
import { FaSearch } from "react-icons/fa";

const LandingPageSecond = () => {
  return (
    <>
      <div className="h-screen relative bg-cBackgroundBlue md:flex md:flex-col items-center justify-center min-h-screen w-full">
        <a href="https://in.pinterest.com/search/pins/?rs=ac&len=2&q=pizza%20recipes&eq=pizza&etslf=14631">
          <img
            className="hidden md:block md:w-48 rounded-3xl absolute inset-x-1/4 top-2 hover:scale-105 ease-in-out duration-300"
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="foodTop"
          />
        </a>
        <a href="https://in.pinterest.com/search/pins/?rs=ac&len=2&q=egg%20recipes%20for%20breakfast&eq=egg%20recipes&etslf=2271">
          <img
            className="hidden md:block md:w-48 rounded-3xl absolute left-20 inset-y-52 hover:scale-105 ease-in-out duration-300"
            src="https://images.unsplash.com/photo-1593584785033-9c7604d0863f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt="foodLeft"
          />
        </a>
        <a href="https://in.pinterest.com/search/pins/?q=salad&rs=typed">
          <img
            className="hidden md:block md:w-48 rounded-3xl absolute inset-x-1/4 inset-y-1/2 hover:scale-105 ease-in-out duration-300"
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="foodBottom"
          />
        </a>
        <a href="https://in.pinterest.com/search/pins/?q=iranian%20food&rs=typed">
          <img
            className="hidden md:block md:w-64 rounded-3xl absolute inset-y-1/4 left-52 hover:scale-105 ease-in-out duration-300"
            src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            alt="foodCenter"
          />
        </a>
        <div className="hidden absolute inset-y-1/2 left-60 w-52 h-20 rounded-full md:flex justify-center items-center bg-white cursor-pointer">
          <FaSearch className="text-cSearchIcon pt-1 pr-3 text-3xl font-extrabold" />
          <a href="https://in.pinterest.com/search/pins/?q=foods&rs=typed">
            <h1 className="text-cSearchText font-bold text-xl">hey! foodie</h1>
          </a>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col ml-6 h-screen md:ml-96 justify-center items-center">
            <span className="text-5xl text-cSearchText font-extrabold ">
              Search for new recipe
            </span>
            <div className="max-w-md ">
              <p className="break-words pt-5 text-center  text-cSearchIcon font-medium text-lg ">
                What do you want to try next? Think of something you're
                into-like “easy chicken dinner”-and see what you find.
              </p>
            </div>
            <div className="pt-3">
              <button className="bg-cSearchText px-6 py-2 rounded-full justify-center items-center text-white font-medium hover:bg-cSearchIcon">
                <a href="https://in.pinterest.com/ideas/food-and-drink/918530398158/">
                  Explore
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageSecond;
