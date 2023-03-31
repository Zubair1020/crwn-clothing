import React from "react";
import "./form-input.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="input-group">
      <input className="form-input" {...otherProps} required />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
