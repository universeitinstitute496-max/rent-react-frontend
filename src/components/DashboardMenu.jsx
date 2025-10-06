import { NavLink } from "react-router";

const DashboardMenu = ({ isOpen }) => {
  return (
    <div
      className={`dashboard-nav bg-white rounded-lg border-blue-200 shadow-indigo-500 border shadow p-4 w-64 md:w-1/4 md:static 
        fixed top-0 left-0 h-full transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* user image  */}
      <div className="flex flex-col items-center mb-6 mt-12 lg:mt-0">
        <img
          src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-2 border border-blue-200 p-4"
        />
        <h2 className="text-lg font-semibold">John Doe</h2>
        <p className="text-gray-500 text-sm">
        </p>

        </div>

      <ul className="space-y-7" style={{marginTop: ''}}>
        <li>
          <NavLink
            to="/dashboard/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i className="fa-solid fa-list" /> Dashboard
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/owner-registration/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i class="fa-solid fa-handshake"/> Apply for Owner  
          </NavLink>
        </li> */}

        <li>
          <NavLink
            to="/add-house/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i className="fa-solid fa-house" /> Add House
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-flat/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i className="fa-solid fa-building" /> Add Flat
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/create-flat-user/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i className="fa-solid fa-user-plus" /> Create Flat User
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/rent-collection/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i className="fa-solid fa-money-bill-wave" /> Rent Collection
          </NavLink>
        </li>

        

        

        <li>
          <NavLink
            to="/profile/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i className="fa-solid fa-user" /> Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/logout/"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
                : "w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
            }
          >
            <i className="fa-solid fa-right-from-bracket" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
