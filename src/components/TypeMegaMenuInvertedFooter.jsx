import { useCallback } from "react";
import PropTypes from "prop-types";
import "./TypeMegaMenuInvertedFooter.css";

const TypeMegaMenuInvertedFooter = ({ className = "" }) => {
  const onListLinkItemClick = useCallback(() => {
    window.open("http://www.instagram.com/yahya.sopian96");
  }, []);

  return (
    <footer className={`typemega-menu-inverted-footer ${className}`}>
      <div className="content3">
        <div className="brand-parent">
          <div className="brand1">
            <img className="icon1" alt="" src="/icon-3.svg" />
            <div className="brandname1">DesignWorks</div>
          </div>
          <div className="brandname2">Inspiring Creativity</div>
        </div>
        <div className="links">
          <div className="list">
            <div className="list-heading">Company</div>
            <div className="list-link-item">About</div>
            <div className="list-link-item1">Careers</div>
            <div className="list-link-item2">Newsroom</div>
          </div>
          <div className="list1">
            <div className="list-heading1">Services</div>
            <div className="list-link-item3">Efficiency</div>
            <div className="list-link-item4">Designs</div>
            <div className="list-link-item5">Updates</div>
          </div>
          <div className="list2">
            <div className="list-heading2">Social</div>
            <div className="list-link-item6">Twitter</div>
            <div className="list-link-item7" onClick={onListLinkItemClick}>
              Instagram
            </div>
            <div className="list-link-item8">Threads</div>
          </div>
          <div className="list3">
            <div className="list-heading3">Legal</div>
            <div className="list-link-item9">Terms</div>
            <div className="list-link-item10">Privacy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

TypeMegaMenuInvertedFooter.propTypes = {
  className: PropTypes.string,
};

export default TypeMegaMenuInvertedFooter;
