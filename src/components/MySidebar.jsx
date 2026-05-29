import { HiMenu, HiX, HiHome, HiUser, HiPlusCircle } from "react-icons/hi";

import { useState } from "react";
import { Link } from "react-router-dom";

function MySidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-content">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 hover:bg-mauve-300 text-shadow-neutral-600 p-2 rounded-md"
      >
        {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen bg-neutral-200 border-r shadow-md transition-all duration-300 z-20
        ${isOpen ? "w-64" : "w-20"}`}
      >
        <div className="mt-16 flex flex-col gap-3 p-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-2 hover:bg-mauve-300 rounded-md"
          >
            {" "}
            <div className="flex gap-1 text-zinc-600">
              {" "}
              <HiHome size={22} />
              {isOpen && <span>Dashboard</span>}
            </div>
          </Link>

          <Link
            to="/dashboard/job"
            className="flex items-center gap-3 p-2 hover:bg-mauve-300 rounded-md"
          >
            <div className="flex gap-1 text-zinc-600">
              <HiPlusCircle size={22} />
              {isOpen && <span>Add Job</span>}
            </div>
          </Link>

          <Link
            to="/dashboard/user/profilePage"
            className="flex items-center gap-3 p-2 hover:bg-mauve-300 rounded-md"
          >
            <div className="flex gap-1 text-zinc-600">
              {" "}
              <HiUser size={22} />
              {isOpen && <span>Profile</span>}
            </div>
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default MySidebar;
