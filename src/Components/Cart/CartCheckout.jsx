import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <Row className="shadow rounded-4 ">
      <Col className="d-flex justify-content-center flex-column p-3">
        <div className="d-flex justify-content-center align-items-center">
          <input
            type="text"
            placeholder="كود الخصم"
            style={{
              height: "40px",
              width: "70%",
              borderRadius: "0px 6px 6px 0px",
              border: "1px solid #ccc",
              outline: "none",
              padding: "7px",
              color: "#777",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              border: "none",
              backgroundColor: "#272727",
              height: "40px",
              width: "30%",
              color: "white",
              padding: "10px",
              borderRadius: "6px 0px 0px 6px",
            }}
          >
            تطبيق
          </button>
        </div>
        <div
          className="rounded border my-3 d-flex justify-content-center align-items-center fs-5 text-muted fw-bold"
          style={{ width: "100%", height: "40px" }}
        >
          1500$
        </div>
        <div className="w-100">
          <Link to="/order/paymentmethod" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                width: "100%",
                height: "40px",
                margin: "auto",
                display: "block",
                borderRadius: "6px",
                backgroundColor: "#272727",
                color: "white",
              }}
            >
              إتمام الشراء
            </button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default CartCheckout;
