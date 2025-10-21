


import { Link, useNavigate } from "react-router-dom";
import React from "react";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🧠 Here you would normally check login credentials via API
    // Example: if success => navigate("/dashboard");

    // For now, just simulate success
    alert("✅ Login Successful!");
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-10 mb-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email address</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <p className="text-right mt-4 mb-4">
          <Link to="/forgot-password/" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </p>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4 text-gray-700">
        Don’t have an account?{" "}
        <Link to="/register/" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginComponent;
