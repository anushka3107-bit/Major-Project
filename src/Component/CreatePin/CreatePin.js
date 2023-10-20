import React from "react";
import SearchBar from "../AfterSignIn/SearchBar";

const CreatePin = () => {
  return (
    <>
        <div className="w-full h-10">
          <SearchBar />
          <div className="flex flex-col justify-center items-center mt-60">
              <h1 className="font-medium text-3xl">Start Creating Pins</h1>
              <p className="text-lg">Drafts expire 30 days after you first save them. After that, they’re deleted</p>
              <div className=" hover:text-white ">
                <button className="bg-red-500 text-white px-2 py-2 rounded-full">Create New</button>
              </div>
          </div>
        </div>
    </>
  );
};

export default CreatePin;



