import React, { useState } from "react";
import "./SignUp.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  function handleSignUpClick() {
    setIsSignUpActive(true);
  }

  function handleSignInClick() {
    setIsSignUpActive(false);
  }

  return (
    <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="##" className="social">
              <FaFacebookF fontSize={"large"} color="#3b5998" />
            </a>
            <a href="##" className="social">
              {/* <FcGoogle fontSize={"large"} /> */}
            </a>
            <a href="##" className="social">
              <FaLinkedinIn fontSize={"large"} color="#0A66C2" />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="##" className="social">
              <FaFacebookF fontSize={"large"} color="#3b5998" />
            </a>
            <a href="##" className="social">
              {/* <FcGoogle fontSize={"large"} /> */}
            </a>
            <a href="##" className="social">
              <FaLinkedinIn fontSize={"large"} color="#0A66C2" />
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="##">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
