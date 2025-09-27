
import { Link } from 'react-router';

const RegisterComponent = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-xl/30  rounded-lg p-10 w-full max-w-md">
                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <img src="#" alt="Logo" className="h-14 w-14 mb-2" />
                    <h1 className="text-xl font-bold text-gray-800">House Rent Management System</h1>
                    <p className="text-sm text-gray-500">Create your account</p>
                </div>
                {/* Registration Form */}
                <form action="#" method="POST" className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className=" mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className=" mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your Number"
                            className=" mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className=" mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter password"
                            className=" mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0089d0] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>
                {/* Login Link */}
                <p className="text-sm text-gray-600 mt-4 text-center">
                    Already have an account?
                    <Link to="/login/" className="text-blue-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default RegisterComponent