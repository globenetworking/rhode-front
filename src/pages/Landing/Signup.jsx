import React, { useState } from "react";
import { Link  } from "react-router-dom";
import { GiAngelWings } from 'react-icons/gi';

const Signup =  () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exists, setexists] = useState("");
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    exists: "",
  });
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSignup = (event) => {
      event.preventDefault();
  };

  const inputStyle = " pl-4 mt-1 block w-full border-none bg-primary placeholder-white text-sm h-11 focus:ring-0"



    return (<div className="flex flex-col items-center h-full justify-center text-white bg-reed pt-6 lg:pt-12 text-center w-full mb-6">
    <div className="mx-auto w-10/12 lg:w-10/12  px-6 lg:px-12">
    <div class="flex items-center text-secondary justify-center ">
      <div className=""><GiAngelWings size={42}  className="mx-3 "/></div>
      <span class="uppercase text-lg font-bold">CoolS</span>
     </div>
      <div className=" w-full mx-auto pt-6 md:pt-0 max-h-screen  md:h-auto flex flex-col self-center items-center md:mt-6 mb-12">
        <div className="sm:max-w-sm w-full">
          <div className="w-full rounded-lg py-0 lg:py-20 px-6 pt-4 md:pt-12 md:pt-6 bg-accent text-white shadow-xl">
            <label
              for=""
              className="block mt-3 text-base lg:text-xl uppercase font-bold -900 text-center"
            >
              Sign up
            </label>
            <form method="#" action="#" className="mt-6">
            <div className="pb-3">
                <div className="text-left font-semibold pb-1 text-xs lg:text-base">Fullname</div>
                <input
                  placeholder="Jon Doe"
                  className={inputStyle}                />
              </div>
              <div className="pb-3">
                <div className="text-left font-semibold pb-1 text-xs lg:text-base">Email</div>
                <input
                  placeholder="jon@doe.com"
                  className={inputStyle}                />
              </div>
              <div className="text-center text-red-600 text-sm">
                {msg.id}
              </div>

              <div className="mt-3">
              <div className="text-left font-semibold pb-1 text-xs lg:text-base">Password</div>
                  
                <input
                  type="password"
                  onChange={onPasswordChange}
                  placeholder="password"
                  className={inputStyle}                />
              </div>
              <div className="text-center text-red-600 text-sm">
                {msg.password}
              </div>
              {/* <div className="text-center text-red-600 text-sm">
                {error}
              </div> */}

              <div className="mt-7 flex">
                <label
                  for="remember_me"
                  className="inline-flex  w-full cursor-pointer "
                >
                  <input
                    id="certify"
                    type="checkbox"
                    className="rounded mt-1 border-gray-300 text-secondary shadow-sm focus:border-secondary focus:ring focus:secondary focus:ring-opacity-50"
                    name="certify"
                  />
                  <span className="ml-2 text-xs font-semibold lg:font-bold">
                  I certify that I am 18 years of age or older
                  </span>
                </label>

               
              </div>

              <div className="mt-7">
                <span className="btn btn-secondary lg:btn-wide btn-sm h-9">Sign </span>
              </div>
              {/* {error ? <div>{error}</div> : null} */}
              <div className="flex mt-4 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block  text-base lg:text-lg font-extrabold w-full uppercase">
                  or
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-4 justify-center w-full">

                <div className="font-semibold text-sm lg:text-base mb-6">Have an account? <Link to='/sign-in' className="ml-2 text-secondary font-bold">Sign in</Link></div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    {/* form starts here; */}
  </div>)
}

export default Signup