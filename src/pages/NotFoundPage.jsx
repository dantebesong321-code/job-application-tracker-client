import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-svh">
      {" "}
      <br />
      <h2>Oops, nothing here!</h2>
      <h5></h5>
      <Link to={"/login"}>
        <h4>Return to login</h4>
      </Link>
    </div>
  );
}

export default NotFoundPage;
