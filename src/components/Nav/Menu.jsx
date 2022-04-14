import React, { useState, useEffect } from 'react';
import { FiSun } from 'react-icons/fi';
import { BsWallet2, BsCollection } from 'react-icons/bs';
import { GiAngelWings, GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

import { AiOutlinePoweroff } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="flex flex-row text-white justify-around items-center bg-accent h-12 w-full text-tcream bottom-0 z-50 lg:left-0 lg:w-20 lg:h-screen lg:flex-col fixed">
       <Link to="/" class="">
      <div className="lg:text-6xl lg:mb-6 text-secondary">
        <GiAngelWings />
      </div>
      </Link>

      
      <Link to="/dashboard" class="">
        <BsWallet2 size={21} />
      </Link>
      <Link to="/Deposit" class="">
        <GiPayMoney size={21} />
      </Link>
      <Link to="/" class="">
        <BsCollection size={21} />
      </Link>
      <Link to="/Withdrawal" class="text-white">
        <GiReceiveMoney size={21} />
      </Link>
      <Link to="/" class="">
        <FiSettings size={21} />
      </Link>
      <Link to="/" class="">
        <AiOutlinePoweroff size={21} />
      </Link>
    </div>
  );
}
