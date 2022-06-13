import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [salary, setSalary] = useState("");
  //   const [jobStartDate, setJobStartDate] = useState("");
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    jobStartDate: "",
  });
  const {firstName, lastName, email, salary, jobStartDate} = user;

  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    console.log("condition running")
    navigate('/homepage')

  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD A USER</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your first name"
              name="firstName"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your Salary"
              name="salary"
              value={salary}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your Job Start Date"
              name="jobStartDate"
              value={jobStartDate}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={onSubmit}>ADD USER</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
