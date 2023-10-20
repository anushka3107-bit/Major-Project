import React from "react";
import ContentPage from "./ContentPage";
import pindata from "../../data/pindata";
import Footer from "../Footer/Footer";
import SearchBar from "../AfterSignIn/SearchBar";
import CardIndex from "../AfterSignIn/Filter/CardIndex";
const Main = (props) => {
  let data = [];
  if(props.cId === 0){
    data = pindata;
  }else{
    data = pindata.filter(item => item.cId === props.cId);
  }
  
  return (
    <div className="h-screen w-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="pb-5">
          <SearchBar className="h-screen w-screen fixed" />
          <CardIndex className="h-screen w-screen" />
        </div>
        <ContentPage className="h-screen w-screen" data={data} />
        <Footer className="w-screen" />
    </div>
  );
};

export default Main;
