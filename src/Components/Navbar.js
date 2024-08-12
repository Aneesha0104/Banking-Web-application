import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.jpeg';
import { useNavigate } from 'react-router-dom';
import Tooltip from './tooltip'

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
      <Tooltip text="Notification">
        <i class="bi bi-bell navbar-notifi-icon" ></i>
      </Tooltip>
      <Tooltip text='My Profile'>
        <i class ='bi bi-person navbar-user-icon'></i>
      </Tooltip>
      <Tooltip text='Logout'>                           
        <i className="bi bi-box-arrow-right navbar-logout-icon" onClick={handleLogout}></i>
      </Tooltip>
      </div>
    </nav>
  );
}

export default Navbar;
