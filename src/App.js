// import react, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Landing/Home";
import Homex from "./pages/landingx/Homex";
import Menu from "./components/Nav/Menu";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Deposit from "./pages/Dashboard/Deposit";
// import Profile from "./pages/Dashboard/Profile";
// import Withdrawal from "./pages/Dashboard/Withdrawal";
// import Wallet from "./pages/Dashboard/Wallet";
// import Signup from "./pages/Landing/Signup";
// import SignIn from "./pages/Landing/SignIn";
// import Collections from "./pages/Landing/Collections";
// import Admin from "./pages/Admin/";
// import { Suspense } from "react";
// import { Code, Instagram } from "react-content-loader";
// import MyLoader from "./loader";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div
      className="flex flex-col lg:flex-row relative right-0 bg-primjary h-screen overflow-y-scroll">
    
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Homex />} />
            {/* <Route path="/collections" element={<Collections />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/deposit" element={<Deposit />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="user/withdrawal" element={<Withdrawal />} />
            <Route path="/user/wallet" element={<Wallet />} />
            <Route path="/admin/*" element={<Admin />} /> */}
          </Routes>
    </div>
  );
};

export default App;
