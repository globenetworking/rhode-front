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


const Hero = () => {
  return (
    <div>
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

      <section className="">
        <div className="py-4 bg-black text-white font-semibold flex flex-col lg:flex-row justify-center lg:justify-around lg:px-28 P mt-6 px-3 default_cursor_cs">
          <div className="flex py-3 items-center">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="p-2 rounded-md box-content border border-white roundcded text-white mr-4"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
              <line x1="12" y1="9" x2="12" y2="12"></line>
              <line x1="12" y1="15" x2="12.01" y2="15"></line>
            </svg>
            <span className="text-sm">8 years of Excellence</span>
          </div>
          <div className="flex py-3 items-center default_cursor_cs">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="p-2 rounded-md box-content border border-white roundcded text-white mr-4 default_cursor_cs"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"></path>
            </svg>
            <span className="text-sm">4+ Global Awards</span>
          </div>
          <div className="flex py-3 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="p-2 rounded-md box-content border border-white roundcded text-white mr-4"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 00-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63-6.78 5.81-6.78 5.81-12.33 4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 00.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 00-3.89-.87 322.35 322.35 0 00-56 25.45A338 338 0 0033.35 92a3.83 3.83 0 00-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72 31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 003.75-1.26A337.73 337.73 0 00454.35 430a322.7 322.7 0 0025.45-56 3.9 3.9 0 00-.86-3.86z"></path>
            </svg>
            <span className="text-sm">24/7 Customer Support</span>
          </div>
        </div>

        <footer
          className="bg-[#191b1c] text-white default_cursor_cs"
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" class="sr-only">
            Footer
          </h2>
          <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20 default_cursor_cs">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8 default_cursor_cs">
              <div className="space-y-8 xl:col-span-1">
                <span className="flex items-center w-28 lg:w-36 rounded-md bg-black text-secondary justify-center mb-6">
                  <img
                    src={brax}
                    className="w-24 self-center text-xl font-semibold whitespace-nowrap text-white"
                  />
                </span>
                <p className="w-1/2 mt-2 text-sm text-whtie">
                  We have licenses provide services Worldwide.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2 text-white">
                <div className="grid grid-cols-2 md:gap-8">
                  <div className="default_cursor_cs">
                    <h3 className="text-xs font-semibold tracking-wider text-primary-600 uppercase text-white default_cursor_cs">
                      Solutions
                    </h3>
                    <ul
                      role="list"
                      className="mt-4 space-y-4 default_cursor_cs"
                    >
                      <li>
                        <a
                          className="text-sm font-normal text-white hover:text-white"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm font-normal text-white hover:text-white"
                          href="/public/markets"
                        >
                          Market
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm font-normal text-white hover:text-white"
                          href="/"
                        >
                          Commerce
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm font-normal text-white hover:text-white"
                          href="/"
                        >
                          Insights
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="md:mt-0">
                    <h3 className="text-xs font-semibold tracking-wider text-primary-600 uppercase text-white">
                      Support
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li>
                        <a
                          className="text-sm font-normal text-white hover:text-white"
                          href="/public/about"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm font-normal text-white hover:text-white"
                          href="/"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm font-normal text-white hover:text-white"
                          href="/public/contact"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm font-normal text-white hover:text-white"
                        >
                          {" "}
                          API Status{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:justify-end md:grid md:grid-cols-1">
                  <div className="w-full mt-12 md:mt-0 default_cursor_cs">
                    <div className="mt-8 lg:justify-end xl:mt-0">
                      <h3 className="text-xs font-semibold tracking-wider text-primary-600 uppercase text-white">
                        Subscribe to our newsletter
                      </h3>
                      <p className="mt-4 text-sm text-white lg:ml-auto">
                        The latest news, articles, and resources, sent to your
                        inbox weekly.
                      </p>
                      <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                        <form
                          action=""
                          method="post"
                          id="revue-form"
                          name="revue-form"
                          target="_blank"
                          className="p-1 mt-4 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex"
                        >
                          <div className="flex-1 min-w-0 revue-form-group">
                            <label for="member_email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="cta-email"
                              type="email"
                              className="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                            <button
                              type="submit"
                              value="Subscribe"
                              name="member[subscribe]"
                              id="member_submit"
                              className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                            >
                              Notify me
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20 default_cursor_cs">
            <div className="mt-8 md:mt-0 md:order-1 text-center">
              <span className="mt-2 text-sm font-light text-white">
                Copyright ©
                <a
                  href="https://wickedlabs.dev"
                  className="mx-2 text-blue-500 hover:text-white"
                  rel="noopener noreferrer"
                >
                  braxtrade.net
                </a>
                . Since 2014
              </span>
            </div>
          </div>
        </footer>
      </section>
{/* 
      <div aria-live="polite" class="crisp-client"><div class="cc-cbqy"><div class="cc-2xrx"><style type="text/css">.crisp-client *:focus-visible {
  outline-color: #004AB5 !important;
}

.crisp-client .cc-1m7s .cc-43er {
  color: #FFFFFF !important;
}

.crisp-client .cc-1m7s .cc-1dea {
  color: #1972F5 !important;
}

.crisp-client .cc-1m7s .cc-12kx {
  background-color: #FFFFFF !important;
}

.crisp-client .cc-1m7s .cc-o3lf {
  background-color: #004AB5 !important;
}

.crisp-client .cc-1m7s .cc-1jlu {
  background-color: #055EE1 !important;
}

.crisp-client .cc-1m7s .cc-qvio {
  background-color: #1972F5 !important;
}

.crisp-client .cc-1m7s .cc-qvio *:focus-visible {
  outline-color: #F0F2F5 !important;
}

.crisp-client .cc-1m7s .cc-918l {
  background-color: #EFF5FE !important;
}

.crisp-client .cc-1m7s .cc-1gvp {
  background-color: #F0F2F5 !important;
}

.crisp-client .cc-1m7s .cc-1idk {
  border-color: #FFFFFF !important;
}

.crisp-client .cc-1m7s .cc-1yqf,
.crisp-client .cc-1m7s .cc-16s6:hover {
  border-color: #1972F5 !important;
}

.crisp-client .cc-1m7s .cc-1v5g {
  border-color: rgba(25, 114, 245, 0.2) !important;
}

.crisp-client .cc-1m7s .cc-101z {
  border-bottom-color: #1972F5 !important;
}

.crisp-client .cc-1m7s .cc-1xhq::placeholder {
  color: #92A9C1 !important;
}

.crisp-client .cc-1m7s .cc-fpp2::placeholder {
  color: #92A9C1 !important;
}

.crisp-client .cc-1m7s .cc-xl8d,
.crisp-client .cc-1m7s .cc-xl8d:active,
.crisp-client .cc-1m7s .cc-12vm:hover .cc-988o,
.crisp-client .cc-1m7s .cc-12vm .cc-988o:active {
  background: #004AB5 !important;
}

.crisp-client .cc-1m7s .cc-sywj,
.crisp-client .cc-1m7s .cc-1gkp:hover,
.crisp-client .cc-1m7s .cc-17qg[data-active="true"] .cc-8tya {
  background: #0057D7 !important;
}

.crisp-client .cc-1m7s .cc-xl8d:hover,
.crisp-client .cc-1m7s .cc-sywj:hover,
.crisp-client .cc-1m7s .cc-1gkp:active {
  background: #0051C8 !important;
}

.crisp-client .cc-1m7s .cc-sywj:active {
  background: #004AB5 !important;
}

.crisp-client .cc-1m7s .cc-1eud:hover .cc-1wyd {
  background: #0057D7 !important;
}

.crisp-client .cc-1m7s .cc-1eud .cc-1wyd:active {
  background: #0051C8 !important;
}

.crisp-client .cc-1m7s .cc-n25y,
.crisp-client .cc-1m7s .cc-1oot:hover .cc-1rul,
.crisp-client .cc-1m7s .cc-1oot .cc-1rul:active {
  background: #1972F5 !important;
}

.crisp-client .cc-1m7s .cc-n25y:hover {
  background: #055EE1 !important;
}

.crisp-client .cc-1m7s .cc-n25y:active {
  background: #0057D7 !important;
}

.crisp-client .cc-1m7s .cc-1opo::selection,
.crisp-client .cc-1m7s .cc-1opo *::selection {
  color: #1c293b !important;
  background-color: #E2EEFF !important;
}</style></div><div class="cc-1q75"><style type="text/css">.crisp-client .cc-1m7s {
  z-index: 1000000;
}</style></div></div><div id="crisp-chatbox" lang="en" dir="ltr" translate="no" tabindex="-1" class="cc-1m7s" data-hidden="false" data-force-show="false" data-availability="away" data-lock-maximized="false" data-last-operator-face="false" data-ongoing-operator-face="false" data-availability-tooltip="false" data-hide-vacation="false" data-blocked="false" data-mobile-view="false" data-full-view="false" data-small-view="false" data-large-view="true" data-has-local-messages="false" data-was-availability-online="false" data-is-activity-ongoing="false" data-hide-on-away="false" data-hide-on-mobile="false" data-position-reverse="false"><div class="cc-iv0q cc-1opo"><a data-maximized="false" data-is-failure="false" class="cc-dc5e" tabindex="0" role="button" aria-label="Open chat" data-pane-animate-entrance="false"><span class="cc-ep33"><!--v-if--></span><span class="cc-xkyq cc-qvio"><span data-id="chat_closed" data-is-ongoing="false" class="cc-laa2"><span class="cc-m1n3"><!--v-if--></span></span></span></a></div></div></div> */}
    </div>
  );
};

export default Hero;
