import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserDetails, setToken } from "../../Redux/action";
import { useDispatch } from "react-redux";
// import logo from "../../images/whitebulllogo.png";
import bultpay3 from "../../images/bultpay3.png";
import Icon from "../../components/Nav/Icon";
import { BiHide, BiShowAlt } from "react-icons/bi";

const Loginx = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [error, setError] = useState("");
  // const [exists, setexists] = useState("");
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
  const clickShow = (e) => {
    e.preventDefault();
    setHidePassword(!hidePassword);
  };

  const login = (event) => {
    event.preventDefault();
    // console.log(`em ${email}   ${password}`);
    setMsg({});
    fetch("https://famous-turtleneck-elk.cyclic.app/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log('res', res);
        if (res.msg) {
          setError("incorrect login credentials");
          setTimeout(() => {
            setError("");
          }, 2000);
          return;
        }

        if (res.error) {
          setError("incorrect login credentials");
          setTimeout(() => {
            setError("");
          }, 2000);
          return;
        }

        const { token } = res;
        const { user } = res;

        if (token !== undefined) {
          if (user.role === "admin") {
            navigate("/admin/users", { replace: true });
            return;
          }
          dispatch(setToken(token));
          dispatch(setUserDetails(user));
          // window.location.assign('http://enefti-six.vercel.app/user/dashboard')
          // https://famous-turtleneck-elk.cyclic.app/login
          navigate("/user/dashboard", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col h-screen bg-[#26313f3a] shadow-md rounded  text-slate-700 items-center px-3 pt-3">
      <div className="lg:mx-auto w-full lg:w-10/12 px-3 lg:px-12">
        <div className="flex items-center justify-center">
          <Icon />
        </div>
      </div>
      <div className=" w-full mx-auto pt-2 md:pt-0 max-h-screen md:h-auto flex flex-col self-center items-center md:mt-6 mb-12">
        <div className="bg-white sm:max-w-sm w-full px-4 pb-4 md:pb-0 ">
          <div className="w-full rounded-lg py-0 lg:py-6 px-6 pt-3">
            <label className="block mt-3 text-lg lg:text-xl capitalize font-semibold pb-2">
              Login into your account
            </label>
            <p>Sign in using your email and password</p>
            <form method="#" action="#" className="mt-6">
              <div className="pb-3">
                <div className="text-left font-semibold pb-1 text-xs lg:text-sm">
                  Email Address <span className="text-red-600">*</span>
                </div>
                <input
                  placeholder="Enter your email"
                  className=" pl-4 mt-1 block bg-white w-full border border-slate-300 rounded shadow text-black  placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200"
                  onChange={onEmailChange}
                />
              </div>
              <div className="text-center text-red-400 text-sm">
                {msg.email}
              </div>
              <div className="relative mt-3">
                <div className="text-left font-semibold pb-1 text-xs lg:text-sm">
                  Password <span className="text-red-600">*</span>
                </div>
                <input
                  type={hidePassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className=" pl-4 mt-1 block bg-white w-full border border-slate-300 rounded shadow text-black  placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200"
                  onChange={onPasswordChange}
                />
                <button
                  onClick={(e) => clickShow(e)}
                  className="absolute right-2 bottom-2 focus:text-gray-500 text-sm font-semibold"
                >
                  {hidePassword ? (
                    <BiHide size={20} className="text-gray-600" />
                  ) : (
                    <BiShowAlt size={20} className="text-gray-600" />
                  )}
                </button>
              </div>
              <div className="mt-2"></div>
              <Link
                className="text-xs text-red-600 cursor mt-4 font-semibold tracking-wide"
                to="/public/forgot-password"
              >
                Forgot password?
              </Link>
              <div className="text-center text-red-600 text-sm">
                {msg.password}
              </div>
              <div className="text-center text-red-600 text-sm">{error}</div>
              <button
                className="font-semibold bg-blue-600 rounded text-white capitalize text-sm w-full  mt-7 btn-sm h-9 hover:bg-blue-500 focus:bg-blue-600"
                onClick={login}
              >
                Login
              </button>
              <div className="flex mt-4 justify-center w-full text-sm">
                <div className=" text-sm">
                  Don't have an account?
                  <Link
                    className="ml-2 text-blue-600 font-semibold focus:text-red-500"
                    to="/public/register"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginx;
