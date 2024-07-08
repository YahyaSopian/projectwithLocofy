import PropTypes from "prop-types";
import "./ColumnLeft.css";

const ColumnLeft = ({ className = "" }) => {
  return (
    <div className={`column-left ${className}`}>
      <div className="copy">
        <h1 className="heading7">Contact Me</h1>
        <div className="description">
          Let's Collaborate on Your Next Project
        </div>
      </div>
      <div className="feature01">
        <img className="icon-icon" alt="" src="/icon--icon.svg" />
        <div className="feature-copy">
          <div className="feature-title">Email</div>
          <div className="feature-description">alex@designs.com</div>
        </div>
      </div>
      <div className="feature011">
        <img className="icon-icon1" alt="" src="/icon--icon-1.svg" />
        <div className="feature-copy1">
          <div className="feature-title1">Phone</div>
          <div className="feature-description1">+1 (123) 456-7890</div>
        </div>
      </div>
      <div className="feature012">
        <img className="icon-icon2" alt="" src="/icon--icon-2.svg" />
        <div className="feature-copy2">
          <div className="feature-title2">Location</div>
          <div className="feature-description2">
            123 Creative St, Design City, USA
          </div>
        </div>
      </div>
    </div>
  );
};

ColumnLeft.propTypes = {
  className: PropTypes.string,
};

export default ColumnLeft;
