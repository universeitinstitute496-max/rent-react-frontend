const SubscriptionComponent = () => {
  return (
    <>
            {/* Header */}
            <header className="text-center py-10 mt-10">
                <h1 className="text-4xl font-bold text-gray-800">Choose Your Plan</h1>
                <p className="text-gray-600 mt-2">
                    Manage your houses, tenants, and payments seamlessly.
                </p>
            </header>
            {/* Subscription Plans */}
            <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-15">
                {/* Free Plan */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">Free</h2>
                    <p className="text-gray-500 mt-2">Basic features for individuals</p>
                    <p className="text-4xl font-extrabold text-gray-800 mt-4">৳0</p>
                    <ul className="mt-6 space-y-3 text-gray-600 text-sm text-left w-full">
                        <li>✔ Manage up to 1 flat</li>
                        <li>✔ Track tenant details</li>
                        <li>✖ No payment history</li>
                    </ul>
                    <button className="mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold transition">
                        Get Started
                    </button>
                </div>
                {/* Standard Plan */}
                <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-500">
                    <h2 className="text-xl font-bold text-gray-800">Standard</h2>
                    <p className="text-gray-500 mt-2">Perfect for small landlords</p>
                    <p className="text-4xl font-extrabold text-blue-600 mt-4">৳2000</p>
                    <p className="text-sm text-gray-500">Per month</p>
                    <ul className="mt-6 space-y-3 text-gray-600 text-sm text-left w-full">
                        <li>✔ Manage up to 20 houses</li>
                        <li>✔ Full tenant database</li>
                        <li>✔ Payment tracking</li>
                        <li>✔ Email reminders</li>
                    </ul>
                    <button className="mt-8 bg-blue-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                        Subscribe
                    </button>
                </div>
                {/* Premium Plan */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">Premium</h2>
                    <p className="text-gray-500 mt-2">For professional property managers</p>
                    <p className="text-4xl font-extrabold text-gray-800 mt-4">৳3000</p>
                    <p className="text-sm text-gray-500">per month</p>
                    <ul className="mt-6 space-y-3 text-gray-600 text-sm text-left w-full">
                        <li>✔ Unlimited houses</li>
                        <li>✔ Advanced tenant analytics</li>
                        <li>✔ Payment &amp; invoice history</li>
                        <li>✔ 24/7 support</li>
                    </ul>
                    <button className="mt-8 bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold transition">
                        Go Premium
                    </button>
                </div>
            </section>
        </>
  )
}

export default SubscriptionComponent;