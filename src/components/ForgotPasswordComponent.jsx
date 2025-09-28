import React from 'react'
import { Link } from 'react-router'
const ForgotPasswordComponent = () => {
    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl/30 p-6 mt-10 mb-10">
                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <img src="#" alt="Logo" className="h-14 w-14 mb-2" />
                    <h1 className="text-xl font-bold text-gray-800">Forgot Password</h1>
                    <p className="text-sm text-gray-500">Reset your password</p>
                </div>
                {/* Forget Password Form */}
                <form action="#" method="POST" className="space-y-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Registered Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your registered email"
                            className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
                            required=""
                        />
                    </div>
                    {/* Submit Button */}
                    {/* <button type="submit"
                        class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Send
                    </button> */}
                    <Link
                        to="/verify-otp/"
                        className="block w-full bg-[#0089d0] text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Send
                    </Link>
                </form>
                {/* Back to Login */}
                <p className="text-sm text-gray-600 mt-4 text-center">
                    Remember your password? 
                    <Link to="/login/" className="text-blue-600 font-medium hover:underline">
                        Back to Login
                    </Link>
                </p>
            </div>

        </>
    )
}

export default ForgotPasswordComponent