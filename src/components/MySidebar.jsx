import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { RiHome2Line } from "react-icons/ri";
import HomePage from "../pages/HomePage";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

function MySidebar() {
  return (
    <div className="sidebar-conten">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <SidebarItems>
          <SidebarItemGroup className="">
            <SidebarItem href="#" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
              <SidebarItem href="#">Products</SidebarItem>
              <SidebarItem href="#">Sales</SidebarItem>
              <SidebarItem href="#">Refunds</SidebarItem>
              <SidebarItem href="#">Shipping</SidebarItem>
            </SidebarCollapse>
            <SidebarItem href="#" icon={HiInbox}>
              Inbox
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBag}>
              Products
            </SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="#" icon={HiTable}>
              Sign Up
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}
export default MySidebar;
