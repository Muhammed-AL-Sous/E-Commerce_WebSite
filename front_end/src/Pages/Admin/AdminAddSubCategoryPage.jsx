import Form from "react-bootstrap/Form";
import { Col, Row, Button } from "react-bootstrap";

const AdminAddSubCategoryPage = () => {
  return (
    <div>
      <Row>
        <Col xs="12">
          <div className="text-muted fs-4 fw-semibold mb-3">إضافة تصنيف فرعي جديد</div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs="12" md="8">
          <Form.Control
            placeholder="أسم التصنيف الفرعي"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="8">
          <Form.Select aria-label="Default select example">
            <option>التصنيفات</option>
            <option value="1">التصنيف الأول</option>
            <option value="2">التصنيف الثاني</option>
            <option value="3">التصنيف الثالث</option>
            <option value="4">التصنيف الرابع</option>
          </Form.Select>
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

export default AdminAddSubCategoryPage;
