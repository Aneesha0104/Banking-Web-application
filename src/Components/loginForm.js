import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  const handleSignUp = () => {
    navigate('/signUpPage');
  };
  const handleLogin = () => {
    navigate('/user');
  }
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
          <button onClick={handleLogin} className="btn-primary" type="submit">Login</button>
          <button onClick={handleSignUp} className="btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
