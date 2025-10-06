import React from 'react'

const AboutUsComponent = () => {
    return (
     
            <>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-xl max-w-2xl mx-auto">
                            We are dedicated to simplifying rental property management for landlords
                            across Bangladesh
                        </p>
                    </div>
                </section>
                {/* Our Story Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                                <p className="text-gray-600 mb-4">
                                    Founded in 2023, House Rent Management System was born out of a
                                    simple observation: property owners in Bangladesh struggle with
                                    managing multiple rental properties, tracking rent payments, and
                                    maintaining proper records.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Our team of developers and property management experts came together
                                    to create a comprehensive solution that would simplify the entire
                                    process, saving time and reducing errors for property owners.
                                </p>
                                <p className="text-gray-600">
                                    Today, we serve hundreds of property owners across Bangladesh,
                                    helping them manage their rental properties more efficiently and
                                    effectively.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-blue-100 rounded-lg p-8 property-card">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                                500+
                                            </div>
                                            <div className="text-gray-700">Happy Customers</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-green-600 mb-2">
                                                1500+
                                            </div>
                                            <div className="text-gray-700">Properties Managed</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-purple-600 mb-2">
                                                ৳ 5Cr+
                                            </div>
                                            <div className="text-gray-700">Rent Processed</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-yellow-600 mb-2">
                                                98%
                                            </div>
                                            <div className="text-gray-700">Satisfaction Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Mission & Vision Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white rounded-lg shadow-md p-8 property-card">
                                <div className="text-center mb-6">
                                    <i className="fas fa-bullseye text-5xl text-blue-500 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 text-center">
                                    To empower property owners in Bangladesh with innovative technology
                                    that simplifies rental management, increases efficiency, and
                                    maximizes returns on their investments.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-8 property-card">
                                <div className="text-center mb-6">
                                    <i className="fas fa-eye text-5xl text-green-500 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 text-center">
                                    To become Bangladesh's most trusted rental management platform,
                                    transforming how property owners manage their rentals through
                                    technology-driven solutions that are accessible to everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Why Choose Us Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            Why Choose Us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-lg p-6 property-card text-center">
                                <i className="fas fa-shield-alt text-4xl text-blue-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Secure &amp; Reliable</h3>
                                <p className="text-gray-600">
                                    Your data is protected with enterprise-grade security measures and
                                    regular backups.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 property-card text-center">
                                <i className="fas fa-tachometer-alt text-4xl text-green-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
                                <p className="text-gray-600">
                                    Intuitive interface designed specifically for Bangladeshi property
                                    owners.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 property-card text-center">
                                <i className="fas fa-headset text-4xl text-purple-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Bangla Support</h3>
                                <p className="text-gray-600">
                                    Get support in Bangla from our dedicated customer service team.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 property-card text-center">
                                <i className="fas fa-mobile-alt text-4xl text-red-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
                                <p className="text-gray-600">
                                    Access your rental information from any device, anywhere.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 property-card text-center">
                                <i className="fas fa-rupee-sign text-4xl text-yellow-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
                                <p className="text-gray-600">
                                    Affordable pricing plans suitable for individual owners to large
                                    enterprises.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 property-card text-center">
                                <i className="fas fa-sync text-4xl text-indigo-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
                                <p className="text-gray-600">
                                    We continuously improve our system based on user feedback and market
                                    needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            Meet Our Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden property-card">
                                <div className="h-48 bg-blue-100 flex items-center justify-center">
                                    <i className="fas fa-user text-6xl text-blue-500" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-1">Rahim Ahmed</h3>
                                    <p className="text-blue-600 mb-3">CEO &amp; Founder</p>
                                    <p className="text-gray-600 text-sm">
                                        With 10+ years in real estate, Rahim leads our vision and
                                        strategy.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden property-card">
                                <div className="h-48 bg-green-100 flex items-center justify-center">
                                    <i className="fas fa-user text-6xl text-green-500" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-1">Fatima Begum</h3>
                                    <p className="text-green-600 mb-3">CTO</p>
                                    <p className="text-gray-600 text-sm">
                                        Fatima oversees our technology development with 8+ years of
                                        experience.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden property-card">
                                <div className="h-48 bg-purple-100 flex items-center justify-center">
                                    <i className="fas fa-user text-6xl text-purple-500" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-1">Karim Uddin</h3>
                                    <p className="text-purple-600 mb-3">Head of Customer Success</p>
                                    <p className="text-gray-600 text-sm">
                                        Karim ensures our customers get the best experience with our
                                        platform.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden property-card">
                                <div className="h-48 bg-yellow-100 flex items-center justify-center">
                                    <i className="fas fa-user text-6xl text-yellow-500" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-1">Ayesha Khan</h3>
                                    <p className="text-yellow-600 mb-3">Product Manager</p>
                                    <p className="text-gray-600 text-sm">
                                        Ayesha drives product development based on market research and
                                        user feedback.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-16 gradient-bg text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Simplify Your Rental Management?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Join hundreds of property owners who are already using our system to
                            manage their rentals efficiently.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="owner_registration.html"
                                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 text-lg"
                            >
                                Get Started Today
                            </a>
                            <a
                                href="contact.html"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 text-lg"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </>

    )
}

export default AboutUsComponent