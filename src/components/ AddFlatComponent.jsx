
import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const AddFlatComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="container mx-auto px-4 py-8">

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
                    
                    {/* Add Flat Form */}
                    <div className="w-full ">
                    

                        <div className="bg-white rounded-lg shadow-md p-6">

                            <div className="bg-blue-600 text-white px-6 py-4 mb-5 rounded-t-lg">
                                <h2 className="text-2xl font-bold">Add New Flat</h2>
                                <p>Fill in your flat information correctly</p>
                            </div>
                            <form id="addFlatForm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div className="space-y-4">
                                        {/* Property Selection */}
                                        <div>
                                            <label
                                                htmlFor="property"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Select Property
                                            </label>
                                            <select
                                                id="property"
                                                name="property"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value="">-- Select Property --</option>
                                                <option value="green-view">
                                                    Green View (Dhanmondi, Dhaka)
                                                </option>
                                                <option value="riverside">Riverside (Gulshan, Dhaka)</option>
                                                <option value="sunflower">Sunflower (Mirpur, Dhaka)</option>
                                            </select>
                                        </div>
                                        {/* Flat Number */}
                                        <div>
                                            <label
                                                htmlFor="flatNumber"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Flat Number
                                            </label>
                                            <input
                                                type="text"
                                                id="flatNumber"
                                                name="flatNumber"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="e.g., A-1, B-2"
                                            />
                                        </div>
                                        {/* Floor Number */}
                                        <div>
                                            <label
                                                htmlFor="floor"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Floor Number
                                            </label>
                                            <input
                                                type="number"
                                                id="floor"
                                                name="floor"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="e.g., 3"
                                            />
                                        </div>
                                        {/* Number of Bedrooms */}
                                        <div>
                                            <label
                                                htmlFor="bedrooms"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Number of Bedrooms
                                            </label>
                                            <select
                                                id="bedrooms"
                                                name="bedrooms"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value={1}>1 Bedroom</option>
                                                <option value={2}>2 Bedrooms</option>
                                                <option value={3}>3 Bedrooms</option>
                                                <option value={4}>4 Bedrooms</option>
                                                <option value={5}>5+ Bedrooms</option>
                                            </select>
                                        </div>
                                        {/* Area (Sq. Ft.) */}
                                        <div>
                                            <label
                                                htmlFor="area"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Area (Sq. Ft.)
                                            </label>
                                            <input
                                                type="number"
                                                id="area"
                                                name="area"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="e.g., 1200"
                                            />
                                        </div>
                                    </div>
                                    {/* Right Column */}
                                    <div className="space-y-4">
                                        {/* Monthly Rent */}
                                        <div>
                                            <label
                                                htmlFor="rent"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Monthly Rent (৳)
                                            </label>
                                            <input
                                                type="number"
                                                id="rent"
                                                name="rent"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="e.g., 15000"
                                            />
                                        </div>
                                        {/* Security Deposit */}
                                        <div>
                                            <label
                                                htmlFor="deposit"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Security Deposit (৳)
                                            </label>
                                            <input
                                                type="number"
                                                id="deposit"
                                                name="deposit"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="e.g., 30000"
                                            />
                                        </div>
                                        {/* Available From */}
                                        <div>
                                            <label
                                                htmlFor="availableFrom"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Available From
                                            </label>
                                            <input
                                                type="date"
                                                id="availableFrom"
                                                name="availableFrom"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        {/* Status */}
                                        <div>
                                            <label
                                                htmlFor="status"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Status
                                            </label>
                                            <select
                                                id="status"
                                                name="status"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value="available">Available</option>
                                                <option value="occupied">Occupied</option>
                                                <option value="under-maintenance">Under Maintenance</option>
                                            </select>
                                        </div>
                                        {/* Amenities */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Amenities
                                            </label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="amenity1"
                                                        name="amenities"
                                                        defaultValue="parking"
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="amenity1">Parking</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="amenity2"
                                                        name="amenities"
                                                        defaultValue="generator"
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="amenity2">Generator</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="amenity3"
                                                        name="amenities"
                                                        defaultValue="elevator"
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="amenity3">Elevator</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="amenity4"
                                                        name="amenities"
                                                        defaultValue="security"
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="amenity4">Security</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="amenity5"
                                                        name="amenities"
                                                        defaultValue="cctv"
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="amenity5">CCTV</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="amenity6"
                                                        name="amenities"
                                                        defaultValue="wifi"
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="amenity6">WiFi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Add any additional details about the flat..."
                                        defaultValue={""}
                                    />
                                </div>
                                {/* Submit Button */}
                                <div className="mt-8 flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
                                    >
                                        Add Flat
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Recently Added Flats */}
                        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                            <h3 className="text-xl font-semibold mb-4">Recently Added Flats</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-2 text-left">Flat No</th>
                                            <th className="p-2 text-left">Property</th>
                                            <th className="p-2 text-left">Rent</th>
                                            <th className="p-2 text-left">Status</th>
                                            <th className="p-2 text-left">Added Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-2">B-4</td>
                                            <td className="p-2">Riverside</td>
                                            <td className="p-2">৳ 15,000</td>
                                            <td className="p-2">
                                                <span className="text-green-600">Available</span>
                                            </td>
                                            <td className="p-2">15 Nov 2023</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-2">A-5</td>
                                            <td className="p-2">Green View</td>
                                            <td className="p-2">৳ 12,000</td>
                                            <td className="p-2">
                                                <span className="text-blue-600">Occupied</span>
                                            </td>
                                            <td className="p-2">10 Nov 2023</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-2">C-2</td>
                                            <td className="p-2">Sunflower</td>
                                            <td className="p-2">৳ 10,000</td>
                                            <td className="p-2">
                                                <span className="text-yellow-600">Maintenance</span>
                                            </td>
                                            <td className="p-2">5 Nov 2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddFlatComponent