import Input from "./Input";
import PropTypes from "prop-types";
import "./ColumnRight.css";

const ColumnRight = ({ className = "" }) => {
  return (
    <div className={`column-right ${className}`}>
      <Input label="Full Name" />
      <Input
        label="Email Address"
        propMinHeight="unset"
        inputMinWidth="230px"
      />
      <div className="input1">
        <div className="label1">Your Message</div>
        <textarea className="input-form1" />
      </div>
      <button className="button2">
        <div className="text-container3">
          <div className="cta3">Send</div>
        </div>
      </button>
    </div>
  );
};

ColumnRight.propTypes = {
  className: PropTypes.string,
};

export default ColumnRight;
