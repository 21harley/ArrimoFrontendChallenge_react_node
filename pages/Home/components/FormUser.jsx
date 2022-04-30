import { useState, useRef } from "react";
//import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser, addUser, resertUser } from "./../../../Reduxer/slices/User";

export default function FormUser() {
  const dispatch = useDispatch();
  const form = useRef();
  const [formState, setFormState] = useState(true);
  const [userId, setUserId] = useState(-1);
  const { data } = useSelector((state) => state.user);
  //edit delete add
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState) {
      createUser(e);
    } else {
      setFormState(true);
      editUser(e);
      setUserId(-1);
    }
    clearForm();
  };
  const clearForm = () => {
    form.current.name.value = "";
    form.current.email.value = "";
    form.current.password.value = "";
  };
  const createUser = (e) => {
    let { name, email, password } = e.target;
    let ban = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email.value) {
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
      clearForm();
      alert("Creater user exit");
    } else {
      alert("Correo Existen");
    }
  };
  const editUser = (e) => {
    let ban = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == userId) {
        for (let j = 0; j < data.length; j++) {
          if (j != i && data[j].email === e.target.email.value) {
            ban = false;
            break;
          }
        }
        break;
      }
    }
    if (ban) {
      dispatch(
        setUser({
          user: {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
          },
          n_user: userId,
        })
      );
    } else {
      alert("Error existe email");
    }
  };
  const editUserForm = (e) => {
    let id = e.target.getAttribute("id_user");
    let inform = data.filter((el) => {
      return el.id == id;
    });
    setUserId(id);
    form.current.email.value = inform[0].email;
    form.current.name.value = inform[0].name;
    form.current.password.value = inform[0].password;
    setFormState(false);
  };
  const deleteUser = (e) => {
    let id = e.target.getAttribute("id_user");
    let opcion = confirm("Are you sure you want to delete this user?");
    if (opcion) {
      dispatch(resertUser({ id_user: id }));
    }
  };

  return (
    <>
      <div className="grid__user">
        <form
          ref={form}
          className="container container--grid "
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1>User</h1>
          <div className="container--grid">
            <label htmlFor="" className="w_full tg-start">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              id="nameUserNew"
              required
              className="form__input"
            />
          </div>
          <div className="container--grid">
            <label htmlFor="" className="w_full tg-start">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="emailNew"
              className="form__input"
              required
            />
          </div>
          <div className="container--grid">
            <label htmlFor="" className="w_full tg-start">
              password:
            </label>
            <input
              type="text"
              name="password"
              id="passwordNew"
              className="form__input"
              required
            />
          </div>
          <div className="container--flex">
            {formState ? (
              <button className="button button--form">Create</button>
            ) : (
              <>
                <button className="button button--formEdit">Edit</button>
                <button className="button button--formEdit">Exit</button>
              </>
            )}
          </div>
        </form>

        <ul className="ul__user classOver">
          {data.map((el, index) => {
            return (
              <li key={index} className="li__user container--flex--coloumn">
                <div>Name:{el.name}</div>
                <div>Email:{el.email}</div>
                <div>Password:{el.password}</div>
                <div className=" container--flex">
                  <button
                    className="button"
                    id_user={el.id}
                    onClick={(e) => {
                      editUserForm(e);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button"
                    id_user={el.id}
                    onClick={(e) => {
                      deleteUser(e);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
