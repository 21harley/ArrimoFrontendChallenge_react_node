//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FormUser() {
  //const dispatch = useDispatch();
  //let navigate = useNavigate();
  const { data } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        className="container container--grid "
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>User</h1>
        <div>
          <label htmlFor="">Nombre:</label>
          <input
            type="text"
            name="nameUser"
            id="nameUserNew"
            required
            className="form__input"
          />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            name="email"
            id="emailNew"
            className="form__input"
            required
          />
        </div>
        <div>
          <label htmlFor="">password:</label>
          <input
            type="text"
            name="password"
            id="passwordNew"
            className="form__input"
            required
          />
        </div>
      </form>

      <ul className="ul__user">
        {data.map((el, index) => {
          return (
            <li key={index} className="li__user container--flex--coloumn">
              <div>Name:{el.name}</div>
              <div>Email:{el.email}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
