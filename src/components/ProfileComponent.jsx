import React, { useState } from "react";
import { Link } from "react-router";
import DashboardMenu from "./DashboardMenu";

const ProfileComponent = () => {
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

                    <div className="bg-white rounded-lg shadow-md p-6 gap-6 items-center">
                        {/* Profile Image */}
                        <div className="flex-shrink-0 text-center md:text-left">
                            <img
                                src="https://i.pravatar.cc/150?img=3"
                                alt="Owner Profile"
                                className="w-32 h-32 rounded-full mx-auto md:mx-0 shadow-md"
                            />
                            <h2 className="mt-4 text-xl font-bold">Mr. Abdul Karim</h2>
                            <p className="text-gray-600">Landlord</p>
                        </div>
                        {/* Profile Info */}
                        <div className="flex-1 mt-6 md:mt-0">
                            <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p>
                                    <i className="fas fa-envelope text-blue-500 mr-2" />{" "}
                                    <span className="font-medium">Email:</span> karim@example.com
                                </p>
                                <p>
                                    <i className="fas fa-phone text-green-500 mr-2" />{" "}
                                    <span className="font-medium">Phone:</span> +880 1700000000
                                </p>
                                <p>
                                    <i className="fas fa-map-marker-alt text-red-500 mr-2" />{" "}
                                    <span className="font-medium">Address:</span> Dhanmondi, Dhaka
                                </p>
                                <p>
                                    <i className="fas fa-calendar text-purple-500 mr-2" />{" "}
                                    <span className="font-medium">Member Since:</span> January 2023
                                </p>
                            </div>
                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                <div className="bg-blue-50 p-4 rounded-lg text-center shadow">
                                    <h4 className="text-lg font-bold text-blue-600">5</h4>
                                    <p className="text-gray-600">Houses</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg text-center shadow">
                                    <h4 className="text-lg font-bold text-green-600">15</h4>
                                    <p className="text-gray-600">Flats</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg text-center shadow">
                                    <h4 className="text-lg font-bold text-yellow-600">৳ 85,000</h4>
                                    <p className="text-gray-600">Monthly Income</p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg text-center shadow">
                                    <h4 className="text-lg font-bold text-red-600">2</h4>
                                    <p className="text-gray-600">Due Rent</p>
                                </div>
                            </div>
                            {/* Action Buttons */}
                            <div className="mt-6 flex gap-4">
                                <Link
                                    to="/edit-profile/"
                                    className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700"
                                >
                                    <i className="fas fa-edit mr-2" /> Edit Profile
                                </Link>
                                <button className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600">
                                    <i className="fas fa-right-from-bracket mr-2" /> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProfileComponent