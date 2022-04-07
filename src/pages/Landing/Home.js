import React, { useState, useEffect } from "react";
import LandingNav from "../../components/Nav/LandingNav";
import NftCard from "../../components/Nav/NftCard";
import apes from "../../images/apes.jpg"
import Zoom from 'react-reveal/Zoom';


const grad = 'bg-gradient-to-r from-pink-300 via-secondary to-secondary'
const gradText = `${grad} text-black bg-clip-text stroke-transparent fill-black stroke-2 `
const Home = () => {
 
  return (
    <div className=" bg-primary text-white lg:px-16">
      <div className="flex flex-col lg:flex-row py-2  justify-between items-center ">
      
        <span className="mb-3 text-xs lg:text-base" > <Zoom cascade>Discover, find and sell extraordinary NFT with us.</Zoom></span>
        <span className={`btn btn-xs loading max-w-md btn-secondary text-white py-0 min-h-min`}>BUY NFT</span>
      </div>
    <LandingNav/>
    <div className="lg:flex lg:pt-0">
    <div className="px-2 "> <img src={apes}/></div>
    <div className="flex flex-col mt-16 px-4 lg:px-16 items-center">
      <span className={`text-4xl mb-6 lg:text-6xl  lg:leading-snug font-semibold`} style={{WebkitTextStroke: "3px transparent"}}>Trade  Crypto. Discover, Collect & <div className={`${gradText} `}> Sell NFTs</div> </span>
      <span>The Crypto Monkey is a high-quality collection of 100 unique monkeys on the NFTMart marketplace.</span>
      <span className={`btn  max-w-md mt-6 self-start text-md mb-6 btn-secondary`}>Discover</span>
    </div>
    
    </div>
    {/* section */}
    <div className="flex flex-col items-center mt-10">
      <div className="capitalize font-semibold text-xl ">Top Sellers</div>
      <div className="grid grid-cols-1 lg:grid-col-4">
        <NftCard/>
      </div>
    </div>

    {/* section */}
    <div class="stats mt-12 shadow flex flex-col lg:flex-row py-1 bg-primary px-4 text-tcream">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Total Likes</div>
    <div class="stat-value">25.6K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Page Views</div>
    <div class="stat-value text-secondary">2.6M</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat max-h-28">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?w=128&h=128" />
        </div>
      </div>
    </div>
    <div class="stat-value">86%</div>
    <div class="stat-title">Tasks done</div>
    <div class="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
    </div>
  );
};

export default Home;
