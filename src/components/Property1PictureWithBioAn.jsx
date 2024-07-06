import CopyComponent from "./CopyComponent";
import PropTypes from "prop-types";
import "./Property1PictureWithBioAn.css";

const Property1PictureWithBioAn = ({ className = "" }) => {
  return (
    <section
      className={`property-1picture-with-bio-an ${className}`}
      data-scroll-to="property1PictureWithBioAn"
    >
      <img
        className="profile-image-lummi"
        loading="lazy"
        alt=""
        src="/profile-image--lummi@2x.png"
      />
      <div className="content">
        <div className="text-content">
          <h1 className="heading3">About the Creator</h1>
          <div className="bio">
            Alex Johnson is a seasoned designer with over a decade of experience
            in creating user-centric designs. Skilled in various design tools
            and methodologies, Alex has worked with numerous clients to bring
            their visions to life.
          </div>
          <div className="social">
            <img
              className="twitterlogo-icon"
              loading="lazy"
              alt=""
              src="/twitterlogo.svg"
            />
            <img
              className="instagramlogo-icon"
              loading="lazy"
              alt=""
              src="/instagramlogo.svg"
            />
            <img
              className="linkedinlogo-icon"
              loading="lazy"
              alt=""
              src="/linkedinlogo.svg"
            />
          </div>
        </div>
        <div className="exprience-container">
          <div className="experience-list">
            <CopyComponent
              heading="2014"
              subheading="Initiated freelance design work, focusing on web and graphic design."
            />
            <CopyComponent
              heading="2015"
              subheading="Joined a design agency, leading several high-profile projects."
            />
            <CopyComponent
              heading="2016"
              subheading="Expanded skills to include UX/UI design, enhancing user interfaces."
            />
            <CopyComponent
              heading="2017"
              subheading="Collaborated with international clients on branding and identity."
            />
          </div>
          <div className="experience-list1">
            <CopyComponent
              heading="2018"
              subheading="Launched a personal design blog, sharing insights and tutorials."
            />
            <CopyComponent
              heading="2019"
              subheading="Presented at design conferences, showcasing innovative projects."
            />
            <CopyComponent
              heading="2020"
              subheading="Started a design mentorship program to guide aspiring designers."
            />
            <CopyComponent
              heading="2021"
              subheading="Continued to innovate and push the boundaries of design."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Property1PictureWithBioAn.propTypes = {
  className: PropTypes.string,
};

export default Property1PictureWithBioAn;
