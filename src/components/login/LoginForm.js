import React from "react";
import style from "./LoginForm.module.css";
import GoogleButton from "react-google-button";

const LoginForm = () => {
  return (
    <form className="">
      <div className="col-lg-7">
        <input
          type="email"
          placeholder="Email"
          className="form-control my-3 p-2"
        />
      </div>

      <div className="col-lg-7 ">
        <input
          type="password"
          placeholder="Password"
          className="form-control my-3 p-2 "
        />
      </div>

      {/* LOGIN BUTTON */}

      <div className="col-lg-7 text-center">
        <button type="button" className={`${style.btn1} mt-3 mb-3`}>
          Login
        </button>
        <p className="ml-5">OR</p>
      </div>

      {/* GOOGLE BUTTON added by NPM */}

      <div className="col-lg-7 ms-5">
        <GoogleButton
          type="light" // can be light or dark
          onClick={() => {
            console.log("Google button clicked");
          }}
          className={` mt-3 mb-5`}
        />
      </div>

      <a href="#">Forgot Password</a>
      <p>
        Dont have an account? <a href="signup.html">Register here</a>
      </p>
    </form>
  );
};

export default LoginForm;
