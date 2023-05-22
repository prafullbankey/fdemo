import React from 'react'

import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link class="active" to="/">Home</Link></li>
        <li><Link to="/AboutPage">about</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/LoginPage">login</Link></li>
       <li> <Link to="/ContactForm"> ContactPage</Link> </li>
       <li> <Link to='/DashboardPage'></Link></li>
        
        <li>
          <div>

          <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <Link to="/profileSettingPage">ProfileSettingPage</Link>
      <Link to="/settingPage">SettingPage</Link> 
      <Link to="/LogOutPage">Logout</Link>
   
     
    </div>
  </div> 
          </div>
       
        </li>
        <div>
         
        </div>

      </ul>
         
      

    </div>
  )
}
export default NavBar