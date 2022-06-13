import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const AddUser = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [salary, setSalary] = useState('')
  const [jobStartDate, setJobStartDate] = useState('')
  const { addUser } = useContext(GlobalContext);
  const history = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      lastName,
      email,
      salary,
      jobStartDate,
    }
    addUser(newUser);
    history.push('/home')
  }
  const onChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }
  const onLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  }
  const onEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }
  const onSalary =(e)=>{
    e.preventDefault(); 
    setSalary(e.target.value)
  }
  const onJobStartDate = (e) =>{
    e.preventDefault();
    setJobStartDate(e.target.value)
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter your name" required></Input>
        <Label>Last Name</Label>
        <Input type="text" value={lastName} onChange={onLastName} name="lastName" placeholder="Enter last nae" required></Input>
        <Label>Email</Label>
        <Input type="text" value={email} onChange={onEmail} name="email" placeholder="Enter email" required></Input>
        <Label>Salary</Label>
        <Input type="text" value={salary} onChange={onSalary} name="salary" placeholder="Enter salary" required></Input>
        <Label>Job Start Date</Label>
        <Input type="text" value={jobStartDate} onChange={onJobStartDate} name="jobStartDate" placeholder="Enter job start date" required></Input>

      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/home" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export default AddUser;
