import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  return (
    <div className="form-container d-flex justify-content-center align-items-center">
      <div className="signUpForm">
        <form>
          <h1 className="text-center">Sign Up</h1>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="Createpassword">Create Password:</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="ConfirmPassword">Re-Enter Password:</label>
            <input type="password" className="form-control" />
          </div>
          <a href="/" className="anchor-link">Already have an account?</a>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
