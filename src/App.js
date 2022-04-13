import react, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Login from "./Pages/Landing/Login";
// import User from "./Pages/User";
import Home from "./pages/Landing/Home";
import Signup from "./pages/Landing/Signup";
import SignIn from "./pages/Landing/SignIn";
import BottomMenu from "./components/Nav/bottomMenu";
// import About from "./Pages/Landing/About";
// import Contact from "./Pages/Landing/Contact";
// import Owner from "./Pages/Owner";
// import Faqs from "./Pages/Landing/Faqs";
// import Terms from "./Pages/Landing/Terms";


const App = () => {
  return (
    <div className="flex flex-col lg:flex-row relative bg-primary h-screen overflow-scroll" data-theme="myTheme">
       <BottomMenu/>
       <div className="hidden lg:block w-20 mb-24"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      
    </div>
  );
};

export default App;
