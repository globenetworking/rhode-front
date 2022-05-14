import React, { useState, useEffect } from 'react';
import { FiSun } from 'react-icons/fi';
import { BsWallet2, BsCollection } from 'react-icons/bs';
import { GiAngelWings, GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

import { AiOutlinePoweroff } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="flex flex-row text-white justify-around items-center bg-accent h-12 w-full text-tcream bottom-0 z-50 lg:left-0 lg:w-24 lg:h-screen lg:flex-col fixed lg:px-5">
      <Link to="/" class="">
        <div className="lg:text-6xl lg:mb-6 text-secondary">
          <GiAngelWings />
        </div>
      </Link>

      <Link
        to="/user/dashboard"
        class="group flex hover:transition-all ease-in-out delay-1000 flex-col items-center justify-center"
      >
        <BsWallet2 size={21} />
        <span className="text-secondary font-bold text-sm lg:group-hover:block hidden">
          Dashboard
        </span>
      </Link>
      <Link
        to="/user/Deposit"
        class="group flex hover:transition-all ease-in-out delay-1000 flex-col items-center justify-center"
      >
        <GiPayMoney size={21} />
        <span className="text-secondary font-bold text-sm lg:group-hover:block hidden">
          Deposit
        </span>
      </Link>
      <Link
        to="/"
        class="group flex transition-all flex-col items-center justify-center"
      >
        <BsCollection size={21} />
      </Link>
      <Link
        to="/user/withdrawal"
        class="group flex hover:transition-all ease-in-out delay-1000 flex-col items-center justify-center"
      >
        <GiReceiveMoney size={21} />
        <span className="text-secondary font-bold text-sm lg:group-hover:block hidden">
          Withdrawal
        </span>
      </Link>
      <Link
        to="/user/profile"
        class="group flex hover:transition-all ease-in-out delay-1000 flex-col items-center justify-center"
      >
        <FiSettings size={21} />
        <span className="text-secondary font-bold text-sm lg:group-hover:block hidden">
          Profile
        </span>
      </Link>
      <Link
        to="/"
        class="group flex hover:transition-all ease-in-out delay-1000 flex-col items-center justify-center"
      >
        <AiOutlinePoweroff size={21} />
      </Link>
    </div>
  );
}
