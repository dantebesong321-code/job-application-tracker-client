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
      <Link to="/">
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Jobble
          </span>
        </NavbarBrand>{" "}
      </Link>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" rounded />}
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              user email
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>
            {isLoggedIn && (
              <>
                {" "}
                <div className="flex gap-1">
                  <Link to="/jobList">JobListPage</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>
              </>
            )}
          </DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
export default MyNavbar;
