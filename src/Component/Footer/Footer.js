import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative flex w-full bg-cSearchBar items-center h-screen justify-between ">
        <div className="flex flex-col justify-center items-center w-1/2 pl-8">
          <h4 className="text-3xl font-bold hover:text-red-500">About Us</h4>

          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold">
              We are thrilled to present our talented and dedicated frontend
              development team, a group of innovative professionals who bring
              creativity and expertise to every project. With their combined
              skills and passion for cutting-edge technologies, we strive to
              create captivating user experiences and visually stunning
              interfaces.
            </p>
          </div>

          <div className="flex cursor-pointer space-evenly">
            <a href="##">
              <span className="hover:text-red-500 font-bold">
                {" "}
                Terms & Conditions{" "}
              </span>
            </a>
            <a href="##">
              <span className="px-4 hover:text-red-500 font-bold">
                {" "}
                Privacy Policy
              </span>
            </a>
          </div>

          <div className="flex flex-col cursor-pointer hover:text-red-500 font-bold">
            <span>@Copyright {new Date().getFullYear()}.</span>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end w-1/2 pr-20 cursor-pointer">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-xl hover:text-red-500">
              Team Members
            </h4>
            <a href="https://www.linkedin.com/in/anushka-bhardwaj-357806208/">
              <span className="hover:text-red-500">Anushka Bhardwaj</span>
            </a>
            <a href="https://www.linkedin.com/in/nishant-chauhan-75683320b/">
              <span className="hover:text-red-500">Nishant Chauhan</span>
            </a>
            <a href="https://www.linkedin.com/in/himanshu-bhatt-249093202/">
              <span className="hover:text-red-500">Himanshu Bhatt</span>
            </a>
            <a href="https://www.linkedin.com/in/unnati-bhole-623468247/">
              <span className="hover:text-red-500">Unnati Bhole</span>
            </a>
            <div className="pt-3">
              <button className="bg-[#f8777d] rounded-full px-3 py-3 hover:bg-[#f7a2a6]  text-white font-semibold transition-all hover:text-white">
                <a href="/contact">Get In Touch</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
