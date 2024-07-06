import PropTypes from "prop-types";
import "./CopyComponent.css";

const CopyComponent = ({ className = "", heading, subheading }) => {
  return (
    <div className={`copy-component2 ${className}`}>
      <div className="heading2">{heading}</div>
      <div className="item-text">
        <div className="subheading1">{subheading}</div>
      </div>
    </div>
  );
};

CopyComponent.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default CopyComponent;
