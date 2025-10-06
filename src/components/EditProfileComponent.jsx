import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";


const EditProfileComponent = () => {
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
            <section className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Edit Your Information
                    </h2>
                    <form action="#" method="POST" className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue="Mr. Abdul Karim"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue="karim@example.com"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                defaultValue="+880 1700000000"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        {/* Address */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                defaultValue="Dhanmondi, Dhaka"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        {/* Profile Image Upload */}
                        <div className="mt-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Profile Image
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <i className="fas fa-user-circle text-6xl text-gray-400 mb-3" />
                                <p className="text-gray-500 mb-2">
                                    Drop profile image here or click to select
                                </p>
                                <label
                                    htmlFor="profile-upload"
                                    className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200"
                                >
                                    <span>Select File</span>
                                    <input
                                        id="profile-upload"
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </label>
                                <p className="text-sm text-gray-400 mt-2">PNG, JPG, GIF up to 5MB</p>
                                {/* Image preview */}
                                <img
                                    id="profile-preview"
                                    className="mx-auto mt-4 max-h-48 rounded-full object-cover hidden"
                                />
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex justify-between items-center mt-6">
                            <button
                                type="reset"
                                className="bg-gray-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-500"
                            >
                                <i className="fas fa-times mr-2" /> Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700"
                            >
                                <i className="fas fa-save mr-2" /> Save
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            </div>
        </main>
        </>
    )
}

export default EditProfileComponent