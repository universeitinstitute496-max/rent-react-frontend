import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const FlatUserListComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");

  const flatUsers = [
    { id: 1, name: "Alice", flat: "Flat A1", email: "alice@example.com", phone: "123-456-7890", status: "Active" },
    { id: 2, name: "Bob", flat: "Flat B2", email: "bob@example.com", phone: "234-567-8901", status: "Deactive" },
    { id: 3, name: "Charlie", flat: "Flat C3", email: "charlie@example.com", phone: "345-678-9012", status: "Active" },
    { id: 4, name: "David", flat: "Flat D4", email: "david@example.com", phone: "456-789-0123", status: "Deactive" },
  ];

  // ✅ Filtered user list based on dropdown
  const filteredUsers =
    filterStatus === "All"
      ? flatUsers
      : flatUsers.filter((user) => user.status === filterStatus);

  return (
    <>
      <section id="dashboard" className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end mb-4 fixed top-100 right-4 z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              <i className="fa-solid fa-bars">
                <span className="ml-1.5">M E N U</span>
              </i>
            </button>
          </div>

          {/* Sidebar */}
          <DashboardMenu isOpen={isOpen} />

          {/* Main Content */}
          <div className="p-6 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h1 className="text-2xl font-bold">Flat User List</h1>

              {/* ✅ Filtering Dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-gray-600 text-sm font-medium">
                  Filter:
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Deactive">Deactive</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.flat}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 text-sm font-semibold rounded-full ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                            Edit
                          </button>
                          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-6 text-gray-500">
                        No users found for selected filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlatUserListComponent;
