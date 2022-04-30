import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "./../../../Reduxer/slices/User";
// eslint-disable-next-line react/prop-types
export default function MenuUser({ setContainer }) {
  const listMenu = ["Users", "Calendar", "Theme", "Close"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelMenu = (e) => {
    let dato = e.target.innerHTML;
    switch (dato) {
      case "Close":
        dispatch(setLogin(false));
        navigate("/login");
        break;
      case "Users":
        setContainer(true);
        break;
      case "Calendar":
        setContainer(false);
        break;
    }
  };
  return (
    <div className="menu h_maxP">
      <ul className="ul__menu ">
        {listMenu.map((el, index) => {
          return (
            <li key={index} className="li__menu">
              <button
                className={"button button--radius button--color--one "}
                onClick={(e) => {
                  handelMenu(e);
                }}
              >
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
