import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  const handleChange = () => {};
  const handleClick = () => {};
  const handleKeyDown = () => {};
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
