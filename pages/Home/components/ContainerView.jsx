import FormUser from "./FormUser";

// eslint-disable-next-line react/prop-types
export default function ContainerView({ container }) {
  return (
    <div className="container h_maxP">{container ? <FormUser /> : <></>}</div>
  );
}
