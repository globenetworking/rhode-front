import React, { useState, useEffect } from "react";
import { FiSun } from 'react-icons/fi';
import { BsWallet2 } from 'react-icons/bs';
import { GiAngelWings } from 'react-icons/gi';
import {AiOutlinePoweroff} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';



import { Link } from "react-router-dom";

export default function bottomMenu() {
  return (
    <div  className="flex justify-around  items-center bg-accent h-12 w-full text-tcream bottom-0 z-50 lg:fixed lg:left-0 lg:w-20 lg:h-screen lg:flex-col fixed">
      
      
      <div className="lg:text-6xl lg:mb-6 text-secondary"><GiAngelWings/></div>
      <FiSun size={21} />
      <BsWallet2 size={21} /> <FiSun size={21} />  <FiSun size={21} /> <FiSettings size={21} /> <AiOutlinePoweroff size={21} />
    </div>
  );
}

