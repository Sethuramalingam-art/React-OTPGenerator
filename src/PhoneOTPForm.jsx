import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOTPForm = () => {
  const [phNumber, setPhNumber] = useState(0);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const formSubmit = (event) => {
    event.preventDefault();

    const regex = /[^0-9]/g;
    if (phNumber.length < 10 || regex.test(phNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtpInput(true);
  };
  const handlePhoneNumber = (event) => {
    setPhNumber(event.target.value);
  };
  const onOtpSubmit = (otp) => {
    console.log("Your OTP" + otp);
  }
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={phNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOTPForm;
