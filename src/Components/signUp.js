import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-container">
        <form>
          <h1 className="text-center mb-4">Sign Up</h1>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" className="form-control" id="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="Createpassword">Create Password:</label>
            <input type="password" className="form-control" id="Createpassword" />
          </div>
          <div className="form-group">
            <label htmlFor="ConfirmPassword">Re-Enter Password:</label>
            <input type="password" className="form-control" id="ConfirmPassword" />
          </div>
          <a href="/" className="anchor-link">
            Already have an account?
          </a>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
