import TypeFullImageWithBigTitle from "../components/TypeFullImageWithBigTitle";
import TypeVerticalHeroCentered from "../components/TypeVerticalHeroCentered";
import Property1PictureWithBioAn from "../components/Property1PictureWithBioAn";
import Variant1Xl2SmallProject from "../components/Variant1Xl2SmallProject";
import Property1SmallHeadingLog from "../components/Property1SmallHeadingLog";
import ColumnRight from "../components/ColumnRight";
import ColumnLeft from "../components/ColumnLeft";
import TypeMegaMenuInvertedFooter from "../components/TypeMegaMenuInvertedFooter";
import "./ArtGalleryHome.css";

const ArtGalleryHome = () => {
  return (
    <div className="art-gallery-home">
      <TypeFullImageWithBigTitle />
      <TypeVerticalHeroCentered />
      <Property1PictureWithBioAn />
      <Variant1Xl2SmallProject />
      <Property1SmallHeadingLog />
      <section
        className="property-1list-form-boxed-inv"
        data-scroll-to="property1ListFormBoxedInv"
      >
        <div className="container">
          <ColumnRight />
          <ColumnLeft />
        </div>
      </section>
      <TypeMegaMenuInvertedFooter />
    </div>
  );
};

export default ArtGalleryHome;
