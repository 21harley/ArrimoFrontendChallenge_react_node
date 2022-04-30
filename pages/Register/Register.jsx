import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setLogin } from "../../Reduxer/slices/User";

export default function Register() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password } = e.target;
    let ban = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == email.value) {
        ban = false;
      }
    }
    if (ban) {
      dispatch(
        addUser({
          name: name.value,
          email: email.value,
          password: password.value,
        })
      );
      dispatch(setLogin(true));
      alert("Successful registration");
      navigate("/home");
    } else {
      alert("Mail already registered");
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
