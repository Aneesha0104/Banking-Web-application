import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { validateEmail, validatePassword } from "./validation";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password.value)) {
      alert("Password must be at least 8 characters long. Must contain an uppercase letter, special character, and numbers.");
      return;
    }

    if (password.value !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Store the email and password in local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password.value);

    alert("Sign up successful!");
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center mb-4">Sign Up</h1>

          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              placeholder="Enter the email linked to bank account"
              className={`form-control ${isSubmitted && !validateEmail(email) ? "is-invalid" : ""}`}
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isSubmitted && !validateEmail(email) && (
              <div className="invalid-feedback">Please enter a valid email address.</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="Createpassword">Create Password:</label>
            <input
              type="password"
              placeholder="Password must be at least 8 characters long"
              className={`form-control ${isSubmitted && !validatePassword(password.value) ? "is-invalid" : ""}`}
              id="Createpassword"
              value={password.value}
              onChange={(e) => setPassword({ ...password, value: e.target.value })}
              onBlur={() => setPassword({ ...password, isTouched: true })}
            />
            {isSubmitted && !validatePassword(password.value) && (
              <div className="invalid-feedback">Password must be at least 8 characters long.</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="ConfirmPassword">Re-Enter Password:</label>
            <input
              type="password"
              className={`form-control ${isSubmitted && password.value !== confirmPassword ? "is-invalid" : ""}`}
              id="ConfirmPassword"
              placeholder="Re-enter the created password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {isSubmitted && password.value !== confirmPassword && (
              <div className="invalid-feedback">Passwords do not match.</div>
            )}
          </div>

          <a href="/" className="anchor-link">
            Already have an account?
          </a>

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
