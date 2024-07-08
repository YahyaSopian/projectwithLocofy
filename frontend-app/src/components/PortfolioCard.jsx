import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PortfolioCard.css";

const PortfolioCard = ({
  className = "",
  imageLummi,
  heading,
  quisLaboreUtLaboreProiden,
  propMinWidth,
  icon,
  portfolioCardPadding,
  portfolioCardFlex,
  portfolioCardFlexGrow,
}) => {
  const portfolioCardStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      padding: portfolioCardPadding,
      flex: portfolioCardFlex,
      flexGrow: portfolioCardFlexGrow,
    };
  }, [
    propMinWidth,
    portfolioCardPadding,
    portfolioCardFlex,
    portfolioCardFlexGrow,
  ]);

  return (
    <div className={`portfolio-card ${className}`} style={portfolioCardStyle}>
      <div className="image-container1">
        <img
          className="image-lummi-icon"
          loading="lazy"
          alt=""
          src={imageLummi}
        />
      </div>
      <div className="content1">
        <div className="content-container">
          <div className="heading4">{heading}</div>
          <div className="card-description">{quisLaboreUtLaboreProiden}</div>
        </div>
        <div className="button1">
          <img className="icon" loading="lazy" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  className: PropTypes.string,
  imageLummi: PropTypes.string,
  heading: PropTypes.string,
  quisLaboreUtLaboreProiden: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  portfolioCardPadding: PropTypes.any,
  portfolioCardFlex: PropTypes.any,
  portfolioCardFlexGrow: PropTypes.any,
};

export default PortfolioCard;
