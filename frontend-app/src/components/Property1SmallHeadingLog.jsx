import PropTypes from "prop-types";
import "./Property1SmallHeadingLog.css";

const Property1SmallHeadingLog = ({ className = "" }) => {
  return (
    <section className={`property-1small-heading-log ${className}`}>
      <div className="heading-wrapper">
        <div className="heading6">Trusted by Clients Worldwide</div>
      </div>
      <div className="partners">
        <img
          className="company-logo-icon"
          loading="lazy"
          alt=""
          src="/company-logo.svg"
        />
        <img
          className="company-logo-icon1"
          loading="lazy"
          alt=""
          src="/company-logo-1.svg"
        />
        <img
          className="company-logo-icon2"
          loading="lazy"
          alt=""
          src="/company-logo-2.svg"
        />
        <img
          className="company-logo-icon3"
          loading="lazy"
          alt=""
          src="/company-logo-3.svg"
        />
        <img
          className="company-logo-icon4"
          loading="lazy"
          alt=""
          src="/company-logo-4.svg"
        />
        <img
          className="company-logo-icon5"
          loading="lazy"
          alt=""
          src="/company-logo-5.svg"
        />
        <img
          className="company-logo-icon6"
          loading="lazy"
          alt=""
          src="/company-logo-6.svg"
        />
        <img
          className="company-logo-icon7"
          loading="lazy"
          alt=""
          src="/company-logo-7.svg"
        />
        <img
          className="company-logo-icon8"
          loading="lazy"
          alt=""
          src="/company-logo-8.svg"
        />
        <img
          className="company-logo-icon9"
          loading="lazy"
          alt=""
          src="/company-logo-9.svg"
        />
      </div>
    </section>
  );
};

Property1SmallHeadingLog.propTypes = {
  className: PropTypes.string,
};

export default Property1SmallHeadingLog;
