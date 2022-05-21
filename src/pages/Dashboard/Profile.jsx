import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiCopyAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import DashboardHeader from '../../components/DashboardHeader';

const Profile = () => {
  const user = useSelector(state => state.auth.user_details)
  let {email, name} = user
  name = name.split(' ')
  const first = name[0]
  const last = name[1]
  console.log('state',user)
  return (
    <div className="lg:px-16 md:px-8 w-full pt-0 lg:w-7/12 lg:pt-12 lg:ml-16 px-4">
      <DashboardHeader />

      <div className="my-8 flex justify-between">
        <h1 className="text-2xl font-bold pb-3">Profile</h1>
        <div class="text-sm breadcrumbs">
          <ul>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                User
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section>
      {/* <!-- component --> */}
      <div class="w-full lg:w-11/12 space-y-8 p-10 rounded-xl shadow-lg z-10 bg-accent">
	<div class="grid  gap-8 grid-cols-1">
	<div class="flex flex-col ">
			<div class="flex flex-col sm:flex-row items-center">
				<h2 class="font-semibold text-lg mr-auto lg:text-xl text-white">Edit your details here</h2>
				<div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
			</div>
			<div class="mt-5">
				<div class="form">
						<div class="md:flex flex-row md:space-x-4 w-full text-base">
            <div class="mb-3 space-y-2 w-full text-base">
                    <label class=" font-semibold text-gray-100 py-2 lg:text-lg">
                      Email
                    </label>
                    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div class="flex">
                        <span class="flex  leading-normal rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-gray-400 justify-center items-center  rounded-lg text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="bg-primary flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder={email}
                        disabled
                      />
                    </div>
                  </div>
							<div class="mb-3 space-y-2 w-full text-base">
								<label class="font-semibold text-gray-100 py-2 lg:text-lg">First Name <abbr title="required">*</abbr></label>
								<input placeholder={first} class="bg-primary appearance-none block w-full bg-grey-lighter text-grey-darker  rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name"/>
								<p class="text-red text-base hidden">Please fill out this field.</p>
							</div>
							<div class="mb-3 space-y-2 w-full text-base">
								<label class="font-semibold text-gray-100 py-2 lg:text-lg">Last Name <abbr title="required">*</abbr></label>
								<input placeholder={''} class="bg-primary appearance-none block w-full bg-grey-lighter text-grey-darker  rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name"/>
								<p class="text-red text-base hidden">Please fill out this field.</p>
							</div>
						</div>
						<div class="mb-3 space-y-2 w-full text-base">
							<label class=" font-semibold text-gray-100 py-2 lg:text-lg">Phone number</label>
							<div class="flex flex-wrap items-stretch w-full mb-4 relative">
								<div class="flex">
									<span class="flex items-center leading-normal rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-gray-400 justify-center text-xl rounded-lg text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                   </span>
								</div>
								<input type="text" class="bg-primary flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder=""/>
                  </div>

                  <div class="mb-3 space-y-2 w-full text-base">
                    <label class=" font-semibold text-gray-100 py-2 lg:text-lg">
                      Btc address
                    </label>
                    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div class="flex">
                        <span class="flex  leading-normal rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-gray-400 justify-center items-center  rounded-lg text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="bg-primary flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder=""
                      />
                    </div>
                  </div>

                  

                  <p class="text-base text-red-500 text-right my-3">
                    Required fields are marked with an asterisk{' '}
                    <abbr title="Required field">*</abbr>
                  </p>
                  <div class="mt-8 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button class="mb-4 md:mb-0 bg-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-100 rounded-full hover:shadow-lg hover:bg-accent">
                      {' '}
                      Cancel{' '}
                    </button>
                    <button class="mb-2 md:mb-0 mt-4 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
		</div>
      </section>
    </div>
  );
};

export default Profile;
