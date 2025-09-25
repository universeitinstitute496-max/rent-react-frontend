import { Link } from 'react-router';

const Navbar = () => {
  return (
    <>
        <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <i className="fas fa-home text-2xl mr-2"></i>
                    <h1 className="text-xl font-bold">House Rent Management</h1>
                </Link>
                
                <div className="flex items-center space-x-4">
                    <Link to="/login/" id="loginBtn" className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-blue-100">Login</Link>
                    <Link to="/register/" id="registerBtn" className="outline-2 outline-offset-2 outline-white-500 text-white px-4 py-1 rounded-lg font-semibold">Register</Link>
                    <button className="md:hidden" id="menu-toggle">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </header>

    </>
  )
}

export default Navbar