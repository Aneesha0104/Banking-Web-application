
import React from 'react';
import LoginForm from './Components/loginForm';
import SignUp from './Components/signUp';
import home from './Components/home';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/signUpPage' element={<SignUp/>}/>
        <Route path='/home' element={<home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
