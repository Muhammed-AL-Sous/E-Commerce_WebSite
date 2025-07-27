import { Button, Col, Row } from "react-bootstrap";
import UserAddress from "../../Components/User/UserAddress";
import { Link } from "react-router-dom";

const UserAddressPage = () => {
  return (
    <>
      <div className="text-muted fs-4 fw-semibold mb-3">قائمة العناوين</div>
      <Row>
        <Col xs="12" md="10">
          <UserAddress />
          <UserAddress />
          <UserAddress />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="10" className="d-flex justify-content-end">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <Button variant="dark">إضافة عنوان جديد</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default UserAddressPage;
