import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

function NotFoundPage() {
  return (
    <div className="min-h-svh">
      {" "}
      <br />
      <h2>Oops, nothing here!</h2>
      <Link to={"/login"}>
        <h4>Return to login</h4>
      </Link>
      <BackButton />
    </div>
  );
}

export default NotFoundPage;
