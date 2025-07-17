import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// Images
import carouselImg01 from "../../assets/images/slider1.png";
import carouselImg02 from "../../assets/images/slider4.png";
import carouselImg03 from "../../assets/images/prod3.png";
import carouselImg04 from "../../assets/images//prod4.png";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ backgroundColor: "#c23069cf" }}>
        <div className="d-flex justify-content-center flex-column flex-md-row align-items-center mt-3 mb-0">
          <img
            src={carouselImg01}
            alt="slider-01"
            style={{ width: "313.53px", height: "296px" }}
          />
          <div style={{ color: "white", margin: "20px" }}>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              هناك خصم كبير
            </h3>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              خصم يصل حتى 50% عند الشراء
            </p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item style={{ backgroundColor: "#09183bc7" }}>
        <div className="d-flex justify-content-center flex-column flex-md-row align-items-center mt-3 mb-0">
          <img
            src={carouselImg02}
            alt="slider-01"
            style={{ width: "313.53px", height: "296px" }}
          />
          <div style={{ color: "white", margin: "20px" }}>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              هناك خصم كبير
            </h3>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              خصم يصل حتى 50% عند الشراء
            </p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item style={{ backgroundColor: "#0d6efdcc" }}>
        <div className="d-flex justify-content-center flex-column flex-md-row align-items-center mt-3 mb-0">
          <img
            src={carouselImg03}
            alt="slider-01"
            style={{ width: "313.53px", height: "296px" }}
          />
          <div style={{ color: "white", margin: "20px" }}>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              هناك خصم كبير
            </h3>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              خصم يصل حتى 50% عند الشراء
            </p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item style={{ backgroundColor: "#daa050c7" }}>
        <div className="d-flex justify-content-center flex-column flex-md-row align-items-center mt-3 mb-0">
          <img
            src={carouselImg04}
            alt="slider-01"
            style={{ width: "313.53px", height: "296px" }}
          />
          <div style={{ color: "white", margin: "20px" }}>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              هناك خصم كبير
            </h3>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              خصم يصل حتى 50% عند الشراء
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
