import FormUser from "./FormUser";
import DemoApp from "../../../components/DemoApp";
// eslint-disable-next-line react/prop-types
export default function ContainerView({ container }) {
  return (
    <div className={"h_Max container__view"}>
      {container ? <FormUser /> : <DemoApp />}
    </div>
  );
}
