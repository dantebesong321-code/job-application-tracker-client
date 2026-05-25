import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
function Navbar() {
  const navigate = useNavigate();

  const { setIsLoggedIn, setLoggedUserId, isLoggedIn, setLoggedUserRole } =
    useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();

    // destroying the token
    localStorage.removeItem("authToken");

    // revert the states to their initial value
    setIsLoggedIn(false);
    setLoggedUserId(null);
    // setLoggedUserRole(null);

    // navigate the user to a public page
    navigate("/login");
  }

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <div className="md:block hidden">
          {!isLoggedIn && (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}

          {isLoggedIn && (
            <>
              {" "}
              <div className="flex gap-1">
                <Link to="/jobList">JobListPage</Link>
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            </>
          )}
        </div>
        <div className="lg:block hidden">{<RxHamburgerMenu />}</div>
      </div>
    </nav>
  );
}

export default Navbar;
