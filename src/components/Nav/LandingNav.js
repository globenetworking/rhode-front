import React, { useState, useEffect } from "react";
import { FiSun } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { GiAngelWings } from 'react-icons/gi';

const grad = 'bg-gradient-to-r from-pink-300 via-secondary to-secondary'
const gradText = `${grad} text-black bg-clip-text stroke-transparent fill-black stroke-2 `

export default function LandingNav() {
  return (
    <div class="navbar pr-3 px-0 lg:pr-0 bg-primary">
  <div class="navbar-start">
    <div class="dropdown">
     <div class="flex items-center">
      <div><GiAngelWings size={35}  className="mx-3 text-secondary"/></div>
     {/* <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label> */}
      <span class="uppercase text-lg font-bold">CoolS</span>
     </div>
      
      <ul tabindex="0" class="menu bg-neutral text-white menu-compact dropdown-content mt-3 p-2 shadowrounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl"></a>
  </div>
  <div class="navbar-end">
      <FiSun class="text-white" />
      {/* <button className="mx-4 bg-secondary px-6 py-1.5 rounded-md text-sm text-white font-semibold ">JOIN</button> */}
    {/* <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> */}
  </div>
</div>
  );
}

