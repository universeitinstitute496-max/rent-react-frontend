import React from "react";

const HomeComponent = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        House Rent Management System
                    </h2>
                    <p className="mb-6 text-lg">
                        Store All Your Home Rental Information in One Place.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-blue-400/40  rounded-lg p-4">
                            <i className="fas fa-home text-3xl mb-2" />
                            <p className="text-white">Add Houses and Flats</p>
                        </div>
                        <div className="bg-blue-400/40 rounded-lg p-4">
                            <i className="fas fa-money-bill-wave text-3xl mb-2" />
                            <p>Keep Track of Rent Collection</p>
                        </div>
                        <div className="bg-blue-400/40 rounded-lg p-4">
                            <i className="fas fa-chart-line text-3xl mb-2" />
                            <p>See All From The Dashboard</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-center mb-8">
                    {" "}
                    System Features{" "}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center property-card">
                        <i className="fas fa-home text-4xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            House and Flat Management
                        </h3>
                        <p className="text-gray-600">
                            Easily store and manage all your house and flat information.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center property-card">
                        <i className="fas fa-money-bill-wave text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Management of Rent Collection
                        </h3>
                        <p className="text-gray-600">
                            Keep complete records of who has paid rent and who has not.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center property-card">
                        <i className="fas fa-chart-pie text-4xl text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Analysis and Reporting
                        </h3>
                        <p className="text-gray-600">
                            View complete analysis and monthly reports of your income.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center property-card">
                        <i className="fas fa-mobile-alt text-4xl text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
                        <p className="text-gray-600">
                            Access from any device Fully responsive design
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center property-card">
                        <i className="fas fa-bell text-4xl text-yellow-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Auto Reminder</h3>
                        <p className="text-gray-600">
                            Send Automatic Reminders to Tenants to Pay Rent
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center property-card">
                        <i className="fas fa-database text-4xl text-indigo-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Data Backup</h3>
                        <p className="text-gray-600">
                            All your data is kept safely in cloud storage.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeComponent;
