import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    const json = JSON.stringify(user);
    // console.log(json);
    localStorage.setItem("newData", json);
    const data1 = localStorage.getItem("newData");
    // console.log(data1);
    const result1 = JSON.parse(data1);
    // console.log(result1);
    const result2 = {
      email: "admin@test.com",
      password: "admin",
    };
    // console.log(result2);
    if (result1.email === "" && result1.password === "") {
      return toast("Please insert an Email & Password");
    } else if (
      result1.email !== result2.email &&
      result1.password !== result2.password
    ) {
      return toast("Email & Password is not matched");
    } else if (result1.email === "") {
      return toast("Please insert an Email");
    } else if (result1.password === "") {
      return toast("Please insert an Password");
    } else if (result1.email !== result2.email) {
      return toast("Email is not matched");
    } else if (result1.password !== result2.password) {
      return toast("Password is not matched");
    } else if (
      result1.email === result2.email &&
      result1.password === result2.password
    ) {
      return navigate("/addButton");
    } else {
      return toast("User does not exist: Please SignUp");
    }
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("newData"));
    if (data.email !== "" || data.password !== "") {
      return navigate("/addButton");
    } else {
      return navigate("/");
    }
  }, []);

  return (
    <form className="login-form">
      <div>
        <ToastContainer />
        <div id="login-h2">
          <h2 className="display-4">Login Form</h2>
        </div>
        <div id="email">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Email"
            id="inputData"
          />
        </div>
        <div id="password">
          <input
            type="password"
            onChange={passwordChange}
            placeholder="Password"
            id="passwordData"
          />
        </div>
        <div>
          <button id="button" onClick={clickHandler} type="button">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
