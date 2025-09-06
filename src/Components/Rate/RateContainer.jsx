import { Col, Row } from "react-bootstrap";
import rate from "../../assets/images/rate.png";
import Ratings_And_Reviews from "./Ratings_And_Reviews";
import RatePost from "./RatePost";
import Pagination from "../Utility/Pagination";

const RateContainer = ({ pageCount = 0, onPageChange = () => {} }) => {
  return (
    <div
      className="shadow rounded-3 mt-5 p-3"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <Row>
        <Col xs="12">
          <h4 className="mx-2">التقييمات</h4>
          <div className="d-flex align-items-center">
            <img
              src={rate}
              alt="rate"
              width="16px"
              height="16px"
              style={{ position: "relative", top: "-3px" }}
            />
            <span className="text-secondary fw-bold ms-2 me-1">4.3</span>
            <p
              className="m-0 text-muted mt-1"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              ( 160 تقييم )
            </p>
          </div>
        </Col>
      </Row>

      <RatePost />

      <Ratings_And_Reviews />
      <Ratings_And_Reviews />
      <Ratings_And_Reviews />
      <Ratings_And_Reviews />
      <Ratings_And_Reviews />

      {/* Pagination محمي */}
      {pageCount > 1 && (
        <Pagination pageCount={pageCount} onPress={onPageChange} />
      )}
    </div>
  );
};

export default RateContainer;
