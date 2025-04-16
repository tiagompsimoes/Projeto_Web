import React from 'react';

const SubmitButton = ({ text = "Login" }) => {
  return (
    <div className="d-grid">
      <button
        type="submit"
        className="btn text-white py-2 rounded-0"
        style={{ backgroundColor: "#0046AD" }}
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
