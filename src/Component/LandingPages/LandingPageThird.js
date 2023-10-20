const LandingPageThird = () => {
    return (
      <>
        <div className="flex relative bg-cBackgroundColor h-screen w-screen">
          <img
            className="object-cover w-1/2 h-auto"
            src="https://s.pinimg.com/webapp/shop-bd0c8a04.png"
            alt="fashion"
          />
  
          <img
            className="absolute w-56 top-28 left-20 rounded-2xl  justify-center items-center "
            src="https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png"
            alt="fashion"
          />
  
          <img
            className="absolute inset-y-3/4 w-28 left-12"
            src="	https://s.pinimg.com/webapp/creator-avatar-d7a05622.png"
            alt="fashion"
          />
  
          <div className="flex-1 h-screen flex flex-col items-center justify-center ">
            <span className="text-cTextColorShop text-6xl font-extrabold">
              See it, make it,
            </span>
            <span className="pt-2 text-cTextColorShop text-6xl font-extrabold">
              try it, do it
            </span>
            <div className="max-w-md justify-center text-center text-cTextColorShop text-2xl font-medium">
              <p className="pt-12 pl-6 break-words">
                The best part of Pinterest is discovering new things and ideas
                from people around the world.
              </p>
            </div>
            <div className="pt-3">
              <button className="bg-cTextColorShop px-6 py-2 rounded-full justify-center items-center text-white font-medium ">
                <a href="https://in.pinterest.com/ideas/home-decor/935249274030/">
                  Explore
                </a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default LandingPageThird;
  