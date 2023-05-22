import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
 const LogOutPage = () => {
    const navigate = useNavigate()

    // useEffect( () =>
    // {
    //     if(!localStorage.getItem("token")){
    //         navigate("/LoginPage")
    //     }

    // },[navigate]) 
    const handleLogout=()=>{
 //localStorage.clear();
 navigate("/LoginPage")

    }

  return (
    <div>
        <button type='submit' onClick={handleLogout()}>
           
         Logout</button>
    </div>
  )
}
export default LogOutPage