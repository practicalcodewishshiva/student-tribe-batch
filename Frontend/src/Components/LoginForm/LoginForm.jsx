// import { Children } from "react"
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../LoginForm/LoginForm.css'


function LoginForm() {
  const [UserName, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState("");

  function handleUserName(event) {
    console.log("hello", event.target.value);
    updateUserName(event.target.value);
  }

  function handlePassword(event) {
    console.log("passweord", event.target.value);
    updatePassword(event.target.value);
  }

  function handleLogin() {
    if (UserName === "shiva" && password === "mrunal") {
      alert("user Found");
      navigate("/dashboard");
    } else {
      alert("no user Found");
    }
  }
  return (
    <div className="flex-container">
      <div className="login-form-container">
        <div>Login Form {userCredentials.message}</div>
        <label>UserName</label>
        <input type="text" onChange={handleUserName} />
        <label>Password</label>
        <input type="password" value={password} onChange={handlePassword} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
// LoginForm()
// js global contenxt creation execution

// type :"div",
// props:
// Children:["hello", "new data", ]
