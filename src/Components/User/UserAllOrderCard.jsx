import { Col, Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";

const UserAllOrderCard = () => {
  return (
    <div className="shadow rounded-4 p-2 mb-3">
      <div className="text-secondary fs-4 fw-semibold mb-3 px-3">
        طلب رقم #520417
      </div>
      <UserAllOrderItem />
      <UserAllOrderItem />
      <UserAllOrderItem />
      <Row>
        <Col xs="12">
          <div className="d-flex justify-content-between align-items-center px-3">
            <p className="fs-5">
              الحالة :{" "}
              <span className="text-secondary fw-bold">قيد التنفيذ</span>
            </p>
            <p className="fs-4 fw-semibold">500$</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
