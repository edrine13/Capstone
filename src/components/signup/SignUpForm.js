import React from 'react';
import style from './SignUpForm.module.css';

import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <form className="">
      <div className="col-lg-7 d-flex gap-2 m-auto ">
        <input
          type="name"
          placeholder="Last Name"
          className={`${style['signUp-Form']} form-control `}
        />
        <input
          type="name"
          placeholder="Mid. Name"
          className={`${style['signUp-Form']} form-control `}
        />
        <input
          type="name"
          placeholder="First Name"
          className={`${style['signUp-Form']} form-control `}
        />
      </div>

      <div className="col-lg-7 m-auto">
        <input
          type="email"
          placeholder="Email"
          className="form-control my-3 p-2"
        />
      </div>

      <div className="col-lg-7 m-auto">
        <input
          type="password"
          placeholder="Password"
          className="form-control  my-3 p-2 "
        />
      </div>
      <div className="col-lg-7 m-auto">
        <input
          type="password"
          placeholder="Confirm password"
          className="form-control my-3 p-2 "
        />
      </div>
      <div className="col-lg-7 m-auto">
        <input
          type="tel"
          placeholder="Phone Number"
          className="form-control my-3 p-2 "
        />
      </div>
      <div className="col-lg-7 m-auto">
        <select className="form-control">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="col-lg-7 m-auto text-center">
        <button type="button" className={`${style.btn1} mt-4 mb-4`}>
          Sign Up
        </button>

        <p className="ml-5">OR</p>
      </div>
    </form>
  );
};

export default SignUpForm;
