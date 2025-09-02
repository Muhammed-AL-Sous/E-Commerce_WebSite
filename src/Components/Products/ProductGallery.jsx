import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

import { useParams } from "react-router-dom";
import useViewProductDetailsHook from "../../Hooks/Products/useViewProductDetailsHook";

const ProductGallery = () => {
  const { id } = useParams();
  const { images } = useViewProductDetailsHook(id);

  return (
    <div
      className="shadow p-3 rounded-4 mb-4"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <ImageGallery
        items={images}
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
