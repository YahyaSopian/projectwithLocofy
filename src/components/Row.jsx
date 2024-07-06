import PortfolioCard from "./PortfolioCard";
import PropTypes from "prop-types";
import "./Row.css";

const Row = ({ className = "" }) => {
  return (
    <div className={`row ${className}`}>
      <PortfolioCard
        imageLummi="/image-lummi-2@2x.png"
        heading="Eco World"
        quisLaboreUtLaboreProiden="Sustainable branding, web design"
        propMinWidth="320px"
        icon="/icon.svg"
        portfolioCardPadding="unset"
        portfolioCardFlex="1"
        portfolioCardFlexGrow="1"
      />
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
