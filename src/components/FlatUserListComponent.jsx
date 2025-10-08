import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const FlatUserListComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const flatUsers = [
        { id: 1, name: "Alice", flat: "Flat A1", email: "alice@example.com", phone: "123-456-7890" },
        { id: 2, name: "Bob", flat: "Flat B2", email: "bob@example.com", phone: "234-567-8901" },
        { id: 3, name: "Charlie", flat: "Flat C3", email: "charlie@example.com", phone: "345-678-9012" },
    ];
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


                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-6">Flat User List</h1>

                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flat</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {flatUsers.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.flat}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                                    Edit
                                                </button>
                                                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FlatUserListComponent