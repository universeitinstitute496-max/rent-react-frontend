import React from 'react'

const ContactUsComponent = () => {
    return (
        <>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Get in touch with our team for any queries or support
                    </p>
                </div>
            </section>
            {/* Contact Form & Info Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Send Us a Message
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 form-input"
                                        placeholder="Enter your full name"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 form-input"
                                        placeholder="Enter your phone number"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 form-input"
                                        placeholder="Enter your message"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* Contact Information */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Get In Touch
                            </h2>
                            <p className="text-gray-600 mb-8">
                                We're here to help with any questions about our rental management
                                system. Reach out to us through any of the following channels.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start bg-blue-50 p-6 rounded-lg contact-info-card">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-map-marker-alt text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                            Our Office
                                        </h3>
                                        <p className="text-gray-600">Keranigonj, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-green-50 p-6 rounded-lg contact-info-card">
                                    <div className="bg-green-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-phone text-green-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                            Phone Number
                                        </h3>
                                        <p className="text-gray-600">+880 1700000000</p>
                                        <p className="text-gray-600">+880 1800000000</p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-purple-50 p-6 rounded-lg contact-info-card">
                                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-envelope text-purple-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                            Email Address
                                        </h3>
                                        <p className="text-gray-600">info@barivara.com</p>
                                        <p className="text-gray-600">support@barivara.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-yellow-50 p-6 rounded-lg contact-info-card">
                                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                        <i className="fas fa-clock text-yellow-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                            Office Hours
                                        </h3>
                                        <p className="text-gray-600">
                                            Saturday - Thursday: 9:00 AM - 6:00 PM
                                        </p>
                                        <p className="text-gray-600">Friday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Map Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Find Us
                    </h2>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Embedded Google Map */}
                        <div className="h-96 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5983460988937!2d90.36106361445673!3d23.79731309290065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ba2b0035cb%3A0x96ce9b4c6bc1c9c1!2sKeraniganj%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1641562160644!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Find quick answers to common questions about our rental management
                        system
                    </p>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {/* FAQ Item 1 */}
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden faq-item">
                                <button className="faq-question w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        How do I register as a property owner?
                                    </h3>
                                    <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300" />
                                </button>
                                <div className="faq-answer px-6 py-4 text-gray-600 border-t border-gray-200 hidden">
                                    <p>
                                        You can register by clicking on the "Register" button at the top
                                        of the page and filling out the owner registration form. The
                                        process takes less than 5 minutes and requires basic information
                                        about you and your properties.
                                    </p>
                                    <div className="mt-3 flex items-center text-sm text-blue-600">
                                        <i className="fas fa-clock mr-2" />
                                        <span>Registration takes less than 5 minutes</span>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item 2 */}
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden faq-item">
                                <button className="faq-question w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Is there a mobile app available?
                                    </h3>
                                    <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300" />
                                </button>
                                <div className="faq-answer px-6 py-4 text-gray-600 border-t border-gray-200 hidden">
                                    <p>
                                        Currently, we don't have a dedicated mobile app, but our website
                                        is fully responsive and works perfectly on all mobile devices.
                                        You can access all features through your mobile browser.
                                    </p>
                                    <div className="mt-3 flex items-center text-sm text-green-600">
                                        <i className="fas fa-mobile-alt mr-2" />
                                        <span>Fully optimized for mobile browsers</span>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item 3 */}
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden faq-item">
                                <button className="faq-question w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        What payment methods do you accept?
                                    </h3>
                                    <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300" />
                                </button>
                                <div className="faq-answer px-6 py-4 text-gray-600 border-t border-gray-200 hidden">
                                    <p>
                                        We accept various payment methods including bKash, Nagad,
                                        Rocket, bank transfers, and credit/debit cards for our premium
                                        services. All transactions are secure and encrypted.
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                            bKash
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                            Nagad
                                        </span>
                                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                                            Rocket
                                        </span>
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                                            Bank Transfer
                                        </span>
                                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                                            Cards
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item 4 */}
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden faq-item">
                                <button className="faq-question w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Can I manage multiple properties with one account?
                                    </h3>
                                    <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300" />
                                </button>
                                <div className="faq-answer px-6 py-4 text-gray-600 border-t border-gray-200 hidden">
                                    <p>
                                        Yes, you can manage multiple rental properties from a single
                                        account. Our system allows you to organize properties by
                                        location, type, and status. You can also set different rental
                                        rates and terms for each property.
                                    </p>
                                    <div className="mt-3 flex items-center text-sm text-purple-600">
                                        <i className="fas fa-layer-group mr-2" />
                                        <span>Unlimited properties per account</span>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item 5 */}
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden faq-item">
                                <button className="faq-question w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        How secure is my data?
                                    </h3>
                                    <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300" />
                                </button>
                                <div className="faq-answer px-6 py-4 text-gray-600 border-t border-gray-200 hidden">
                                    <p>
                                        We take data security very seriously. All your information is
                                        encrypted using industry-standard protocols, and we perform
                                        regular security audits. We never share your personal or
                                        property data with third parties without your consent.
                                    </p>
                                    <div className="mt-3 flex items-center text-sm text-green-600">
                                        <i className="fas fa-shield-alt mr-2" />
                                        <span>Bank-level encryption and security</span>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item 6 */}
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden faq-item">
                                <button className="faq-question w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        What happens if I need technical support?
                                    </h3>
                                    <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300" />
                                </button>
                                <div className="faq-answer px-6 py-4 text-gray-600 border-t border-gray-200 hidden">
                                    <p>
                                        We offer comprehensive technical support through multiple
                                        channels. You can contact our support team via phone, email, or
                                        live chat during business hours. We also have an extensive
                                        knowledge base with tutorials and guides.
                                    </p>
                                    <div className="mt-3 flex items-center text-sm text-blue-600">
                                        <i className="fas fa-headset mr-2" />
                                        <span>Support available in both Bangla and English</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Still Have Questions */}
                        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                            <i className="fas fa-question-circle text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Still have questions?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Can't find the answer you're looking for? Please chat with our
                                friendly team.
                            </p>
                            <a
                                href="contact.html"
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-16 gradient-bg text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Our customer support team is available during office hours to help you
                        with any urgent issues.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="tel:+8801700000000"
                            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 text-lg"
                        >
                            <i className="fas fa-phone mr-2" /> Call Now
                        </a>
                        <a
                            href="mailto:support@barivara.com"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 text-lg"
                        >
                            <i className="fas fa-envelope mr-2" /> Email Support
                        </a>
                    </div>
                </div>
            </section>
        </>


    )
}

export default ContactUsComponent