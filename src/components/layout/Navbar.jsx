import { useState } from "react";
import { Link } from "react-router"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <i className="fas fa-home text-2xl mr-2"></i>
          <h1 className="text-xl font-bold">House Rent Management</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white font-semibold hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white font-semibold hover:underline">
            About Us
          </Link>
          <Link
            to="/subscription"
            className="text-white font-semibold hover:underline"
          >
            Subscription
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-blue-100"
          >
            Login
          </Link>
          <Link
            to="/register/"
            className="border-2 border-white text-white px-4 py-1 rounded-lg font-semibold hover:bg-blue-700"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4 space-y-3">
          <Link
            to="/"
            className="block text-white font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/subscription/"
            className="block text-white font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Subscription
          </Link>
          <Link
            to="/login/"
            className="block bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-blue-100"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register/"
            className="block border-2 border-white text-white px-4 py-1 rounded-lg font-semibold hover:bg-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
