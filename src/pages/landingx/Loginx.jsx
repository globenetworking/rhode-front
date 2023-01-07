import React from 'react';
import logo from "../../images/whitebulllogo.png";

function Loginx() {
  return (
    <div className="px-0 lg:px-0 w-full">
      <div className="flex flex-col bg-[#26313f3a] shadow-md rounded  text-slate-700 items-center h-screen px-3 justify-center bg-reed pt-3  w-full">
        <div className="lg:mx-auto w-full lg:w-10/12 px-3 lg:px-12">
          <div className="flex items-center justify-center">
            <span className="flex items-center w-32 lg:w-36 rounded-md bg-black text-secondary justify-center mb-6">
              <img src={logo} alt="logo" className="w-32 lg:w-36 self-center text-xl font-semibold whitespace-nowrap text-white" />
            </span>
          </div>
        </div>
        <div className=" w-full mx-auto pt-2 md:pt-0 max-h-screen md:h-auto flex flex-col self-center items-center md:mt-6 mb-12">
          <div className="bg-white sm:max-w-sm w-full px-4 pb-4 md:pb-0 ">
            <div className="w-full rounded-lg py-0 lg:py-6 px-6 pt-3">
              <label className="block mt-3 text-lg lg:text-xl capitalize font-semibold pb-2">Login into your account</label>
              <p>Sign in using your email and password</p>
              <form method="#" action="#" className="mt-6">
                <div className="pb-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-sm">Email Address <span className="text-red-600">*</span></div>
                  <input placeholder="Enter your email" className=" pl-4 mt-1 block bg-white w-full border border-slate-300 rounded shadow text-black  placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200" />
                </div>
                <div className="text-center text-red-400 text-sm"></div>
                <div className="mt-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-sm">Password <span className="text-red-600">*</span></div>
                  <input type="password" placeholder="Enter your password" className=" pl-4 mt-1 block bg-white w-full border border-slate-300 rounded shadow text-black  placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200" />
                </div>
                <div className="mt-2"></div>
                  <a className="text-xs text-red-600 cursor mt-4 font-semibold tracking-wide" href="/public/forgot-password">Forgot password?
                  </a>
                <div className="text-center text-red-600 text-sm"></div>
                <div className="text-center text-red-600 text-sm"></div>
                <button className="font-semibold bg-blue-600 rounded text-white capitalize text-sm w-full  mt-7 btn-sm h-9 hover:bg-blue-500 focus:bg-blue-600">Login</button>
                <div className="flex mt-4 justify-center w-full text-sm">
                  <div className=" text-sm">Don't have an account? 
                    <a className="ml-2 text-blue-600 font-semibold focus:text-red-500" href="/public/register">Register</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginx;