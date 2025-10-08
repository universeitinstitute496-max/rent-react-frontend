import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";

const DashboardMenu = ({ isOpen }) => {
  const location = useLocation();

  // Menu open state
  const [openMenus, setOpenMenus] = useState({
    house: false,
    flat: false,
  });

  // Toggle menu manually
  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Auto open parent menu if any child is active
  useEffect(() => {
    if (location.pathname.startsWith("/add-house") || location.pathname.startsWith("/house-list")) {
      setOpenMenus((prev) => ({ ...prev, house: true }));
    }
    if (location.pathname.startsWith("/add-flat") || location.pathname.startsWith("/flat-list") || location.pathname.startsWith("/create-flat-user")) {
      setOpenMenus((prev) => ({ ...prev, flat: true }));
    }
  }, [location.pathname]);

  const activeClass =
    "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block transition-colors duration-200";
  const inactiveClass =
    "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block transition-colors duration-200";

  return (
    <div
      className={`dashboard-nav bg-white rounded-lg border-blue-200 shadow-indigo-500 border shadow p-4 w-64 md:w-1/4 md:static 
        fixed top-0 left-0 h-full transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* User Image */}
      <div className="flex flex-col items-center mb-6 mt-12 lg:mt-0">
        <img
          src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-2 border border-blue-200 p-4"
        />
        <h2 className="text-lg font-semibold">John Doe</h2>
      </div>

      {/* Menu Items */}
      <ul className="space-y-2">
        {/* Dashboard */}
        <li>
          <NavLink to="/dashboard/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            <i className="fa-solid fa-list mr-2" /> Dashboard
          </NavLink>
        </li>

        {/* House Manage */}
        <li>
          <button
            onClick={() => toggleMenu("house")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg flex justify-between items-center transition-colors duration-200 cursor-pointer"
          >
            <span><i className="fa-solid fa-house mr-2" /> House Manage</span>
            <i className={`fa-solid fa-chevron-${openMenus.house ? "up" : "down"} transition-transform duration-200`}></i>
          </button>
          <ul
            className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
              openMenus.house ? "max-h-40" : "max-h-0"
            }`}
          >
            <li>
              <NavLink to="/add-house/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Add House
              </NavLink>
            </li>
            <li>
              <NavLink to="/house-list/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                House List
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Flat Manage */}
        <li>
          <button
            onClick={() => toggleMenu("flat")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg flex justify-between items-center transition-colors duration-200 cursor-pointer"
          >
            <span><i className="fa-solid fa-building mr-2" /> Flat Manage</span>
            <i className={`fa-solid fa-chevron-${openMenus.flat ? "up" : "down"} transition-transform duration-200`}></i>
          </button>
          <ul
            className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
              openMenus.flat ? "max-h-60" : "max-h-0"
            }`}
          >
            <li>
              <NavLink to="/add-flat/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Add Flat
              </NavLink>
            </li>
            <li>
              <NavLink to="/flat-list/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Flat List
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-flat-user/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Create Flat User
              </NavLink>
            </li>
            <li>
              <NavLink to="/flat-user-list/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Flat User List
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Rent Collection */}
        <li>
          <NavLink to="/rent-collection/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            <i className="fa-solid fa-money-bill-wave mr-2" /> Rent Collection
          </NavLink>
        </li>

        {/* Rent Payment */}
        <li>
          <NavLink to="/flat-user-rent-submit/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            <i className="fa-solid fa-money-bill mr-2" /> Rent Payment
          </NavLink>
        </li>

        {/* Profile */}
        <li>
          <NavLink to="/profile/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            <i className="fa-solid fa-user mr-2" /> Profile
          </NavLink>
        </li>

        {/* Logout */}
        <li>
          <NavLink to="/logout/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            <i className="fa-solid fa-right-from-bracket mr-2" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
