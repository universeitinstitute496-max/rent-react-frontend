import { Link } from 'react-router'

const LoginComponent = () => {
    return (
        <>
            <>
                {/* Login Form (Visible before login) */}
                <div
                    id="loginForm"
                    className="max-w-md mx-auto bg-white rounded-lg shadow-xl/30 p-6 mt-10 mb-10"
                >
                    <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email address</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <p className="text-right mt-4 mb-4">
                            <a
                                href="forgot_password.html"
                                className="text-blue-500 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </p>
                        <button
                            type="button"
                            id="loginSubmit"
                            className="bg-blue-600 text-white w-full py-2 rounded-lg font-semibold hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        If you don't have an account?{" "}
                        <Link to="/register/" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </>

        </>
    )
}

export default LoginComponent