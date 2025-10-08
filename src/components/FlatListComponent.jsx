import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const FlatListComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const flats = [
        { id: 1, name: "Flat A1", house: "Sunshine Villa", floor: "1st", room: "2BHK", rent: "$500", user: "Alice" },
        { id: 2, name: "Flat B2", house: "Ocean View", floor: "2nd", room: "3BHK", rent: "$750", user: "Bob" },
        { id: 3, name: "Flat C3", house: "Green Apartments", floor: "3rd", room: "1BHK", rent: "$600", user: "Charlie" },
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
                        <h1 className="text-2xl font-bold mb-6">Flat List</h1>

                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flat Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">House</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Floor</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rent</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {flats.map((flat) => (
                                        <tr key={flat.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{flat.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{flat.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{flat.house}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{flat.floor}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{flat.room}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{flat.rent}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{flat.user}</td>
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

export default FlatListComponent