import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import LandingNav from '../../components/Nav/LandingNav';
import NftCard from '../../components/NftCard';
import Footer from '../../components/Footer';

import nftArr from './nfts';

import apes from '../../images/apes.jpg';
import nft7 from '../../images/nft7.jpg';
import nft8 from '../../images/nft8.jpg';
import nft9 from '../../images/nft9.jpg';

const grad = 'bg-gradient-to-r from-pink-300 via-secondary to-secondary';
const gradText = `${grad} text-black bg-clip-text stroke-transparent fill-black stroke-2 `;

const Home = () => {
  return (
    <div className="bg-primary text-white lg:px-24 h-screen">
      <div className="flex flex-col lg:flex-row py-2  justify-between items-center ">
        <span className="mb-3 text-xs lg:text-base">
          {' '}
          <Zoom cascade>Discover, find and buy extraordinary NFT with us.</Zoom>
        </span>
        <span
          className={`btn btn-xs loading max-w-md btn-secondary text-white py-0 min-h-min`}
        >
          BUY NFT
        </span>
      </div>
      <LandingNav />
      <div className="lg:flex lg:pt-0">
        <div className="px-2 md:w-6/12 ">
          {' '}
          <img src={apes} alt="apes" />
        </div>

        <div className="flex flex-col mt-16 px-4 lg:px-16 items-center">
          <span
            className={`text-4xl mb-6 lg:text-5xl  lg:leading-snug font-semibold`}
            style={{ WebkitTextStroke: '3px transparent' }}
          >
            Trade Crypto. Discover, Collect &{' '}
            <div className={`${gradText} `}> Buy NFTs</div>{' '}
          </span>
          <span>
            The Crypto Monkey is a high-quality collection of 100 unique monkeys
            on the NFT marketplace.
          </span>
          <Link
            className={`btn  max-w-md mt-6 self-start text-md mb-6 btn-secondary`}
            to="/collections"
          >
            Discover
          </Link>
        </div>
      </div>
      {/* section */}
      {/* section */}
      <div class="stats mt-12 shadow flex flex-col lg:flex-row py-1 bg-primary px-4 w- text-tcream">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value">25.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Page Views</div>
          <div class="stat-value text-secondary">2.6M</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat max-h-28">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?w=128&h=128"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Tasks done</div>
          <div class="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>

      {/* section */}
      <section class="text-white mt-6">
        <div class="container flex flex-col items-center px-2 py-8 mx-auto lg:px-6">
          <div>
            <div class="flex flex-wrap py-8 md:flex-nowrap">
              <div class="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
                <strong class="flex text-3xl font-thin leading-none text-left text-thin lg:text-4xl">
                  {' '}
                  10 <span class="text-sm">PPI </span>{' '}
                </strong>
                <span class="mt-1 text-xs font-normal leading-relaxed text-gray-700">
                  Right. Say that again. No, no, George,
                </span>
              </div>
              <div class="prose md:flex-grow prose-md">
                <p>
                  " Right. Say that again. No, no, George, look, it's just an
                  act, right? Okay, so 9:00 you're strolling through the parking
                  lot, you see us struggling in the car, you walk up, you open
                  the door and you say, your line, George. Stop it. We're gonna
                  take a little break but we'll be back in a while so, don't
                  nobody go no where."
                </p>
                <p>
                  " Right. Say that again. No, no, George, look, it's just an
                  act, right? Okay, so 9:00 you're strolling through the parking
                  lot, you see us struggling in the car, you walk up, you open
                  the door and you say, your line, George."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-white">
        <div class="container flex flex-col items-center px-2 py-8 mx-auto lg:px-6">
          <div>
            <div class="flex flex-wrap py-8 md:flex-nowrap">
              <div class="prose md:flex-grow prose-md lg:pr-12">
                <p>
                  " Right. Say that again. No, no, George, look, it's just an
                  act, right? Okay, so 9:00 you're strolling through the parking
                  lot, you see us struggling in the car, you walk up, you open
                  the door and you say, your line, George. Stop it. We're gonna
                  take a little break but we'll be back in a while so, don't
                  nobody go no where."
                </p>
                <p>
                  " Right. Say that again. No, no, George, look, it's just an
                  act, right? Okay, so 9:00 you're strolling through the parking
                  lot, you see us struggling in the car, you walk up, you open
                  the door and you say, your line, George."
                </p>
              </div>
              <div class="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
                <strong class="flex text-3xl font-thin leading-none text-left text-neutral-600 lg:text-4xl">
                  {' '}
                  1.0 <span class="text-sm">PPI </span>{' '}
                </strong>
                <span class="mt-1 text-xs font-normal leading-relaxed text-gray-700">
                  Right. Say that again. No, no, George
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section */}

      <div className="flex flex-col lg:justify-center items-center mt-10 pb-20 ">
        <div className="capitalize font-semibold text-xl md:text-2xl mb-6 mt-6 lg:text-4xl">
          Top Sellers
        </div>
        <div className="hidden  w-full md:grid grid-cols-1 lg:grid-cols-3 ">
          {nftArr.map(({ img, name, desc, price, days, author }) => (
            <NftCard
              img={img}
              name={name}
              desc={desc}
              price={price}
              days={days}
              author={author}
            />
          ))}
        </div>

        <div className="w-full md:hidden flex flex-col items-center ">
          {nftArr.slice(1).map(({ img, name, desc, price, days, author }) => (
            <NftCard
              img={img}
              name={name}
              desc={desc}
              price={price}
              days={days}
              author={author}
            />
          ))}
        </div>
      </div>

      {/* section */}
      <section class="text-gray-50 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-50">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
            <div class="flex mx-auto border-2 border-indigo-50 rounded overflow-hidden mt-6">
              <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                Daily
              </button>
              <button class="py-1 px-4 focus:outline-none striketh line-through">
                Annually
              </button>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  START
                </h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$38</span>
                  <span class="text-lg ml-1 font-normal text-gray-50">
                    10%/day
                  </span>
                </h1>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  50+ assets/products
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Fixed spreads
                </p>
                <p class="flex items-center text-gray-50 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Account manager
                </p>
                <button class="flex items-center mt-auto text-white bg-indigo-500 hover:bg-indigo-600  border-0 py-2 px-4 w-full focus:outline-none rounded">
                  Get Started
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-50 mt-3">
                  You can access your personal dashboard anytime, anywhere –
                  24/7.
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-indigo-50 flex flex-col relative overflow-hidden">
                <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  PRO
                </h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$38</span>
                  <span class="text-lg ml-1 font-normal text-gray-50">
                    20%/day
                  </span>
                </h1>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  50+ assets/products
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Fixed spreads
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Instant withdrawal
                </p>
                <p class="flex items-center text-gray-50 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Account manager
                </p>
                <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Get Started
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-50 mt-3">
                  You can access your personal dashboard anytime, anywhere –
                  24/7.
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  BUSINESS
                </h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$56</span>
                  <span class="text-lg ml-1 font-normal text-gray-50">
                    35%/day
                  </span>
                </h1>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  50+ assets/products
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Fixed spreads
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Instant withdrawal
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  50+ assets/products
                </p>
                <p class="flex items-center text-gray-50 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Account manager
                </p>
                <button class="flex items-center mt-auto text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-4 w-full focus:outline-none rounded">
                  Get Started
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-50 mt-3">
                  You can access your personal dashboard anytime, anywhere –
                  24/7.
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  SPECIAL
                </h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$72</span>
                  <span class="text-lg ml-1 font-normal text-gray-50">
                    75%/day
                  </span>
                </h1>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  50+ assets/products
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Fixed spreads
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Instant withdrawal
                </p>
                <p class="flex items-center text-gray-50 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  50+ assets/products
                </p>
                <p class="flex items-center text-gray-50 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Account manager
                </p>
                <button class="flex items-center mt-auto text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-4 w-full focus:outline-none rounded">
                  Get Started
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-50 mt-3">
                  You can access your personal dashboard anytime, anywhere –
                  24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section */}
      <section class="text-gray-50 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div class="flex flex-col justify-around lg:flex-row -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={nft9}
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 class="text-gray-50 mb-3">Cool cat #2345</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={nft8}
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Atticus Finch
                  </h2>
                  <h3 class="text-gray-50 mb-3">Cool cat #3589</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={nft9}
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Henry Letham
                  </h2>
                  <h3 class="text-gray-50 mb-3">Cool cat #2445</h3>
                  <p class="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-50">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section */}
      <Footer />
    </div>
  );
};

export default Home;
