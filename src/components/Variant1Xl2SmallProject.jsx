import PortfolioCard from "./PortfolioCard";
import Row from "./Row";
import PropTypes from "prop-types";
import "./Variant1Xl2SmallProject.css";

const Variant1Xl2SmallProject = ({ className = "" }) => {
  return (
    <section
      className={`variant1-xl-2-small-project ${className}`}
      data-scroll-to="variant1Xl2SmallProject"
    >
      <div className="content2">
        <div className="heading-container">
          <h1 className="heading5">Featured Projects</h1>
          <div className="subheading2">A Glimpse into My Creative Journey</div>
        </div>
        <div className="cards-grid">
          <div className="row1">
            <PortfolioCard
              imageLummi="/image-lummi@2x.png"
              heading="Revamp Co."
              quisLaboreUtLaboreProiden="Brand overhaul, identity creation"
              icon="/icon.svg"
            />
            <PortfolioCard
              imageLummi="/image-lummi-1@2x.png"
              heading="Tech Innovate"
              quisLaboreUtLaboreProiden="App interface, user experience"
              propMinWidth="unset"
              icon="/icon.svg"
              portfolioCardPadding="unset"
              portfolioCardFlex="1"
              portfolioCardFlexGrow="1"
            />
          </div>
          <Row />
        </div>
      </div>
    </section>
  );
};

Variant1Xl2SmallProject.propTypes = {
  className: PropTypes.string,
};

export default Variant1Xl2SmallProject;
