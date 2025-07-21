import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../assets/images/mobile.png";
import mobile_01 from "../../assets/images/mobile1.png";
import mobile_02 from "../../assets/images/mobile2.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile_01}`,
    },
    {
      original: `${mobile_02}`,
    },
  ];

  return (
    <div className="shadow p-3 rounded-4 mb-4" style={{backgroundColor:"#f6f6f6"}}>
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        showThumbnails={false}
        additionalClass="custom-gallery"
        renderLeftNav={(onClick, disabled) => (
          <LeftButton onClick={onClick} disabled={disabled} />
        )}
        renderRightNav={(onClick, disabled) => (
          <RightButton onClick={onClick} disabled={disabled} />
        )}
      />
    </div>
  );
};

export default ProductGallery;
