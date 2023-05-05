
import './App.css'

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import SingupPage from './Component/SingupPage'
import HomePage from './Component/HomePage'
import AboutPage from './Component/AboutPage';
import NavBar from './Component/NavBar';
import ProfileSettingPage from './Component/ProfileSettingPage';
import SettingPage from './Component/SettingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <NavBar/>
      


        <Routes>
          
        
          <Route path='/'element={<HomePage />} />
          <Route path='/AboutPage' element={<AboutPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/Signup' element={<SingupPage />} />
          <Route path='/ProfileSettingPage' elemets={<ProfileSettingPage />} />
          <Route path='/SettingPage' element={<SettingPage />} />
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
