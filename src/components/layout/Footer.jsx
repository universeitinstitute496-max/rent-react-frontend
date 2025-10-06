import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">House Rent Management</h3>
                    <p>Make your rental management simple and effective with our system.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="#" className="hover:text-blue-300">Features</Link></li>
                        <li><Link to="/subscription/" className="hover:text-blue-300">Pricing</Link></li>
                        <li><Link to="/contact/" className="hover:text-blue-300">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p><i className="fas fa-map-marker-alt mr-2"></i> Keranigonj, Dhaka</p>
                    <p className="my-2"><i className="fas fa-phone mr-2"></i> +880 17000000000</p>
                    <p><i className="fas fa-envelope mr-2"></i> info@barivara.com</p>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                <p>&copy; 2025 House Rent Management - All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer