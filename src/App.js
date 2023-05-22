
import './App.css'

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/ SignupPage';
import HomePage from './Component/HomePage'
import AboutPage from './Component/AboutPage';
import NavBar from './Component/NavBar';
import ProfileSettingPage from './Component/ProfileSettingPage';
import SettingPage from './Component/SettingPage';
import  ContactForm from './Component/ ContactForm';
import LogOutPage from './Component/LogOutPage'
import DashboardPage from './Component/DashboardPage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <NavBar/>
      


        <Routes>
          
        
          <Route path='/'element={<HomePage />} />
          <Route path='/AboutPage' element={<AboutPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/Signup' element={< SignupPage/>} />
          <Route path='/ProfileSettingPage' elemets={<ProfileSettingPage />} />
          <Route path='/SettingPage' element={<SettingPage />} />
          <Route path='/ContactForm' element ={<ContactForm/>}/>
          <Route path='/LogOutPage' element ={<LogOutPage/>}/>
          <Route path='/DashboardPage' element={<DashboardPage/>}/>
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
