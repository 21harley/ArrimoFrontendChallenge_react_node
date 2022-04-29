import { useState } from "react";
import MenuUser from "./components/MenuUser";
import ContainerView from "./components/ContainerView";

export default function Home() {
  const [container, setContainer] = useState(true);
  return (
    <>
      <div className="container--home h_Max">
        <MenuUser setContainer={setContainer} />
        <ContainerView container={container} />
      </div>
    </>
  );
}
