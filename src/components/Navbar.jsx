import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  // Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Navbar() {
  const navigate = useNavigate();

  const { setIsLoggedIn, setLoggedUserId, isLoggedIn, setLoggedUserRole } =
    useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();

    localStorage.removeItem("authToken");

    setIsLoggedIn(false);
    setLoggedUserId(null);

    navigate("/login");
  }

  return (
    <nav className="bg-stone-200 text-mist-900 p-4 flex justify-between">
      <div>
        <Link to="/">Jobble</Link>
      </div>
      <div>
        <div className="md:block hidden">
          {!isLoggedIn && (
            <>
              <div className="flex gap-1 text-xs">
                <div>
                  {" "}
                  <Link to="/signup">Signup</Link>
                </div>
                <div>
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </>
          )}

          {isLoggedIn && (
            <>
              {" "}
              <div className="flex gap-1">
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            </>
          )}
        </div>
        <div className="lg:block hidden"></div>
      </div>
    </nav>
  );
}

export default Navbar;
