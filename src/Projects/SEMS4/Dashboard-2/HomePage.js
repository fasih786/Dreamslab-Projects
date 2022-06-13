import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import AddUser from "./users/Adduser";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };
  const navigate = useNavigate();
  const AddHandler = () => {
    return navigate("/addUser");
  };

  return (
    <div className="container">
      <button className="btn btn-primary ml-5" onClick={AddHandler}>
        ADD USER
      </button>
      <h1 id="h1">TODO LIST</h1>
      <table className="table">
        <thead>
          <tr className="bg-white">
            <th scope="col">#</th>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">SALARY</th>
            <th scope="col">JOB START DATE</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>
                <Link to="/home" className="btn btn-success m-2">
                  VIEW
                </Link>
                <Link to="/home" className="btn btn-warning m-2">
                  EDIT
                </Link>
                <Link to="/home" className="btn btn-danger m-2">
                  DELETE
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
