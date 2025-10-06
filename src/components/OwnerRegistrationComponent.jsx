import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const OwnerRegistrationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <main className="container mx-auto px-4 py-8">
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

                    <div
                        id="owner-registration-tab"
                        className="tab-content container mx-auto px-4 py-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Owner registration</h2>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter your first name"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Last Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter your last name"
                                            />
                                        </div>
                                        {/* <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Phone number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter phone number"
                                            />
                                        </div> */}
                                        {/* <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Monthly payment date <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                min={1}
                                                max={31}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter payment date (1-31)"
                                            />
                                        </div> */}

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
                                    </div>
                                    <div>
                                        {/* <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Package selection <span className="text-red-500">*</span>
                                            </label>
                                            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="">Package selection</option>
                                                <option value="basic">Basic (5 buildings) - ৳ 500/month</option>
                                                <option value="standard">
                                                    Standard (10 buildings) - ৳ 800/month
                                                </option>
                                                <option value="premium">
                                                    Premium (Unlimited) - ৳ 1200/month
                                                </option>
                                            </select>
                                        </div> */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Email address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                        {/* <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Password <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter your password"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Confirm Password <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Re-enter your password"
                                            />
                                        </div> */}

                                        <div className="mb-4">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Phone number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter phone number"
                                            />
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
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-4">Bank information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Bank Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg"
                                                placeholder="Enter bank name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Branch</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg"
                                                placeholder="Enter branch name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Account number</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg"
                                                placeholder="Enter account number"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm"
                                    >
                                        + Add bank account
                                    </button>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-4">
                                        Online payment information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">
                                                Payment gateway type
                                            </label>
                                            <select className="w-full px-4 py-2 border rounded-lg">
                                                <option value="">select</option>
                                                <option value="bkash">Bkash</option>
                                                <option value="nagad">Nagad</option>
                                                <option value="rocket">Rocket</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Account type</label>
                                            <select className="w-full px-4 py-2 border rounded-lg">
                                                <option value="">select</option>
                                                <option value="personal">Personal</option>
                                                <option value="merchant">Merchant</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Payment Number</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg"
                                                placeholder="Enter payment number"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm"
                                    >
                                        + Add online account
                                    </button>
                                </div>


                                <div className="mt-8 flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}

export default OwnerRegistrationComponent