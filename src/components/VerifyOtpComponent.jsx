import React, { useRef } from "react";
import { useNavigate } from "react-router";

const VerifyOtpComponent = () => {
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = (e.clipboardData || window.clipboardData)
      .getData("text")
      .trim();
    if (!pasteData) return;

    for (let i = 0; i < inputsRef.current.length; i++) {
      inputsRef.current[i].value = pasteData[i] ? pasteData[i] : "";
    }
    const lastFilled = Math.min(pasteData.length, inputsRef.current.length) - 1;
    if (lastFilled >= 0) inputsRef.current[lastFilled].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputsRef.current.map((inp) => inp.value).join("");
    console.log("Entered OTP:", otp);
    navigate("/reset-password");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl/30 p-6 mt-10 mb-10">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <img src="/logo/Abinashlogo.png" alt="Logo" className="h-14 w-14 mb-2" />
        <h1 className="text-xl font-bold text-gray-800">Verify OTP</h1>
        <p className="text-sm text-gray-500">
          Enter the 6-digit OTP sent to your email
        </p>
      </div>

      {/* OTP Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* OTP Input */}
        <div className="flex justify-between space-x-2" onPaste={handlePaste}>
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => (inputsRef.current[index] = el)}
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="bg-[#e1e2e2] w-12 h-12 border rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          type="submit"
          className="w-full bg-[#0089d0] text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Verify
        </button>
      </form>

      {/* Resend OTP */}
      <p className="text-sm text-gray-600 mt-4 text-center">
        Didn’t receive the code?{" "}
        <Link
          to="/forget-password/"
          className="text-blue-600 font-medium hover:underline"
        >
          Resend OTP
        </Link>
      </p>
    </div>
  );
};

export default VerifyOtpComponent;
