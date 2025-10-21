






import React, { useState } from "react";
import { Link } from "react-router";

const RegisterComponent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    bankName: "",
    branch: "",
    accNumber: "",
    gatewayType: "",
    accountType: "",
    paymentNumber: "",
    nid: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Registration Successful!");
    setStep(4);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-3">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src="https://i.ibb.co.com/8nPGVbZ4/house-Management.png" alt="Logo" className="h-14 w-14 mb-2" />
          <h1 className="text-xl font-bold text-gray-800">
            House Rent Management System
          </h1>
          <p className="text-sm text-gray-500">
            {step === 1
              ? "Create your account"
              : step === 2
              ? "Add Bank Information"
              : step === 3
              ? "Add Online Payment Info"
              : "Registration Complete 🎉"}
          </p>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0089d0] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Next: Bank Info →
            </button>
          </form>
        )}

        {/* Step 2: Bank Info */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
                placeholder="Enter Bank Name"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Branch
              </label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                placeholder="Enter Branch Name"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                name="accNumber"
                value={formData.accNumber}
                onChange={handleChange}
                required
                placeholder="Enter Account Number"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next: Payment Info →
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Payment Info */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type of Gateway
              </label>
              <select
                name="gatewayType"
                value={formData.gatewayType}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              >
                <option value="">Select Gateway</option>
                <option value="Bkash">Bkash</option>
                <option value="Nagad">Nagad</option>
                <option value="Rocket">Rocket</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type of Account
              </label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              >
                <option value="">Select Type</option>
                <option value="Personal">Personal</option>
                <option value="Merchant">Merchant</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number
              </label>
              <input
                type="text"
                name="paymentNumber"
                value={formData.paymentNumber}
                onChange={handleChange}
                required
                placeholder="Enter Payment Number"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                NID
              </label>
              <input
                type="text"
                name="nid"
                value={formData.nid}
                onChange={handleChange}
                required
                placeholder="Enter NID Number"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Finish ✔
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Message */}
        {step === 4 && (
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold text-green-600">
              🎉 Registration Successful!
            </h2>
            <p className="text-gray-600">
              Your account has been created successfully.
            </p>
            <Link
              to="/login/"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg mt-3 hover:bg-blue-700"
            >
              Go to Login →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
