import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

//This code belongs to Sourabh Kothari//
const LoginScreen = () => {
  const [customerName, setUser] = useState();
  const [customerPassword, setPassword] = useState();
  const navigate = useNavigate();

  const HandlleUserName = (event) => {
    setUser(event.target.value);
  };

  const HandlePassword = (event) => {
    setPassword(event.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    if (customerName === "Admin" && customerPassword === "Password") {
      console.log(customerName + customerPassword);
      navigate("/FindRecipe");
    } else {
      alert("customer Name Or Password should  not Match");
    }
  };

  return (
    <div className="login">
      <h1>Welcome Again !!</h1>
      <form>
        <input type="text" placeholder="customerName" onChange={HandlleUserName} />
        <input
          type="password"
          placeholder="customerPassword"
          onChange={HandlePassword}
        />
        <button type="button" onClick={onsubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
