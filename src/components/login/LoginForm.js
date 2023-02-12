import React, { useRef, useContext, useState } from "react";
import style from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import authContext from "../../store/context/auth-context";
import { useNavigate } from "react-router-dom/dist";

const LoginForm = () => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const Navigate = useNavigate();

  // Input ref
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const roleRef = useRef("");

  const authCtx = useContext(authContext);

  // Submit Handler

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const pass = passwordRef.current.value;
    const email = emailRef.current.value;
    const role = roleRef.current.value;

    try {
      // Main Fetch

      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhYUaQeJllfCXoqZTxuOhlaYzVhspN98I",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idToken: authCtx.token,
            password: pass,
            email: email,

            returnSecureToken: true,
          }),
        }
      );

      const res = await response.json();

      // check if there is an error
      if (!response.ok) {
        throw new Error(
          response.error.message
            ? response.error.message
            : "Failed to send request"
        );
      }
      setIsLoading(false);

      const expiresIn = new Date(new Date().getTime() + +res.expiresIn * 1000);
      authCtx.login(res.idToken, expiresIn.toISOString());
      Navigate(`/${role}`, { replace: true });
    } catch (err) {
      setIsError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={loginSubmitHandler}>
      <div className="col-lg-7">
        <input
          type="email"
          placeholder="Email"
          className="form-control my-3 p-2"
          ref={emailRef}
        />
      </div>

      <div className="col-lg-7 ">
        <input
          type="password"
          placeholder="Password"
          className="form-control my-3 p-2 "
          ref={passwordRef}
        />
      </div>
      {/* Role Button */}
      <div className="col-lg-7 ">
        <select
          className="form-select"
          aria-label="Default select example"
          ref={roleRef}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* LOGIN BUTTON */}

      <div className="col-lg-7 text-center">
        <button type="submit" className={`${style.btn1} mt-3 mb-3`}>
          Login
        </button>
      </div>

      {/* GOOGLE BUTTON added by NPM */}

      <Link to={"/"} className={`text-decoration-none`}>
        Forgot Password?
      </Link>
    </form>
  );
};

export default LoginForm;
