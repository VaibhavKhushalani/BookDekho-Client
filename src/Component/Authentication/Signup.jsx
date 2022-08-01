import React,{useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {FetchSignup} from "../Axios/apis"
const Signup = () => {
    const navigate =useNavigate();
    const [input,setInput] = useState({
      email:"",password:"",name:"",cpassword:""
    });
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (input.email && input.password&&input.name&&input.cpassword===input.password) {
        try {
          let formdata={name:input.name,password:input.password,email:input.email}
          const { data } = await FetchSignup(formdata);
          navigate("/")
         console.log(data)
         
        } catch (error) {
          const { response } = error;
          console.log(response?.data);
          alert(response?.data);
        }
      } else{
        alert("error in sign up fields")
      }
    };
  return (
    <div className="signin-main">
      <Form>
        <h1>Sign Up</h1>
        <Form.Group className="mb-3" value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3"value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          
        </Form.Group>
        <Form.Group className="mb-3" value={input.cpassword} onChange={(e)=>setInput({...input,cpassword:e.target.value})}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          
        </Form.Group>
        <span className="d-flex justify-content-center">
        <Button variant="success" type="button" onClick={handleSubmit} >
          Submit
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default Signup;
