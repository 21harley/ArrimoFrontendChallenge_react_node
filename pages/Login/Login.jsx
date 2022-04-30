import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "./../../Reduxer/slices/User";

export default function Login() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    let ban = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email.value) {
        if (data[i].password == password.value) {
          ban = true;
          break;
        }
      }
    }
    if (ban) {
      dispatch(setLogin({ state: true }));
      navigate("/home");
    } else {
      alert("Email or password error");
    }
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
