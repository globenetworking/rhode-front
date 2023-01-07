import brax from "../../images/brax.jpg";
import fig1 from "../../images/fig1.svg";
import fig2 from "../../images/fig2.svg";
import fig3 from "../../images/fig3.svg";
import leaves from "../../images/leaves.svg";
import cb from "../../images/coinbase.jfif";
import btc from "../../images/bitcoin.jfif";
import crypto from "../../images/crypto.jpeg";
import btc1 from "../../images/fig4.svg";
import mscard from "../../images/fig5.svg";
import visa from "../../images/fig6.svg";
import skrill from "../../images/fig7.svg";
import paypal from "../../images/fig8.svg";
import neteller from "../../images/fig9.svg";
import React, { Component, useState } from "react";
import Footer from "./Footerx";
import landing from "../../images/landing.svg";
import alphabet from "../../images/alphabet.svg";
import facebook from "../../images/facebook.svg";
import ms from "../../images/microsoft.svg";
import tesla from "../../images/tesla.svg";
import amazon from "../../images/amazon.svg";


const Homex = () => {
  
  const [ showMenu, setShowMenu ] = useState("md:hidden");

  const toggleMenu = () => {
    if ( showMenu == "hidden" ){
      setShowMenu("md:hidden");
    }else {
      setShowMenu("hidden")
    }
  };


  return (
    <div className="App">
      <section
        id="nav_and_hero"
        className="h-screen lg:px-24 overflow-x-hidden bg-[#212224] bg-no-repeat bg-cover bg-left-[50%] bg-right-[50%] bg-top-[0] bg-bottom[0]"
        style={{
          backgroundImage: "url(/bglanding.png)",
        }}
      >
        <div className="absolute bottom-0 left-0 z-10 w-full">
          <coingecko-coin-price-marquee-widget
            currency="usd"
            coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
            locale="en"
            vce-ready=""
          >
            {/* #shadow root (open) */}
            <div
              className="cg-container large bg-[#FFFFFF] w-full"
            >
              <div className="cg-widget">
                <div className="cg-marquee bg-[#FFFFFF]">
                  <span className="cg-marquee-content-1">
                    <div className="cg-flex cg-flex-row">
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/bitcoin&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=bitcoin"
                        target="_blank"
                        className="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div className="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                            className="cg-mr-2"
                          />
                          <span>
                            <span className="cg-bold">Bitcoin</span> (BTC)
                          </span>
                        </div>
                        <div className="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span className="cg-bold">$16,967.27</span>
                            <span>(0.80%)</span>
                          </div>
                          <div className="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/ethereum&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=ethereum"
                        target="_blank"
                        className="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div class="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                            className="cg-mr-2"
                          />
                          <span>
                            <span className="cg-bold">Ethereum</span> (ETH)
                          </span>
                        </div>
                        <div className="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span className="cg-bold">$1,269.59</span>
                            <span>(1.49%)</span>
                          </div>
                          <div className="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/eos&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=eos"
                        target="_blank"
                        className="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div className="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481"
                            className="cg-mr-2"
                          />
                          <span>
                            <span class="cg-bold">EOS</span> (EOS)
                          </span>
                        </div>
                        <div className="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span className="cg-bold">$0.896422</span>
                            <span>(0.55%)</span>
                          </div>
                          <div className="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/ripple&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=ripple"
                        target="_blank"
                        className="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div className="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
                            class="cg-mr-2"
                          />
                          <span>
                            <span className="cg-bold">XRP</span> (XRP)
                          </span>
                        </div>
                        <div className="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span className="cg-bold">$0.345210</span>
                            <span>(1.67%)</span>
                          </div>
                          <div className="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/litecoin&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=litecoin"
                        target="_blank"
                        className="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div className="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
                            className="cg-mr-2"
                          />
                          <span>
                            <span className="cg-bold">Litecoin</span> (LTC)
                          </span>
                        </div>
                        <div className="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span className="cg-bold">$75.93</span>
                            <span>(1.90%)</span>
                          </div>
                          <div className="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <div className="cg-flex cg-items-center">
                        <a className="cg-bold cg-sm cg-px-3">
                          Powered by
                          <a
                            className="cg-primary-color-dark cg-no-underline"
                            href="https://www.coingecko.com/en?utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=bitcoin,ethereum,eos,ripple,litecoin"
                            target="_blank"
                          >
                            CoinGecko
                          </a>
                        </a>
                      </div>
                    </div>
                  </span>
                  <span class="cg-marquee-content-2">
                    <div class="cg-flex cg-flex-row">
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/bitcoin&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=bitcoin"
                        target="_blank"
                        class="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div class="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                            class="cg-mr-2"
                          />
                          <span>
                            <span class="cg-bold">Bitcoin</span> (BTC)
                          </span>
                        </div>
                        <div class="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span class="cg-bold">$16,967.27</span>
                            <span>(0.80%)</span>
                          </div>
                          <div class="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/ethereum&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=ethereum"
                        target="_blank"
                        class="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div class="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                            class="cg-mr-2"
                          />
                          <span>
                            <span class="cg-bold">Ethereum</span> (ETH)
                          </span>
                        </div>
                        <div class="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span class="cg-bold">$1,269.59</span>
                            <span>(1.49%)</span>
                          </div>
                          <div class="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/eos&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=eos"
                        target="_blank"
                        class="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div class="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481"
                            class="cg-mr-2"
                          />
                          <span>
                            <span class="cg-bold">EOS</span> (EOS)
                          </span>
                        </div>
                        <div class="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span class="cg-bold">$0.896422</span>
                            <span>(0.55%)</span>
                          </div>
                          <div class="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/ripple&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=ripple"
                        target="_blank"
                        class="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div class="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
                            class="cg-mr-2"
                          />
                          <span>
                            <span class="cg-bold">XRP</span> (XRP)
                          </span>
                        </div>
                        <div class="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span class="cg-bold">$0.345210</span>
                            <span>(1.67%)</span>
                          </div>
                          <div class="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <a
                        href="https://www.coingecko.com/resource_redirect?locale=en&amp;route=coins/litecoin&amp;utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=litecoin"
                        target="_blank"
                        class="cg-py-2 cg-px-3 cg-flex cg-coin-row cg-sm bg-[#4C4C4C]"
                      >
                        <div class="cg-flex cg-items-center">
                          <img
                            src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
                            class="cg-mr-2"
                          />
                          <span>
                            <span class="cg-bold">Litecoin</span> (LTC)
                          </span>
                        </div>
                        <div class="cg-ml-2 cg-flex cg-justify-end cg-items-center cg-primary-color-dark">
                          <div>
                            <span class="cg-bold">$75.93</span>
                            <span>(1.90%)</span>
                          </div>
                          <div class="cg-ml-2 cg-arrow-up"></div>
                        </div>
                      </a>
                      <div class="cg-flex cg-items-center">
                        
                          Powered by
                          <a
                            class="cg-primary-color-dark cg-no-underline"
                            href="https://www.coingecko.com/en?utm_source=braxtrade.net&amp;utm_medium=coin_price_marquee_widget&amp;utm_content=bitcoin,ethereum,eos,ripple,litecoin"
                            target="_blank"
                          >
                            CoinGecko
                          </a>
                        
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </coingecko-coin-price-marquee-widget>
          <nav
            className="lg:px-32 flex px-2 sm:px-4 py-5 fixed w-full z-20 top-0 left-0_border-b border-gray-200 dark:border-gray-600"
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
                      href=""
                      className="pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/public/about"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/public/contact"
                      className=" block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/public/markets"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
              <a
                className="py-4"
                href="/public/markets"
                style={{ color: "white" }}
              >
                Market
              </a>
              <button className="flex w-[70%] p-2 font-normal justify-center text-sm uppercase bg-secondary rounded-md shadow-xl">
                <a href="/public/login" style={{ color: "white" }}>
                  Log in
                </a>
              </button>
            </div>
          </nav>

          <section className="overflow-y-hidden">
            <div className="px-4 py-12 sm:px-6 md:px-6 lg:py-24">
              <div className="flex flex-col md:flex-row md:flex-wrap overflow-y justify-between items-center mx-auto lg:pl-12 lg:pr-8">
                <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-6/12 md:mb-0 xl:mt-0">
                  <span className="hidden md:flex mb-8 text-xs font">{""}</span>
                  <h1 className="mb-8 mt-16 md:mt-2 tracking-wide text-2xl w-9/12 md:w-full md:leading-10 lg:tracking-wide lg:pr-40 font-bold text-white lg:text-5xl">
                    Multi-regulated <br className="md:hidden" />
                    global broker
                  </h1>
                  <p className="text-sm  mb-8 md:text-base leading-relaxed text-left text-gray-500">
                    A trusted destination for traders worldwide, Authorized by
                    FCA, ASIC &amp; FSCA
                  </p>
                  <div className="flex pl-4 flex-wrap w-7/12 md:w-5/12 mt-2 mx-4 text-left justify-between">
                    <a className="" href="/public/login">
                      <button className="border-2 border-secondary px-3 md:px-6 uppercase text-xs font-medium py-2 text-white rounded-md">
                        Login
                      </button>
                    </a>
                    <a href="/public/register">
                      <button className="border-2 border-secondary px-3 md:px-6 uppercase text-xs font-medium py-2 text-white rounded-md">
                        SignUp
                      </button>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:max-w-lg lg:w-6/12 rounded-xl">
                  <div>
                    <div className="relative w-full max-w-lg">
                      <div className="relative">
                        <img
                          className="object-cover object-center mx-auto rounded-lg"
                          src={landing}
                          alt="hero"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-around lg:mx-14">
              <div className="w-66 flex items-center">
                <div>
                  <img src={alphabet} alt="/alphabet" />
                </div>
              </div>
              <div class="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7 14l5-5 5 5H7z"></path>
                </svg>
                <span class="ml-1 default_cursor_cs">12.443</span>
              </div>
              <div class="w-66 flex items-center default_cursor_cs">
                <div>
                  <img src={facebook} class="default_cursor_cs" />
                </div>
                <div class="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="default_cursor_cs"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 14l5-5 5 5H7z" class="default_cursor_cs"></path>
                  </svg>
                  <span class="ml-1 default_cursor_cs">12.443</span>
                </div>
              </div>
              <div class="w-66 flex items-center default_cursor_cs">
                <div>
                  <img src={ms} class="default_cursor_cs" />
                </div>
                <div class="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="default_cursor_cs"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 14l5-5 5 5H7z"></path>
                  </svg>
                  <span class="ml-1 default_cursor_cs">12.443</span>
                </div>
              </div>
              <div class="w-66 flex items-center default_cursor_cs">
                <div>
                  <img src={tesla} class="default_cursor_cs" />
                </div>
                <div class="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 14l5-5 5 5H7z"></path>
                  </svg>
                  <span class="ml-1">12.443</span>
                </div>
              </div>
              <div class="w-66 flex items-center">
                <div>
                  <img src={amazon} />
                </div>
                <div class="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 14l5-5 5 5H7z"></path>
                  </svg>
                  <span class="ml-1">12.443</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#101112] text-white md:px-24 lg:px-36 default_cursor_cs">
        <div className="flex flex-col md:flex-row px-4 justify-between pt-12 default_cursor_cs">
          <div className="text-4xl font-bold tracking-wide default_cursor_cs">
            Save time. Get{" "}
            <span className="font-semibold text-[#FC5C40]">higher return.</span>{" "}
            <br /> Multiply wealth.
          </div>
          <a className="" href="/public/register">
            <button className="border-2 mt-8 text-white md:mt-0 tracking-wide border-[#FC5C40] h-12 px-4 rounded">
              Join now
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between mt-12 md:mt-24 pb-12 default_cursor_cs">
          <div className="w-11/12 overflow-x-hidden relative mb-6 md:mb-0 md:w-80 shadow-xl bg-[#1e1d1d] p-6 pt-0 rounded overflow-y-hidden h-[300px] default_cursor_cs">
            <figure className="w-11/12 absolute -top-20 -right-20 justify-self-end">
              <img
                src={fig1}
                className="w-full default_cursor_cs"
                alt="Shoes"
              />
            </figure>
            <div className="mb-6 h-36 default_cursor_cs"></div>
            <div className="relative -top-6">
              <h2 className="font-semibold text-xl md:text-2xl text-white default_cursor_cs">
                Various assets
              </h2>
              <p className="mt-6 default_cursor_cs">
                We provide one-click access to all major exchanges and more to
                take advantage of a wider range of opportunities.
              </p>
            </div>
          </div>
          <div className="w-11/12 overflow-x-hidden relative mb-6 md:mb-0 md:w-80 shadow-xl bg-[#1e1d1d] p-6 pt-0 rounded overflow-y-hidden h-[300px] default_cursor_cs">
            <figure className="w-11/12 absolute -top-20 -right-20 justify-self-end">
              <img
                src={fig2}
                className="w-full default_cursor_cs"
                alt="Shoes"
              />
            </figure>
            <div className="mb-6 h-36"></div>
            <div className="relative -top-6 default_cursor_cs">
              <h2 className="font-semibold text-xl md:text-2xl text-white">
                Market analysis
              </h2>
              <p className=" mt-6">
                We provide top analysis for all investments done using our
                platform.
              </p>
            </div>
          </div>
          <div className="w-11/12 overflow-x-hidden relative mb-6 md:mb-0 md:w-80 shadow-xl bg-[#1e1d1d] p-6 pt-0 rounded overflow-y-hidden h-[300px] default_cursor_cs">
            <figure className="w-11/12 absolute -top-20 -right-20 justify-self-end">
              <img src={fig3} className="w-full" alt="Shoes" />
            </figure>
            <div className="mb-6 h-36 default_cursor_cs"></div>
            <div className="relative -top-6">
              <h2 className="font-semibold text-xl md:text-2xl text-white">
                NFTs
              </h2>
              <p className=" mt-6">
                Discover, collect, and sell extraordinary NFTs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="default_cursor_cs">
        <div className="font-bold pt-8 pb-4 text-lg leading-4 tracking-wide lg:text-3xl mb-6 pl-6 lg:px-28 default_cursor_cs">
          Trade your favourite instruments from around the world
        </div>
        <div className="flex flex-col lg:flex-row lg:px-28 my-6 px-3">
          <div className="flex justify-start lg:pl-[30px] leading-4 mb-12 lg:mb-0">
            <div className="w-[30px] lg:w-[59px] relative before:w-[1px] before:h-full before:bg-secondary before:content-[''] before:absolute before:top-0 before:left-[7px]">
              <p className="w-[150px] text-right transform -rotate-90 text-[#fc5b3f] mt-[64px] ml-[-67px]">
                <span className="bg-white pr-[5px] pl-[14px] uppercase font-semibold">
                  Info
                </span>
              </p>
            </div>
            <div>
              <article>
                <div className="font-semibold text-lg leading-6 tracking-wide lg:text-xl mb-6 default_cursor_cs">
                  Fx Pairs
                </div>
                <div className="text-gray-600 leading-6">
                  Trade on the strength of one currency versus another. The FX
                  market is the largest and most liquid market in the world
                </div>
              </article>
            </div>
          </div>
          <div className="flex justify-start lg:pl-[30px] leading-4 mb-12 lg:mb-0">
            <div className="w-[30px] lg:w-[59px] relative before:w-[1px] before:h-full before:bg-secondary before:content-[''] before:absolute before:top-0 before:left-[7px]">
              <p className="w-[150px] text-right transform -rotate-90 text-[#fc5b3f] mt-[64px] ml-[-67px]">
                <span className="bg-white pr-[5px] pl-[14px] uppercase font-semibold">
                  Info
                </span>
              </p>
            </div>
            <div>
              <article className="default_cursor_cs">
                <div className="font-semibold text-lg leading-6 tracking-wide lg:text-xl mb-6 default_cursor_cs">
                  Commodities
                </div>
                <div className="text-gray-600 leading-6 default_cursor_cs">
                  Speculate on the price of some of the most popular
                  cryptocurrencies
                </div>
              </article>
            </div>
          </div>
          <div className="flex justify-start lg:pl-[30px] leading-4 mb-12 lg:mb-0">
            <div className="w-[30px] lg:w-[59px] relative before:w-[1px] before:h-full before:bg-secondary before:content-[''] before:absolute before:top-0 before:left-[7px]">
              <p className="w-[150px] text-right transform -rotate-90 text-[#fc5b3f] mt-[64px] ml-[-67px]">
                <span className="bg-white pr-[5px] pl-[14px] uppercase font-semibold">
                  Info
                </span>
              </p>
            </div>
            <div>
              <article>
                <div className="font-semibold text-lg leading-6 tracking-wide lg:text-xl mb-6">
                  Shares &amp; ETFs
                </div>
                <div className="text-gray-600 leading-6">
                  Take a position on the performance of the worlds largest
                  companies, from Apple to Amazon and Rio Tinto to RBS
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-28 pt-6 md:pt-24 md:pb-16 bg-red-5 default_cursor_cs">
        <div className="flex flex-col md:flex-row justify-between default_cursor_cs">
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} className="w-16" />
            <div className="font-bold mt-3">Best CFD Broker</div>
            <div className=" text-sm">TradeON Summit 2020</div>
          </div>
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} className="w-16" />
            <div className="font-bold mt-3">Best Execution Broker</div>
            <div className=" text-sm">Forex EXPO Dubai 2020</div>
          </div>
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} className="w-16" />
            <div className="font-bold mt-3">Best Trading Platform</div>
            <div className=" text-sm">London Summit 2020</div>
          </div>
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} className="w-16" />
            <div className="font-bold mt-3">Best Broker Asia</div>
            <div className=" text-sm">iFX EXPO 2020</div>
          </div>
        </div>
      </section>

      <div className="mt-24 flex flex-col justify-center default_cursor_cs">
        <div className="text-center text-xl text-gray-800 pb-4 font-bold default_cursor_cs">
          Where to buy Cryptocurrencies
        </div>
        <div className="flex flex-col mx-auto md:flex-row md:w-8/12 justify-around items-center default_cursor_cs">
          <div className="mt-4 w-3/">
            <img src={cb} className="mx-auto default_cursor_cs" />
            <div className="text-center font-bold py-2">Coinbase</div>
          </div>
          <div className="mt-4">
            <img src={btc} className="mx-auto default_cursor_cs" />
            <div className="text-center font-bold py-2 default_cursor_cs" />
            bitcoin.com
          </div>
          <div className="mt-4">
            <img src={crypto} className="mx-auto default_cursor_cs" />
            <div className="text-center font-bold py-2">Crypto.com</div>
          </div>
        </div>
      </div>

      <section className="md:px-28 pb-12">
        <div class="font-semibold md:font-bold pt-8 pb- text-2xl mt-10 leading-4 tracking-wide lg:text-xl text-center mb-6 pl-6 default_cursor_cs">
          Payment methods
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-4">
          <img src={btc1} className="w-28 md:48" />
          <img src={mscard} className="w-28 md:48 my-4" />
          <img src={visa} className="w-28 md:48" />
          <img src={skrill} className="w-28 md:48 my-4" />
          <img src={paypal} className="w-28 md:48" />
          <img src={neteller} className="w-28 md:48 my-4" />
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homex;
