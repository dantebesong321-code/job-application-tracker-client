import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function MyNavbar() {
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
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Jobble
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" rounded />}
        >
          <DropdownItem>
            {!isLoggedIn ? (
              <div className="flex gap-3 text-sm">
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </div>
            ) : (
              <button onClick={handleLogout}>Logout</button>
            )}
          </DropdownItem>
        </Dropdown>

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink as={Link} to="/">
          Home
        </NavbarLink>

        <NavbarLink as={Link} to="/dashboard">
          Dashboard
        </NavbarLink>

        <NavbarLink as={Link} to="/login">
          Login
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
export default MyNavbar;
