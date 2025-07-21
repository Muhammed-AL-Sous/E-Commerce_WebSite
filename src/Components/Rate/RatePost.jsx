import { useState } from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { Button, Col, Row } from "react-bootstrap";

export default function RatePost() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Row>
        <Col>
          <div style={{ fontSize: "2rem" }}>
            <Rating
              className="mt-2"
              initialRating={rating} // القيمة الإبتدائية
              fractions={2} // يسمح بالنصف
              onChange={(rate) => setRating(rate)}
              emptySymbol={
                <FontAwesomeIcon icon={regularStar} style={{ color: "#ccc" }} />
              }
              fullSymbol={
                <FontAwesomeIcon
                  icon={solidStar}
                  style={{ color: "#ffc107" }}
                />
              }
            />
            <p
              className="text-secondary mt-2"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              التقييم الحالي: <span>{rating}</span>
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            <textarea
              style={{
                resize: "none",
                height: "100px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                outline: "none",
                color:"#777"
              }}
              className="w-100"
              placeholder="أكتب تعليقك ..."
            ></textarea>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-end">
            <Button variant="dark" className="mb-3">أضف التعليق</Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
