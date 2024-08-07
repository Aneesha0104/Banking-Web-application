import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.jpeg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <nav className="navbar navbar-light  fixed-top">
      <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30"  className="d-inline-block align-top logo" alt="bankLogo" />
        TrustWave
      </a>
      <div className="d-flex align-items-right">
        <i class="bi bi-bell navbar-notifi-icon "></i>
        <i class ='bi bi-person navbar-user-icon'></i>
        <i className="bi bi-box-arrow-right navbar-logout-icon" onClick={handleLogout}></i>
      </div>
    </nav>
  );
}

export default Navbar;
