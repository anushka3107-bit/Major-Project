import React from "react";
import SearchBar from "../AfterSignIn/SearchBar";

const UserProfile = () => {
  return (
    <>
      <div className="w-full h-full">
        <SearchBar className="h-full w-full fixed" />
        <div className="px-80 py-10 w-full h-full relative">
          <div className="flex flex-col justify-center items-center h-70 w-30 rounded-xl px-80 py-20 text-lg shadow-md bg-[#ff747b]">
            <h1 className="text-white font-semibold" >@UserProfile</h1>
            <div className="flex space-x-4 pl-5 text-lg font-semibold pt-3">
              <button className="px-3 py-2 rounded-3xl text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-400">
                <a href="/profile"> Share </a>
              </button>

              <button className="px-4 py-2 rounded-3xl text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-400">
                <a href="/profile"> Edit Profile </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;