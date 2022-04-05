import React, { useState, useEffect } from "react";
import LandingNav from "../../components/Nav/LandingNav";
import apes from "../../images/apes.jpg"

const grad = 'bg-gradient-to-r from-accent via-purple-500 to-secondary'
const gradText = `${grad} text-transparent bg-clip-text`
const Home = () => {
 
  return (
    <div className=" bg-primary text-white lg:px-16">
      <div className="flex flex-col lg:flex-row py-2  justify-between items-center ">
        <span className="mb-3 text-xs lg:text-base">Discover, find and sell extraordinary NFT with us.</span>
        <span className={`btn btn-xs loading max-w-md ${grad} py-0 min-h-min`}>BUY NFT</span>
      </div>
    <LandingNav/>
    <div className="lg:flex lg:pt-0">
    <div className="px-2 "> <img src={apes}/></div>
    <div className="flex flex-col mt-16 px-4 lg:px-16 items-center">
      <span className="text-4xl mb-6 lg:text-6xl lg:leading-snug ">Trade <span>Crypto.</span> Discover, Collect & Sell NFTs</span>
      <span>The Crypto Monkey is a high-quality collection of 100 unique monkeys on the NFTMart marketplace.</span>
      <span className={`btn ${grad} max-w-md mt-6 self-start text-md mb-6`}>Discover</span>
    </div>
    </div>
    </div>
  );
};

export default Home;
