import { Link } from "react-router";

const DashboardMenu = ({ isOpen }) => {
  return (
    <div
      className={` dashboard-nav bg-white rounded-lg shadow-md p-4 w-64 md:w-1/4 md:static 
        fixed top-20 left-0 h-full  transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <ul className="space-y-7">
        <li>
          <Link
            to="/dashboard/"
            className="w-full text-left px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold block"
          >
            <i className="fa-solid fa-list" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/add-house/" className="w-full text-left px-4 py-2 block">
            <i className="fa-solid fa-house" /> Add House
          </Link>
        </li>
        <li>
          <Link
            to="/add_flat/"
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
          >
            <i className="fa-solid fa-building" /> Add Flat
          </Link>
        </li>
        <li>
          <Link
            to="/rent_collection/"
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
          >
            <i className="fa-solid fa-money-bill-wave" /> Rent Collection
          </Link>
        </li>
        <li>
          <Link
            to="account_statement"
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
          >
            <i className="fa-solid fa-calculator" /> Account Statement
          </Link>
        </li>
        <li>
          <Link
            to="/create_flat_user/"
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
          >
            <i className="fa-solid fa-user-plus" /> Create Flat User
          </Link>
        </li>
        <li>
          <Link
            to="/profile/"
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
          >
            <i className="fa-solid fa-user" /> Profile
          </Link>
        </li>
        <li>
          <Link
            to="/logout/"
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg block"
          >
            <i className="fa-solid fa-right-from-bracket" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
