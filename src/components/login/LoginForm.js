import React, { useRef, useContext, useState } from 'react';
import style from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import authContext from '../../store/context/auth-context';
import { useNavigate } from 'react-router-dom/dist';
import roleContext from '../../store/context/role-context';
const inputIsNotEmpty = (input) => input !== '' && input.trim().length >= 7;

const LoginForm = ({ onLogin }) => {
  const [isError, setIsError] = useState(null);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  // WE CAN CHECK THE EMAIL INPUT IF VALID BY USING THIS REGEX CODE
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const Navigate = useNavigate();

  // Input ref
  const passwordRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef('');

  const authCtx = useContext(authContext);
  const roleCtx = useContext(roleContext);

  // Submit Handler

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    const pass = passwordRef.current.value;
    const emailAddress = emailRef.current.value;
    const role = roleRef.current.value;
    const validPassword = inputIsNotEmpty(pass);
    const validEmail = regex.test(emailAddress);
    const inputIsValid = validPassword && validEmail;

    if (!validEmail) {
      setEmailIsValid(false);
      setTimeout(() => {
        setEmailIsValid(true);
      }, 5000);
    }

    if (!validPassword) {
      setPasswordIsValid(false);
      setTimeout(() => {
        setPasswordIsValid(true);
      }, 5000);
    }

    // CHECK IF ALL INPUT IS VALID BEFORE PROCEEDING TO NEXT LINE

    if (!inputIsValid) {
      return;
    }

    try {
      // CHECK IF USER EXIST IN DESIGNED ROLE
      const user = await fetch(
        `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/${role}.json`
      );

      const getUser = await user.json();

      let convertData = [];

      for (let user_id in getUser) {
        convertData.push({
          email: getUser[user_id].email,

          id: user_id,
        });
      }

      // CHECK IF USER EXIST IN DESIGNED ROLE

      const userExist = convertData.find((user) => user.email === emailAddress);
      console.log(userExist);

      if (!userExist) {
        setIsError(
          "You don't have the right role to log in Or your account does not exist"
        );
        setTimeout(() => {
          setIsError(null);
        }, 5000);
        return;
      }

      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhYUaQeJllfCXoqZTxuOhlaYzVhspN98I',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            idToken: authCtx.token,
            password: pass,
            email: emailAddress,
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
            : 'Failed to send request'
        );
      }
      // GET ROLE
      authCtx.setRole(role);

      // AUTH TIMER

      const expiresIn = new Date(new Date().getTime() + +res.expiresIn * 1000);
      authCtx.login(res.idToken, expiresIn.toISOString());
      Navigate(`/${role}`, { replace: true });
    } catch (err) {
      setIsError(err.message);
    }
  };

  // ERROR MESSAGES

  return (
    <form onSubmit={loginSubmitHandler} className="pb-3">
      <div className="col-lg-7">
        {isError ? (
          <div className="alert alert-danger text-center" role="alert">
            {isError}
          </div>
        ) : (
          ''
        )}

        {/* Email Invalid message */}
        {!emailIsValid && (
          <p className={style.invalid}>Please enter a valid email</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="form-control my-3 p-2"
          ref={emailRef}
        />
      </div>

      <div className="col-lg-7 ">
        {/* Password Invalid Message */}
        {!passwordIsValid && <p className={style.invalid}> Invalid Password</p>}
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
          defaultValue="members"
        >
          <option value="members">Member</option>
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

      <Link to={'/'} className={`text-decoration-none`}>
        Forgot Password?
      </Link>
    </form>
  );
};

export default LoginForm;
