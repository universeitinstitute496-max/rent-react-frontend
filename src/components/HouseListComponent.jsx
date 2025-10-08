import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const HouseListComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const houses = [
        { id: 1, name: "Sunshine Villa", address: "123 Main St", owner: "John Doe", rent: "$500" },
        { id: 2, name: "Ocean View", address: "45 Beach Rd", owner: "Jane Smith", rent: "$750" },
        { id: 3, name: "Green Apartments", address: "78 Park Ave", owner: "Michael Lee", rent: "$600" },
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
                        <h1 className="text-2xl font-bold mb-6">House List</h1>

                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            #
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            House Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Address
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Owner
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Rent
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {houses.map((house) => (
                                        <tr key={house.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{house.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{house.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{house.address}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{house.owner}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{house.rent}</td>
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

export default HouseListComponent