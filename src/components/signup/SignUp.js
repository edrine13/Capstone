import React from "react";
import SignUpForm from "./SignUpForm";
import style from "./SignUp.module.css";
import logoImg from "../../images/logo2.png";

const SignUp = () => {
  return (
    <section className="mt-5">
      <div className={`${style.signup} col-md-7 px-5 pt-5 text-center `}>
        <img
          src={logoImg}
          width={150}
          className={`style["image-fluid"] m-auto `}
          alt="logo of company link coop"
        />
        <h4 className="py-3 max-w-sm">Sign Up</h4>
        <SignUpForm />
      </div>
    </section>
  );
};

export default SignUp;
