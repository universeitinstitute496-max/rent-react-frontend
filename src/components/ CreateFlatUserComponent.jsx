import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";


const CreateFlatUserComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Navigation */}
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
                    {/* Step 1 */}
                    <div className="w-full" id="step-1">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-blue-600 text-white px-6 py-4">
                                <h2 className="text-2xl font-bold">Create Flat User</h2>
                                <p>Fill in your flat user information correctly</p>
                            </div>
                            {/* Create Tenant Tab */}
                            <div id="create-tenant-tab" className="tab-content">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <form>
                                        <div className="mb-6 flex gap-4">
                                            {/* 1st select */}
                                            <div className="w-1/2">
                                                <label className="block text-gray-700 mb-2 font-medium">
                                                    Select House <span className="text-red-500">*</span>
                                                </label>
                                                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <option value="">Select House</option>
                                                    <option value="a-2">A-2 (Green View) - Vacant</option>
                                                    <option value="b-3">B-3 (Riverside) - Vacant</option>
                                                    <option value="c-1">C-1 (Sunflower) - Empty</option>
                                                </select>
                                            </div>
                                            {/* 2nd select */}
                                            <div className="w-1/2">
                                                <label className="block text-gray-700 mb-2 font-medium">
                                                    Select Flat <span className="text-red-500">*</span>
                                                </label>
                                                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <option value="">Select Flat</option>
                                                    <option value="a-2">A-2 (Green View) - Vacant</option>
                                                    <option value="b-3">B-3 (Riverside) - Vacant</option>
                                                    <option value="c-1">C-1 (Sunflower) - Empty</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Rental Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Enter rental name"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Rental Type <span className="text-red-500">*</span>
                                                    </label>
                                                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        <option value="">select</option>
                                                        <option value="bachelor">Bachelor</option>
                                                        <option value="family">Family</option>
                                                        <option value="office">Office</option>
                                                    </select>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Advance Amount (৳) <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Enter advance amount"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Mobile number <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Enter mobile number"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Address <span className="text-red-500">*</span>
                                                    </label>
                                                    <textarea
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        rows={3}
                                                        placeholder="Enter address"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="mt-6">
                                                    <label className="block text-gray-700 font-medium mb-2">
                                                        NID (front page)
                                                    </label>
                                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                                        <i className="fa-solid fa-address-card text-4xl text-gray-400 mb-3" />
                                                        <p className="text-gray-500 mb-2">
                                                            Drop NID (front page) here or click to select
                                                        </p>
                                                        <label
                                                            htmlFor="nid-front-upload"
                                                            className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200"
                                                        >
                                                            <span>Select File</span>
                                                            <input
                                                                id="nid-front-upload"
                                                                type="file"
                                                                className="hidden"
                                                                accept="image/*"
                                                            />
                                                        </label>
                                                        <p className="text-sm text-gray-400 mt-2">
                                                            PNG, JPG, GIF up to 5MB
                                                        </p>
                                                        {/* Image preview */}
                                                        <img
                                                            id="nid-front-preview"
                                                            className="mx-auto mt-4 max-h-48 object-cover hidden"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <label className="block text-gray-700 font-medium mb-2">
                                                        NID (back page)
                                                    </label>
                                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                                        <i className="fa-solid fa-address-card text-4xl text-gray-400 mb-3" />
                                                        <p className="text-gray-500 mb-2">
                                                            Drop NID (back page) here or click to select
                                                        </p>
                                                        <label
                                                            htmlFor="nid-back-upload"
                                                            className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200"
                                                        >
                                                            <span>Select File</span>
                                                            <input
                                                                id="nid-back-upload"
                                                                type="file"
                                                                className="hidden"
                                                                accept="image/*"
                                                            />
                                                        </label>
                                                        <p className="text-sm text-gray-400 mt-2">
                                                            PNG, JPG, GIF up to 5MB
                                                        </p>
                                                        {/* Image preview */}
                                                        <img
                                                            id="nid-back-preview"
                                                            className="mx-auto mt-4 max-h-48 object-cover hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                            <div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Flat Seat Date <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Select date"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Monthly rent (৳) <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Enter monthly rent"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Password <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Enter password"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 mb-2 font-medium">
                                                        Confirm password <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Confirm password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex justify-end">
                                            <button
                                                type="submit"
                                                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
                                            >
                                                Create Flat User
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default CreateFlatUserComponent