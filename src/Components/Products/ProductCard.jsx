// React-BootStrap
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Offcanvas, Button } from "react-bootstrap";

// React Hooks
import { Link, useLocation } from "react-router-dom";

// images
// import product from "../../assets/images/prod1.png";
import fav from "../../assets/images/fav-off.png";
import rate from "../../assets/images/rate.png";

const ProductCard = ({ item }) => {
  // Resize Cards
  const location = useLocation();
  // const isProductsPage = location.pathname.includes("/products");
  const isProductsPage =
    location.pathname === "/products" ||
    location.pathname === "/user/favorites";
  const sm = isProductsPage ? 10 : 6;
  const md = isProductsPage ? 6 : 5;
  const xl = isProductsPage ? 4 : 3;
  // ==== Resize Cards ==== //

  return (
    <Col xs="12" sm={sm} md={md} lg="4" xl={xl} className="my-4">
      <Card
        className="shadow"
        style={{
          borderRadius: "8px",
          border: "none",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            padding: "10px 20px 0",
            width: "100%",
            height: "250px",
          }}
        >
          <Link
            to={`/products/${item._id}`}
            style={{
              padding: "10px 20px 0",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Img
              variant="top"
              src={item.imageCover}
              style={{ maxHeight: "100%" }}
            />
          </Link>
        </div>
        <div className="d-flex justify-content-end mx-3">
          <img src={fav} alt="" style={{ width: "35px", height: "35px" }} />
        </div>
        <Card.Body>
          <Card.Title className="m-0">{item.title} </Card.Title>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <img src={rate} alt="rate-icon" style={{ width: "20px" }} />
              <span
                className="d-block mx-1 fw-bold position-relative"
                style={{ top: "3px", color: "gold" }}
              >
                {item.ratingsQuantity}
              </span>
            </div>
            <div style={{ position: "relative", top: "3px" }}>
              <span style={{ fontWeight: "600", fontSize: "20px" }}>
                {item.price}
              </span>
              <span style={{ fontWeight: "600", fontSize: "20px" }}>$</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
