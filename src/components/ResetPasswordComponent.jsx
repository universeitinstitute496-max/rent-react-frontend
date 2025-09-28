import React from 'react'
import { Link } from 'react-router'
const ResetPasswordComponent = () => {
    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl/30 p-6 mt-10 mb-10">
                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <img src="/logo/Abinashlogo.png" alt="Logo" className="h-14 w-14 mb-2" />
                    <h1 className="text-xl font-bold text-gray-800">Reset Password</h1>
                    <p className="text-sm text-gray-500">Set your new password below</p>
                </div>
                {/* Reset Password Form */}
                <form action="#" method="POST" className="space-y-4">
                    {/* New Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter new password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required=""
                        />
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirm_password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Re-enter new password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required=""
                        />
                    </div>
                    {/* Reset Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0089d0] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Reset Password
                    </button>
                </form>
                {/* Back to Login */}
                <p className="text-sm text-gray-600 mt-4 text-center">
                    Remembered your password?
                    <Link to="/login/" className="text-blue-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>

        </>
    )
}

export default ResetPasswordComponent