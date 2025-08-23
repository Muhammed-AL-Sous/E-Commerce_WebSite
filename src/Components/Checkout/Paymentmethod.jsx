import { Col, Row } from "react-bootstrap";

const Paymentmethod = () => {
  return (
    <>
      <div className="shadow rounded-4 p-4">
        <Row>
          <Col xs="12">
            <div>
              <input type="radio" id="credit" name="paymethod" />
              <label htmlFor="credit" className="me-2 mb-4">
                الدفع عن طريق البطاقة الإئتمانية
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <input type="radio" id="cash" name="paymethod" />
              <label htmlFor="cash" className="me-2">
                الدفع عند الإستلام
              </label>
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12">
          <div className="d-flex w-100 justify-content-end align-items-center gap-2">
            <div
              className="rounded border my-3 d-flex justify-content-center align-items-center fs-5 text-muted fw-bold"
              style={{ height: "40px", padding: "10px 30px" }}
            >
              1500$
            </div>
            <div>
              <button
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  height: "40px",
                  margin: "auto",
                  borderRadius: "6px",
                  backgroundColor: "#272727",
                  color: "white",
                }}
              >
                إتمام الشراء
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Paymentmethod;
