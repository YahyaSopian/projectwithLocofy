import PropTypes from "prop-types";
import "./TypeVerticalHeroCentered.css";

const TypeVerticalHeroCentered = ({ className = "" }) => {
  return (
    <section
      className={`typevertical-hero-centered ${className}`}
      data-scroll-to="typeVerticalHeroCentered"
    >
      <div className="image-container">
        <img
          className="image-lummi"
          loading="lazy"
          alt=""
          src="/image--lummi@2x.png"
        />
      </div>
      <div className="copy-component1">
        <div className="heading-text1">
          <h1 className="heading1">
            Discover Exceptional Designs and Projects Here
          </h1>
          <div className="subheading">{`Diving Deep into User Experience & Visual Design`}</div>
        </div>
        <button className="cta-button1">
          <div className="text-container2">
            <div className="cta2">View My Work</div>
          </div>
        </button>
      </div>
    </section>
  );
};

TypeVerticalHeroCentered.propTypes = {
  className: PropTypes.string,
};

export default TypeVerticalHeroCentered;
