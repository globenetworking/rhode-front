import React, { useState, useEffect } from "react";
import LandingNav from "../../components/Nav/LandingNav";
import apes from "../../images/apes.jpg"
const Home = () => {
 
  return (
    <div className=" bg-primary text-white h-screen">
    <LandingNav/>
    <div className="px-2"> <img src={apes}/></div>
    <div className="flex flex-col mt-16 px-4">
      <span className="text-4xl mb-6">Trade <span className="text-texent">Crypto.</span> Discover, Collect & Sell NFTs</span>
      <span>The Crypto Monkey is a high-quality collection of 100 unique monkeys on the NFTMart marketplace.</span>
    </div>
    </div>
  );
};

export default Home;
