
import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const RentCollectionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
            <>

            {/* Dashboard Section (Visible after login) */}
            <section id="dashboard" className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Navigation */}
                   {/* Mobile Menu Button */}
                    <div className="md:hidden flex justify-end mb-4 fixed top-100 right-4 z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 bg-blue-500 text-white rounded-lg"
                        >
                            <i className="fa-solid fa-bars"><span className="ml-1.5 line">M E N U</span></i>
                        </button>
                    </div>

                    {/* Sidebar */}
                    <DashboardMenu isOpen={isOpen} />
                    {/* Main Content */}
                    <div className="w-full ">
                        {/* Page Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div className="mb-4 md:mb-0">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Rent Collection
                                </h2>
                                <p className="text-gray-600">
                                    Manage and track rent payments from your tenants
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto ">
                                <div className=" w-full sm:w-auto ">
                                    <select className="w-full px-4 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>All Properties</option>
                                        <option>Green Valley Apartments</option>
                                        <option>Sunrise Homes</option>
                                        <option>River View Complex</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                       
                                    </div>
                                </div>
                                <div className=" w-full sm:w-auto ">
                                    <select className="w-full px-4 py-2 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>March 2025</option>
                                        <option>February 2025</option>
                                        <option>January 2025</option>
                                        <option>December 2024</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        
                                    </div>
                                </div>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 w-full sm:w-auto">
                                    <i className="fas fa-plus mr-2" />
                                    Add Payment
                                </button>
                            </div>
                        </div>
                        {/* Summary Cards */}
                        <div className="summary-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">
                                            Total Tenants
                                        </p>
                                        <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                                            12
                                        </h3>
                                    </div>
                                    <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                                        <i className="fas fa-users text-blue-600 text-lg sm:text-xl" />
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    3 new this month
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">
                                            Rent Collected
                                        </p>
                                        <h3 className="text-xl sm:text-2xl font-bold text-green-600">
                                            ৳ 68,500
                                        </h3>
                                    </div>
                                    <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                                        <i className="fas fa-money-check text-green-600 text-lg sm:text-xl" />
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    75% of expected
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">
                                            Pending Rent
                                        </p>
                                        <h3 className="text-xl sm:text-2xl font-bold text-yellow-600">
                                            ৳ 23,000
                                        </h3>
                                    </div>
                                    <div className="bg-yellow-100 p-2 sm:p-3 rounded-full">
                                        <i className="fas fa-clock text-yellow-600 text-lg sm:text-xl" />
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    From 3 tenants
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">
                                            Overdue Rent
                                        </p>
                                        <h3 className="text-xl sm:text-2xl font-bold text-red-600">
                                            ৳ 12,500
                                        </h3>
                                    </div>
                                    <div className="bg-red-100 p-2 sm:p-3 rounded-full">
                                        <i className="fas fa-exclamation-triangle text-red-600 text-lg sm:text-xl" />
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    From 2 tenants
                                </p>
                            </div>
                        </div>
                        {/* Collection Progress */}
                        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Monthly Collection Progress
                                </h3>
                                <span className="text-sm font-medium text-blue-600">
                                    75% Collected
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className="progress-bar bg-green-600 h-4 rounded-full"
                                    style={{ width: "75%" }}
                                />
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <span>৳ 0</span>
                                <span>৳ 91,500</span>
                            </div>
                        </div>
                        {/* Tenants List */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Tenant Payments
                                </h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search tenants..."
                                        className="bg-gray-100 border-0 rounded-lg py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <i className="fas fa-search text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Tenant
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Property
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Rent Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Due Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr className="tenant-row">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <span className="text-blue-600 font-semibold">RM</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            Rahim Miah
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            +880 1712345678
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    Green Valley A-5
                                                </div>
                                                <div className="text-sm text-gray-500">3 Beds, 2 Baths</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                ৳ 12,500
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                Mar 5, 2025
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    <i className="fas fa-check mr-1" /> Paid
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                    View
                                                </button>
                                                <button className="text-green-600 hover:text-green-900">
                                                    Receipt
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="tenant-row">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                        <span className="text-purple-600 font-semibold">
                                                            KU
                                                        </span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            Karim Uddin
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            +880 1812345678
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">River View C-7</div>
                                                <div className="text-sm text-gray-500">2 Beds, 1 Bath</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                ৳ 10,000
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                Mar 10, 2025
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    <i className="fas fa-clock mr-1" /> Pending
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                    Remind
                                                </button>
                                                <button className="text-green-600 hover:text-green-900">
                                                    Record Payment
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="tenant-row">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center">
                                                        <span className="text-pink-600 font-semibold">FB</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            Fatema Begum
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            +880 1912345678
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    Sunrise Homes B-3
                                                </div>
                                                <div className="text-sm text-gray-500">2 Beds, 2 Baths</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                ৳ 9,000
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                Feb 28, 2025
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                    <i className="fas fa-exclamation-triangle mr-1" /> Overdue
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                    Remind
                                                </button>
                                                <button className="text-green-600 hover:text-green-900">
                                                    Record Payment
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="tenant-row">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                                        <span className="text-indigo-600 font-semibold">
                                                            SA
                                                        </span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            Sabbir Ahmed
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            +880 1612345678
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    Green Valley B-2
                                                </div>
                                                <div className="text-sm text-gray-500">3 Beds, 2 Baths</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                ৳ 13,500
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                Mar 12, 2025
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    <i className="fas fa-check mr-1" /> Paid
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                    View
                                                </button>
                                                <button className="text-green-600 hover:text-green-900">
                                                    Receipt
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="tenant-row">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                                                        <span className="text-teal-600 font-semibold">NJ</span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            Nusrat Jahan
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            +880 1512345678
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">River View A-1</div>
                                                <div className="text-sm text-gray-500">1 Bed, 1 Bath</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                ৳ 7,500
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                Mar 8, 2025
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    <i className="fas fa-clock mr-1" /> Pending
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                    Remind
                                                </button>
                                                <button className="text-green-600 hover:text-green-900">
                                                    Record Payment
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination */}
                            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                                <div className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to{" "}
                                    <span className="font-medium">5</span> of{" "}
                                    <span className="font-medium">12</span> tenants
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
                                        1
                                    </button>
                                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                                        2
                                    </button>
                                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                                        3
                                    </button>
                                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

  )
}

export default RentCollectionComponent