import { useState } from "react";
import { useSelector } from "react-redux";
import MenuUser from "./components/MenuUser";
import ContainerView from "./components/ContainerView";
import "@fullcalendar/daygrid/main.css";
import Login from "../Login/Login";

export default function Home() {
  const [container, setContainer] = useState(true);
  const { login } = useSelector((state) => state.user);
  return (
    <>
      {login ? (
        <div className="container--home h_Max">
          <MenuUser setContainer={setContainer} />
          <ContainerView container={container} />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
