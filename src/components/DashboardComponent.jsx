import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";

const DashboardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="dashboard" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Your Dashboard</h2>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end mb-4 fixed top-100 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          <i className="fa-solid fa-bars"><span className="ml-1.5 line">M E N U</span></i> 
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Sidebar */}
        <DashboardMenu isOpen={isOpen} />

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <i className="fas fa-home text-3xl text-blue-500 mb-2" />
              <h3 className="font-semibold">Total Houses</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <i className="fas fa-building text-3xl text-green-500 mb-2" />
              <h3 className="font-semibold">Total Flats</h3>
              <p className="text-2xl font-bold">15</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <i className="fas fa-money-bill-wave text-3xl text-yellow-500 mb-2" />
              <h3 className="font-semibold">Monthly Income</h3>
              <p className="text-2xl font-bold">৳ 85,000</p>
            </div>
          </div>

          {/* Properties List */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Your Properties</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">Property Name</th>
                    <th className="p-2 text-left">Address</th>
                    <th className="p-2 text-left">Flat Count</th>
                    <th className="p-2 text-left">Total Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Green View</td>
                    <td className="p-2">Dhanmondi, Dhaka</td>
                    <td className="p-2">6</td>
                    <td className="p-2">৳ 45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Riverside</td>
                    <td className="p-2">Gulshan, Dhaka</td>
                    <td className="p-2">4</td>
                    <td className="p-2">৳ 60,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Sunflower</td>
                    <td className="p-2">Mirpur, Dhaka</td>
                    <td className="p-2">5</td>
                    <td className="p-2">৳ 35,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rent Collection */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-4">Rent Collection</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">Flat No</th>
                    <th className="p-2 text-left">Tenant</th>
                    <th className="p-2 text-left">Month</th>
                    <th className="p-2 text-left">Rent</th>
                    <th className="p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">A-1</td>
                    <td className="p-2">Rahim</td>
                    <td className="p-2">November 2023</td>
                    <td className="p-2">৳ 10,000</td>
                    <td className="p-2">
                      <span className="text-green-600">Paid</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">B-2</td>
                    <td className="p-2">Karim</td>
                    <td className="p-2">November 2023</td>
                    <td className="p-2">৳ 12,000</td>
                    <td className="p-2">
                      <span className="text-green-600">Paid</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">C-3</td>
                    <td className="p-2">Selim</td>
                    <td className="p-2">November 2023</td>
                    <td className="p-2">৳ 15,000</td>
                    <td className="p-2">
                      <span className="text-red-600">Due</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600">
                Collect Rent
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardComponent;
