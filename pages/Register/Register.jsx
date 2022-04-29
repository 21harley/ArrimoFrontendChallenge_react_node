import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";

export default function Register() {
  const [userState, setUserState] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password } = e.target;
    setUserState({
      name: name,
      password: password,
      email: email,
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
          <h1>Register User</h1>
          <div>
            <label htmlFor="name">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              id="userEmail"
              className="form__input"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              name="name"
              id="userName"
              className="form__input"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="userPassword"
              className="form__input"
              required
            />
          </div>
          <button className="button">Register</button>
        </form>
        <div>
          <p className="tg-center">
            Already registered?
            <Link className="link--efect" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
