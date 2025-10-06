import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";
const AddHouseComponent = () => {
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
                    {/* Step 1 */}
                    <div className="w-full" id="step-1">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-blue-600 text-white px-6 py-4">
                                <h2 className="text-2xl font-bold">Add New House</h2>
                                <p>Fill in your house information correctly</p>
                            </div>
                            {/* Progress Steps */}
                            {/* <div className="px-6 py-4 border-b">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center text-blue-600">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            1
                                        </div>
                                        <span className="ml-2">Basic Information</span>
                                    </div>
                                    <div className="h-1 w-1/4 bg-blue-100 mx-2" />
                                    <div className="flex items-center text-gray-400">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                            2
                                        </div>
                                        <span className="ml-2">Flat Information</span>
                                    </div>
                                    <div className="h-1 w-1/4 bg-gray-100 mx-2" />
                                    <div className="flex items-center text-gray-400">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                            3
                                        </div>
                                        <span className="ml-2">Confirmation</span>
                                    </div>
                                </div>
                            </div> */}
                            {/* Form Content */}
                            <form className="px-6 py-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div>
                                        {/* House Name */}
                                        <div className="mb-5">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                House Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter house name"
                                                className="w-full px-4 py-3 border rounded-lg input-field focus:border-blue-500"
                                            />
                                        </div>
                                        {/* Address */}
                                        <div className="mb-5">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Full Address <span className="text-red-500">*</span>
                                            </label>
                                            <textarea style={{ height: '147px' }}
                                                placeholder="Enter full house address"
                                                className="w-full px-4 py-3 border rounded-lg input-field focus:border-blue-500 h-24"
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* Area */}
                                        <div className="mb-5">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                City <span className="text-red-500">*</span>
                                            </label>
                                            <select className="w-full px-4 py-3 border rounded-lg input-field focus:border-blue-500">
                                                <option value="">Select City</option>
                                                <option value="Dhaka">Dhaka</option>
                                                <option value="CTG">CTG</option>
                                                <option value="Khulna">Khulna</option>
                                                <option value="Mirpur">Mirpur</option>
                                                <option value="Uttara">Uttara</option>
                                                <option value="Others">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Right Column */}
                                    <div>
                                        {/* Number of Flats */}
                                        <div className="mb-5">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Number of Flats <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="flatNumber"
                                                type="number"
                                                min={1}
                                                placeholder="Total number of flats"
                                                className="w-full px-4 py-3 border rounded-lg input-field focus:border-blue-500"
                                            />
                                        </div>
                                        {/* Total Floors */}
                                        <div className="mb-5">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Total Floors <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="floorNumber"
                                                type="number"
                                                min={1}
                                                placeholder="Total number of floors"
                                                className="w-full px-4 py-3 border rounded-lg input-field focus:border-blue-500"
                                            />
                                        </div>
                                        {/* Rent per Flat */}
                                        <div className="mb-5">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Rent per Flat (৳) <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                min={0}
                                                placeholder="Rent per flat"
                                                className="w-full px-4 py-3 border rounded-lg input-field focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 mb-2 font-medium">
                                                Area <span className="text-red-500">*</span>
                                            </label>
                                            <select className="w-full px-4 py-3 border rounded-lg input-field focus:border-blue-500">
                                                <option value="">Select Area</option>
                                                <option value="Dhanmondi">Dhanmondi</option>
                                                <option value="Gulshan">Gulshan</option>
                                                <option value="Banani">Banani</option>
                                                <option value="Mirpur">Mirpur</option>
                                                <option value="Uttara">Uttara</option>
                                                <option value="Others">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Upload */}
                                <div className="mt-8">
                                    <label className="block text-gray-700 mb-3 font-medium">
                                        Upload House Image
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                        <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-3" />
                                        <p className="text-gray-500 mb-2">
                                            Drop image here or click to select
                                        </p>
                                        <label
                                            htmlFor="file-upload"
                                            className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200"
                                        >
                                            <span>Select File</span>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                className="hidden"
                                                multiple=""
                                            />
                                        </label>
                                        <p className="text-sm text-gray-400 mt-2">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                                {/* Form Buttons */}
                                <div className="mt-10 flex justify-end">
                                    
                                    <button
                                        type="submit"
                                        onclick="nextPage()"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 "
                                    >
                                        Submit <i className="fas fa-arrow-right ml-2" />
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

export default AddHouseComponent