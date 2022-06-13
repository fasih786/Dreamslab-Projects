import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddButton.css";

const Button = () => {
  const AddNavigate = useNavigate();
  const AddHandler = () => {
    return AddNavigate("/homepage");
  };
  const LogNavigate = useNavigate();
  const LogHandler = () => {
    localStorage.removeItem("newData");
    return LogNavigate("/");
  };
  return (
    <div>
      {/* id="logButton" */}
      <button className="btn btn-success" onClick={LogHandler}>
        LOG OUT
      </button>
      <h2 className="dashboard-text">WELCOME TO DASHBOARD</h2>
      <button id="addButton" className="fa fa-plus" onClick={AddHandler} />
    </div>
  );
};

export default Button;