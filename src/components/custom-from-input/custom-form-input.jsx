import React from "react";

const FormInput = ({
  type = "text",
  placeholder = "",
  name = "",
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <input
          // onChange={(e) => onChange(e.target.value)}
          // value={value}
          name={name}
          className="form-control"
          placeholder={placeholder}
          type={type}
          required
        />
      </div>
    </div>
  );
};

export default FormInput;
