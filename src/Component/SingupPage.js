import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
const SingupPage = () => {
  const [ name ,setName]=useState("")
  const [ email , setEmail] = useState()
  const [ password ,setPassword] =useState()
  const navigate=useNavigate();


  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handelPassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleSubmit= (e)=>{
    e.preventDefault()
   axios
        .post("https://reqres.in/api/register", {
          email:email,
          password:password,
        })
        .then((res) => {
          console.log(res.data);
          const token="QpwL5tke4Pnpja7X4";
          localStorage.setItem('token',token)
          navigate("/LoginPage")
        })
        .catch((err) => {
          console.log(err);
        });
    
    
  };
  
  return (
    <div>
      <h1> sign up pge</h1>
      <form  onClick={handleSubmit}>
      name:
      <input  class="rounded-lg " type='text' value={name} onChange={handleName}/><br/>
      Email:
      <input  class="rounded-lg " type='email' value={email} onChange={handleEmail}/><br/>
      password:
      <input  class="rounded-lg " type='paswword' value ={password} onChange={handelPassword}/><br/>
      <button  class="bg-cyan-500 hover:bg-cyan-600  rounded-full" type="submit"> submit</button>
      </form>
      </div>
  )
}
export default SingupPage;