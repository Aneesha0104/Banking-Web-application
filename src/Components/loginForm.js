import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  // Regular expression to validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to validate password
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  // Validate email and password whenever they change
  useEffect(() => {
    setIsEmailValid(validateEmail(email));
    setIsPasswordValid(validatePassword(password));
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isEmailValid) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid) {
      alert('Please enter a valid password.');
      return;
    }

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      navigate('/user'); // Navigate to a different route upon successful login
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleSignUp = () => {
    navigate('/signUpPage');
  };

  return (
    <div className='d-flex justify-content-center mb-2'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <a href="#" className="anchor-link">Forgot password?</a>
          <div className="btn-container">
            <button 
              className="btn-primary" 
              type="submit"
              //disabled={!isEmailValid || !isPasswordValid} // Disable if email or password is invalid
            >
              Login
            </button>
            <button onClick={handleSignUp} className="btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
