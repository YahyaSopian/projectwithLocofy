import { useCallback } from "react";
import PropTypes from "prop-types";
import "./TypeFullImageWithBigTitle.css";

const TypeFullImageWithBigTitle = ({ className = "" }) => {
  const onBrandContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='overlay']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onNavLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='typeVerticalHeroCentered']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onNavLinkContainerClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='property1PictureWithBioAn']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onNavLinkContainerClick2 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='variant1Xl2SmallProject']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='property1ListFormBoxedInv']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={`typefull-image-with-big-title ${className}`}>
      <header className="typebrand-left-and-nav-on-rig">
        <div className="brand" onClick={onBrandContainerClick}>
          <b className="brandname">Yahya Sopian</b>
        </div>
        <div className="nav-links">
          <div className="nav-link" onClick={onNavLinkContainerClick}>
            <div className="nav-label">Portfolio</div>
          </div>
          <div className="nav-link1" onClick={onNavLinkContainerClick1}>
            <div className="nav-label1">Profile</div>
          </div>
          <div className="nav-link2" onClick={onNavLinkContainerClick2}>
            <div className="nav-label2">Shop</div>
          </div>
          <button className="button" onClick={onButtonClick}>
            <div className="text-container">
              <div className="cta">Reach Out</div>
            </div>
          </button>
        </div>
      </header>
      <img
        className="image-lummi-luminancedar"
        loading="lazy"
        alt=""
        src="/image--lummi-luminancedark@2x.png"
      />
      <div className="overlay" data-scroll-to="overlay" />
      <div className="copy-component-wrapper">
        <div className="copy-component">
          <div className="heading-text">
            <h1 className="heading">
              Showcasing Creativity, One Project at a Time
            </h1>
          </div>
          <button className="cta-button">
            <div className="text-container1">
              <div className="cta1">Explore Work</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

TypeFullImageWithBigTitle.propTypes = {
  className: PropTypes.string,
};

export default TypeFullImageWithBigTitle;
