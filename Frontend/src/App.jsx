import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Order from "./Components/Order/Order";
import Funds from "./Pages/Funds/Funds";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

function App() {
  // react router dom
  const value = useLocation();

  console.log("value", value);
  const path = location.pathname;

  return (
    <>
      {path === "/" ? null : <NavBar />}

      <Routes>
        {/* https://kite.zerodha.com/ default page // */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/Funds" element={<Funds />} />

        <Route path="/orders" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;

// React router dom
// & true  & true.   == true

// | false | true  =. true
//  | true | false = true

// PSUDOCODE

// userName value check tick

// password value tick

// Login tick

// userName password

// shiva mrunal

// if(shiva mari mrunal ){
//   naviaget cheyu
// } avakapothe alert chupista {
//   alert("no user found or invalid crednetials")
// }

// if(userName ==="shiva" && password==="mrunal" ){
//   navigate("/dashboard")
// } else{
//   alert("invalid credentials")
// }

// Conditionals

// if else

// if(true){
//   code exedute here
// } else{
//   alert("no data found")
// } else if(UserName==="shiva" && password ==="Priya"){
//   navigate("chatBox")
// }

// else if

// Ternary.  True :true:false

// path ------ Address

// element --- address lo vunna data

// index.html

// Main.jsx

// App.jsx
