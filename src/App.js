
import React from 'react';
import LoginForm from './Components/loginForm';
import SignUp from './Components/signUp';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/signUpPage' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
};

export default App;
