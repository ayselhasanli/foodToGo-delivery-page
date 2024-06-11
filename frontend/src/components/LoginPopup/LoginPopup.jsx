import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button
            onClick={() => {
              setShowLogin(false);
            }}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign up" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button>
            {currState === "Sign up" ? "Create account" : "Login"}
          </button>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrentState("Sign up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an coount?{" "}
            <span
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
