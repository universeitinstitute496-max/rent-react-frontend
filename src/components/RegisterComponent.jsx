// RegisterComponent.jsx
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

  const [formData, setFormData] = useState({
    profile: "",
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

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
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-5">
      <div className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-2xl border border-gray-200">

        <h1 className="text-2xl font-bold text-gray-900">
          House Rent Management System
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Enter your information to create account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* PERSONAL INFO */}
          <section className="p-5 border rounded-xl bg-gray-50">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {[
                { name: "profile", label: "Profile Name" },
                { name: "firstName", label: "First Name" },
                { name: "lastName", label: "Last Name" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "nid", label: "NID Number" },
              ].map((item) => (
                <div key={item.name}>
                  <label className="text-sm text-gray-600">{item.label}</label>
                  <input
                    name={item.name}
                    type={item.type || "text"}
                    value={formData[item.name]}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 w-full mt-1 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 w-full mt-1 focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 w-full mt-1 focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>
          </section>

          {/* BANK INFO */}
          <section className="p-5 border rounded-xl bg-white">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">
              Bank Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Bank Name", name: "bankName" },
                { label: "Branch", name: "branch" },
                { label: "Account Number", name: "accNumber" },
              ].map((item) => (
                <input
                  key={item.name}
                  placeholder={item.label}
                  className="border rounded-md px-3 py-2"
                  value={bankInput[item.name]}
                  onChange={(e)=>setBankInput({...bankInput,[item.name]:e.target.value})}
                />
              ))}
            </div>

            <button onClick={addBank} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              ➕ Add Bank
            </button>

            {bankList.map((b)=>(
              <div key={b.id} className="mt-3 p-3 rounded-md bg-blue-50 border border-blue-200">
                <p className="font-semibold text-blue-700">{b.bankName} - {b.branch}</p>
                <p className="text-sm">A/C: {b.accNumber}</p>
              </div>
            ))}
          </section>

          {/* PAYMENT INFO */}
          <section className="p-5 border rounded-xl bg-white">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">
              Online Payment Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <select
                className="border rounded-md px-3 py-2"
                value={paymentInput.gatewayType}
                onChange={(e)=>setPaymentInput({...paymentInput,gatewayType:e.target.value})}
              >
                <option value="">Select Gateway</option>
                <option value="Bkash">Bkash</option>
                <option value="Nagad">Nagad</option>
                <option value="Rocket">Rocket</option>
              </select>

              <select
                className="border rounded-md px-3 py-2"
                value={paymentInput.accountType}
                onChange={(e)=>setPaymentInput({...paymentInput,accountType:e.target.value})}
              >
                <option value="">Account Type</option>
                <option value="Personal">Personal</option>
                <option value="Merchant">Merchant</option>
              </select>

              <input
                placeholder="Payment Number"
                className="border rounded-md px-3 py-2"
                value={paymentInput.paymentNumber}
                onChange={(e)=>setPaymentInput({...paymentInput,paymentNumber:e.target.value})}
              />
            </div>

            <button onClick={addPayment} className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              ➕ Add Payment
            </button>

            {paymentList.map((p)=>(
              <div key={p.id} className="mt-3 p-3 rounded-md bg-green-50 border border-green-200">
                <p className="font-semibold text-green-700">{p.gatewayType} - {p.accountType}</p>
                <p className="text-sm">Number: {p.paymentNumber}</p>
              </div>
            ))}
          </section>

          {/* SUBSCRIPTION */}
          <section className="p-5 border rounded-xl bg-gray-50">
            <h2 className="font-semibold text-gray-800 mb-4 text-lg">
              Subscription Package (Optional)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {subscriptionOptions.map((opt)=>(
                <div
                  key={opt.id}
                  onClick={()=>setSelectedSubscription(opt.id)}
                  className={`cursor-pointer p-4 border rounded-lg text-center transition 
                    ${selectedSubscription === opt.id 
                      ? "border-green-600 bg-green-100" 
                      : "hover:bg-gray-200"}`}
                >
                  <p className="font-semibold">{opt.title}</p>
                  <p className="text-sm text-gray-600">
                    {opt.price} BDT / month
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SUBMIT */}
          <div className="flex justify-between items-center">
            <Link to="/login" className="text-blue-600 hover:underline">
              Already have an account?
            </Link>

            <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              ✅ Register
            </button>
          </div>

        </form>

        {submitted && (
          <p className="text-center text-green-600 mt-4">
            ✅ Registration Completed Successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
