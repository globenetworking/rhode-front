import React, { useState } from "react";



const Nav = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");

  const toggleMenu = () => {
    if (showMenu === "hidden") {
      setShowMenu("md:hidden");
    } else {
      setShowMenu("hidden");
    }
  };

  return (
    <div>
      <nav
        className="lg:px-32 flex px-2 sm:px-4 py-5 fixed w-full z-20 top-0 left-0 "
        style={{ background: "rgba(22, 22, 26, 0.7)" }}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="flex items-center">
            <img
              src="https://whitebullsafety.org/static/media/white.39b2004ccf1f39e097ff.png"
              alt="photo"
              className="w-28 lg:w-36 self-center text-xl font-semibold whitespace-nowrap text-white mr-12"
            />
          </a>
          <div className="hidden md:flex md:order-2">
            <a href="/public/register" className="">
              <button
                type="button"
                className="text-black bg-[#fc5b3f] tracking-wide rounded-lg text-xs px-5 py-3 text-center mr-3 md:mr-0 font-medium"
              >
                CREATE ACCOUNT
              </button>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="hidden justify-between items-center flex-1 w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 lg:ml-24 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a
                  href="/"
                  className="pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/public/about"
                  className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/public/contact"
                  className=" block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/public/markets"
                  className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Markets
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span
            onClick={toggleMenu}
            tabIndex="0"
            className="btn btn-ghost btn-circle md:hidden"
          >
            <svg
              xmlns="http://www.w3.org.2000/svg"
              className="h-5 w-5 e text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-width="2"
                d="M4 6h1 16M4 12h16M4 18h7"
              />
            </svg>
          </span>
        </div>
        <div
          className={`${showMenu} flex flex-col justify-center pl-6 tracking-wide text-white font-semibold text-xl absolute top-0 left-0 bg-black h-screen w-screen backdrop-blur-sm opacity-100 z-50`}
          style={{ background: "rgba(22, 22, 26, 0.7)" }}
        >
          <span onClick={toggleMenu} className="bg-red-200">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="absolute right-4 top-4"
              height="20"
              width="20"
              xmlns="http://www.w3.org.2000/svg"
            >
              <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
            </svg>
          </span>
          <a aria-current="page" className="text-white active" href="/">
            Home
          </a>
          <a
            className="py-4 text-white active:text-secondary"
            href="/public/about"
            style={{ color: "white" }}
          >
            About
          </a>
          <a className="" href="/public/contact" style={{ color: "white" }}>
            Contact
          </a>
          <a className="py-4" href="/public/markets" style={{ color: "white" }}>
            Market
          </a>
          <button className="flex w-[70%] p-2 font-normal justify-center text-sm uppercase bg-secondary rounded-md shadow-xl">
            <a href="/public/login" style={{ color: "white" }}>
              Log in
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
