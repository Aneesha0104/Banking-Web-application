
import React from 'react';
import {LoginForm ,SignUp,Home,UserDashboard,TransactionPage} from './Components/easyRoute'
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 

const AppRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/signUpPage' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/user'element={<UserDashboard/>}/>
        <Route path='/TransactionPage' element={<TransactionPage/>}/>
      </Routes>
  );
};

export default AppRoutes;
