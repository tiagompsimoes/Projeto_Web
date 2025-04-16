import React from 'react';

const FormInput = ({ id, label, type, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label" style={{ color: "#0046AD" }}>
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-0 border-primary"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
