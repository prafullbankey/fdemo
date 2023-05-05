import axios from 'axios'
import React,{useState}from 'react'

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email , setEmail]=useState()
  const [ password , setPassword]=useState()
  const navigate=useNavigate();

  
  const handleEmail=(e)=>{
    setEmail(e.target.value)  
  }
  const handelPassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleLogin=(e)=>{

    e.preventDefault()
    axios
         .post("https://reqres.in/api/login", {
           email:email,
           password:password,
         })
         .then((res) => {
           console.log(res.data);
           const token1="QpwL5tke4Pnpja7X4";
       const token2=localStorage.getItem('token')
       if(token1===token2)
       {
        alert("SignIn is Successfully!!")
       navigate("/HomePage")
       }
       else
       {
          alert("Invalid email id and password");
       }
         })
         .catch((err) => {
           console.log(err);
         });
     

  }
  return (
    <div>
      <h1> login form</h1>
      <form onClick={handleLogin}>
        Email :
      <input  class="rounded-lg " type='email' value={email} onChange={handleEmail}/> <br/>
      password :
      <input  class="rounded-lg " type='text' value={password} onChange={handelPassword}/> <br/>
      <button class="bg-cyan-500 hover:bg-cyan-600 rounded-full "  type='submit'>login</button>
      </form>
    </div>
  )
}
export default LoginPage