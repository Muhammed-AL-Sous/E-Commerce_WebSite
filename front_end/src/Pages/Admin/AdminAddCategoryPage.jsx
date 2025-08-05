import { Button, Col, Row } from "react-bootstrap";
import image from "../../assets/images/avatar.png";
import Form from "react-bootstrap/Form";

const AdminAddCategoryPage = () => {
  return (
    <div>
      <Row>
        <Col xs="12">
          <div className="text-muted fs-4 fw-semibold mb-3">أضف تصنيف جديد</div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <div>
            <p className="m-0 text-muted fw-semibold">صورة التصنيف</p>
            <img
              src={image}
              alt="img-brand"
              width="200px"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" md="8">
          <Form.Control
            placeholder="أسم التصنيف"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" md="8" className="d-flex justify-content-end">
          <Button variant="dark">حفظ التعديلات</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCategoryPage;
