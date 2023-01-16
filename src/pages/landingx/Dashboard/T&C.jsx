import React from 'react';
import Nav from "../Navx";
import bultpay from "../../../images/bultpay3.png";

const TC = () => {
  return (
    <div className="px-0 lg:px-0 w-full">
      <div className="flex flex-col bg-[#1f2b3a] shadow-md rounded  text-slate-700 items-center h-screen px-3 justify-center bg-reed pt-3  w-full">
        <Nav />
        <div className="lg:mx-auto  w-full lg:w-10/12  px-3 lg:px-12">
          <div className="flex items-center bg-white_ justify-center">
            <span className="flex items-center w-32 lg:w-36 rounded-md justify-center mb-6">
              <img
                src={bultpay}
                alt="logo"
                className="w-32 lg:w-36 self-center text-xl font-semibold whitespace-nowrap text-white"
              />
            </span>
          </div>
          <div class="mx-16 md:mx-auto pt-2 md:pt-0 font-medium max-h-screen md:h-auto flex flex-col self-center items-center justify-center md:mt-6 mb-12 bg-gray-300 pb-10 rounded-md">
            <div className="py-10 px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              debitis quos, dolores laborum soluta nihil nisi, sunt voluptate
              ipsum voluptates corporis. Labore aliquam ullam porro consequuntur
              odit quod. In, nobis, ipsam ipsa magni accusantium porro cum
              explicabo eius aspernatur harum quisquam deserunt sed voluptas
              repellat expedita dignissimos exercitationem voluptate animi!
            </div>
            <div className="md:space-x-40 md:flex space-y-5 px-5 md:space-y-0 block">
              <button className="btn btn-success px-10 text-gray-300">
                Agree
              </button>
              <button className="btn btn-error px-10 text-gray-300">
                Disagree
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TC;