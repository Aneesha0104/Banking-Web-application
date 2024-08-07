
import React from 'react';
import LoginForm from './Components/loginForm';
import SignUp from './Components/signUp';
import Home from './Components/home'; 
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/signUpPage' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
