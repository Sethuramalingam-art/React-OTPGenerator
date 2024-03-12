import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOTP = [...otp];

    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);
    const combinedOTP = newOTP.join("");
    if (combinedOTP.length === length) {
      onOtpSubmit(combinedOTP);
    }
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (index, e) => {
    console.log(inputRef.current);
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value, index) => (
        <input
          type="text"
          key={index}
          value={value}
          ref={(input) => (inputRef.current[index] = input)}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otpInput"
        />
      ))}
    </div>
  );
};

export default OtpInput;
