import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  className = "",
  label,
  placeholderText,
  propMinHeight,
  inputMinWidth,
}) => {
  const inputStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
      minWidth: inputMinWidth,
    };
  }, [propMinHeight, inputMinWidth]);

  const input1Style = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className={`input ${className}`} style={inputStyle}>
      <div className="label">{label}</div>
      <input className="input-form" type="text" />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholderText: PropTypes.string,

  /** Style props */
  propMinHeight: PropTypes.any,
  inputMinWidth: PropTypes.any,
};

export default Input;
