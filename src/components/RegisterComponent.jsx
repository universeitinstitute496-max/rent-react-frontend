import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const subscriptionOptions = [
  { id: "none", title: "No Package", price: 0 },
  { id: "basic", title: "Basic", price: 0 },
  { id: "standard", title: "Standard", price: 299 },
  { id: "premium", title: "Premium", price: 599 },
];

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    profileImage: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    nid: "",
  });

  const [bankInput, setBankInput] = useState({
    bankName: "",
    branch: "",
    accNumber: "",
  });
  const [bankList, setBankList] = useState([]);

  const [paymentInput, setPaymentInput] = useState({
    gatewayType: "",
    accountType: "",
    paymentNumber: "",
  });
  const [paymentList, setPaymentList] = useState([]);

  const [selectedSubscription, setSelectedSubscription] = useState("none");
  const [submitted, setSubmitted] = useState(false);

  // Handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, profileImage: imageUrl }));
    }
  };

  const addBank = (e) => {
    e.preventDefault();
    if (!bankInput.bankName || !bankInput.branch || !bankInput.accNumber) return;
    setBankList([...bankList, { ...bankInput, id: Date.now() }]);
    setBankInput({ bankName: "", branch: "", accNumber: "" });
  };

  const addPayment = (e) => {
    e.preventDefault();
    if (!paymentInput.gatewayType || !paymentInput.accountType || !paymentInput.paymentNumber) return;
    setPaymentList([...paymentList, { ...paymentInput, id: Date.now() }]);
    setPaymentInput({ gatewayType: "", accountType: "", paymentNumber: "" });
  };

  // Register personal info & go to step 2
  const handlePersonalRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // You can save personal info to server here if needed
    setStep(2);
  };

  // Final submit registration
  const handleFinalSubmit = (e) => {
    e.preventDefault();

    const payload = {
      personalInfo: formData,
      bankInfo: bankList,
      paymentInfo: paymentList,
      subscription: selectedSubscription,
    };

    console.log(payload);
    setSubmitted(true);

    selectedSubscription !== "none"
      ? navigate("/dashboard")
      : navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-3">
      <div className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-xl border">

        <h1 className="text-2xl font-bold text-gray-900 text-center">
          House Rent Management System
        </h1>
        <p className="text-gray-600 text-sm text-center mb-6">
          {step === 1 ? "Step 1: Personal Information" : "Step 2: Financial Information & Subscription"}
        </p>

        {/* STEP 1: Personal Info */}
        {step === 1 && (
          <form onSubmit={handlePersonalRegister} className="space-y-6">
            {/* Profile Picture */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Profile Picture
              </label>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="profilePic"
                  className="cursor-pointer w-16 h-16 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center hover:border-blue-600 transition overflow-hidden bg-gray-50 hover:bg-gray-100"
                >
                  {formData.profileImage ? (
                    <img
                      src={formData.profileImage}
                      className="w-full h-full object-cover"
                      alt="Profile"
                    />
                  ) : (
                    <span className="text-[10px] text-gray-500 text-center leading-none">
                      Upload
                    </span>
                  )}
                </label>
                <input
                  id="profilePic"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <p className="text-[12px] text-gray-600">JPG / PNG, Max 2MB</p>
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "firstName", label: "First Name" },
                { name: "lastName", label: "Last Name" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "nid", label: "NID Number" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-xs text-gray-600">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type || "text"}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 w-full focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="text-xs text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 w-full focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 w-full focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                ✅ Register
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Bank + Payment + Subscription */}
        {step === 2 && (
          <form onSubmit={handleFinalSubmit} className="space-y-6">
            {/* BANK INFO */}
            <section className="p-5 border rounded-xl bg-white">
              <h2 className="font-semibold text-gray-800 mb-3 text-lg">
                Bank Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  placeholder="Bank Name"
                  className="border rounded-md px-3 py-2"
                  value={bankInput.bankName}
                  onChange={(e) =>
                    setBankInput({ ...bankInput, bankName: e.target.value })
                  }
                  required
                />
                <input
                  placeholder="Branch"
                  className="border rounded-md px-3 py-2"
                  value={bankInput.branch}
                  onChange={(e) =>
                    setBankInput({ ...bankInput, branch: e.target.value })
                  }
                  required
                />
                <input
                  placeholder="Account Number"
                  className="border rounded-md px-3 py-2"
                  value={bankInput.accNumber}
                  onChange={(e) =>
                    setBankInput({ ...bankInput, accNumber: e.target.value })
                  }
                  required
                />
              </div>
              <button
                onClick={addBank}
                type="button"
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                ➕ Add Bank
              </button>

              {bankList.map((b) => (
                <div
                  key={b.id}
                  className="mt-2 p-3 rounded-md bg-blue-50 border border-blue-200"
                >
                  <p className="font-semibold text-blue-700">
                    {b.bankName} - {b.branch}
                  </p>
                  <p className="text-sm">A/C: {b.accNumber}</p>
                </div>
              ))}
            </section>

            {/* PAYMENT INFO */}
            <section className="p-5 border rounded-xl bg-white">
              <h2 className="font-semibold text-gray-800 mb-3 text-lg">
                Online Payment Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  className="border rounded-md px-3 py-2"
                  value={paymentInput.gatewayType}
                  onChange={(e) =>
                    setPaymentInput({ ...paymentInput, gatewayType: e.target.value })
                  }
                  required
                >
                  <option value="">Payment Gateway</option>
                  <option value="Bkash">Bkash</option>
                  <option value="Nagad">Nagad</option>
                  <option value="Rocket">Rocket</option>
                </select>

                <select
                  className="border rounded-md px-3 py-2"
                  value={paymentInput.accountType}
                  onChange={(e) =>
                    setPaymentInput({ ...paymentInput, accountType: e.target.value })
                  }
                  required
                >
                  <option value="">Account Type</option>
                  <option value="Personal">Personal</option>
                  <option value="Merchant">Merchant</option>
                </select>

                <input
                  placeholder="Payment Number"
                  className="border rounded-md px-3 py-2"
                  value={paymentInput.paymentNumber}
                  onChange={(e) =>
                    setPaymentInput({
                      ...paymentInput,
                      paymentNumber: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <button
                onClick={addPayment}
                type="button"
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                ➕ Add Payment Info
              </button>

              {paymentList.map((p) => (
                <div
                  key={p.id}
                  className="mt-2 p-3 rounded-md bg-green-50 border border-green-200"
                >
                  <p className="font-semibold text-green-700">
                    {p.gatewayType} - {p.accountType}
                  </p>
                  <p className="text-sm">Number: {p.paymentNumber}</p>
                </div>
              ))}
            </section>

            {/* SUBSCRIPTION */}
            <section className="p-5 border rounded-xl bg-gray-50">
              <h2 className="font-semibold text-gray-800 mb-3 text-lg">
                Subscription Package (Optional)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {subscriptionOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedSubscription(opt.id)}
                    className={`cursor-pointer p-4 border rounded-lg text-center transition 
                    ${
                      selectedSubscription === opt.id
                        ? "border-green-600 bg-green-100"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <p className="font-semibold">{opt.title}</p>
                    <p className="text-sm text-gray-600">{opt.price} BDT / month</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 border rounded-lg"
              >
                ⬅ Back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
              >
                ✅ Final Submit
              </button>
            </div>
          </form>
        )}

        {submitted && (
          <p className="text-center text-green-600 font-semibold mt-4">
            ✅ Registration Completed Successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
