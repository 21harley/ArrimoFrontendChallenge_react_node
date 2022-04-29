import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";

export default function Login() {
  const [userState, setUserState] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    setUserState({
      name: email,
      password: password,
    });
    console.log(userState);
    navigate("/home");
  };
  return (
    <>
      <div className="container container--grid h_Max">
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="container container--flex--coloumn lp-m"
        >
          <h1 className="tg-center">Login</h1>
          <div>
            <label htmlFor="name">Email:</label>
            <br />
            <input
              className="form__input"
              type="email"
              name="email"
              id="userEmail"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              className="form__input"
              type="password"
              name="password"
              id="userPassword"
              required
            />
          </div>
          <button className="button">Register</button>
        </form>
        <div>
          <p className="tg-center">
            Forgot password?
            <Link className="link--efect" to="/register">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
