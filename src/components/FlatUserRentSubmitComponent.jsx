import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const FlatUserRentSubmitComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
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

                    {/* Main Content */}
                    <div className="bg-white shadow-xl rounded-xl p-8 w-full">
                        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                            💰 Rent Payment
                        </h2>

                        <form className="space-y-6">
                            {/* 2 Column Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Tenant Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Tenant Name
                                    </label>
                                    <input
                                        type="text"
                                        name="tenant_name"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                {/* Type of Rental */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Type of Rental
                                    </label>
                                    <select
                                        name="rental_type"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        required
                                    >
                                        <option value="">-- Select --</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Family">Family</option>
                                        <option value="Office">Office</option>
                                    </select>
                                </div>

                                {/* Flat Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Flat Number
                                    </label>
                                    <input
                                        type="text"
                                        name="flat_number"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Ex: A-101"
                                        required
                                    />
                                </div>

                                {/* Building */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Building
                                    </label>
                                    <input
                                        type="text"
                                        name="building"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Green Villa"
                                        required
                                    />
                                </div>

                                {/* Rent Month */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Month
                                    </label>
                                    <input
                                        type="month"
                                        name="rent_month"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        required
                                    />
                                </div>

                                {/* Monthly Rent */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Monthly Rent (BDT)
                                    </label>
                                    <input
                                        type="number"
                                        name="monthly_rent"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Ex: 10000"
                                        required
                                    />
                                </div>

                                {/* Gas Bill */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Monthly Gas Bill (BDT)
                                    </label>
                                    <input
                                        type="number"
                                        name="gas_bill"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Ex: 1000"
                                    />
                                </div>

                                {/* Service Fee */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Service Fee (BDT)
                                    </label>
                                    <input
                                        type="number"
                                        name="service_fee"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Ex: 500"
                                    />
                                </div>

                                {/* Other Cost */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Other Cost (BDT)
                                    </label>
                                    <input
                                        type="number"
                                        name="other_cost"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Ex: 200"
                                    />
                                </div>

                                {/* Payment Method */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Payment Method
                                    </label>
                                    <select
                                        name="payment_method"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                    >
                                        <option value="Cash">Cash</option>
                                        <option value="Bkash">Bkash</option>
                                        <option value="Nagad">Nagad</option>
                                        <option value="Bank">Bank Transfer</option>
                                    </select>
                                </div>

                                {/* Transaction ID */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Transaction ID (if online)
                                    </label>
                                    <input
                                        type="text"
                                        name="transaction_id"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                                        placeholder="Enter transaction ID"
                                    />
                                </div>
                            </div>

                            {/* Image Upload (Full width) */}
                            <div className="mt-8">
                                <label className="block text-gray-700 mb-3 font-medium">
                                    Electricity Bill Copy
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <p className="text-gray-500 mb-2">
                                        Drop image here or click to select
                                    </p>
                                    <label
                                        htmlFor="file-upload"
                                        className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-200"
                                    >
                                        <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-3" />
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                            multiple
                                        />
                                    </label>
                                    <p className="text-sm text-gray-400 mt-2">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Submit Rent
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FlatUserRentSubmitComponent;
