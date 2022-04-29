import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container container--grid h_Max">
      <div className="page_not_found_404">page not found 404</div>
      <Link className="link--efect " to="/home">
        Home
      </Link>
    </div>
  );
}
