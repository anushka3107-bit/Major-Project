import React from "react";
import LandingPageTop from "../LandingPages/LandingPageTop";
import LandingPageSecond from "../LandingPages/LandingPageSecond";
import LandingPageThird from "../LandingPages/LandingPageThird";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden scrollbar-hide">
        <LandingPageTop />
        <LandingPageSecond />
        <LandingPageThird />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
