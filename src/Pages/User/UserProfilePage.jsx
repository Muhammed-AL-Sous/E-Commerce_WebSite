import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const UserProfilePage = () => {
  return (
    <>
      <div className="text-muted fs-4 fw-semibold mb-3">تعديل الملف الشخصي</div>
      <Row>
        <Col xs="12" md="10">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold text-muted">
                الاسم :{" "}
              </Form.Label>
              <Form.Control type="text" value="محمد الصوص" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold text-muted">
                رقم الهاتف :{" "}
              </Form.Label>
              <Form.Control type="number" value="0750316487" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold text-muted">
                الايميل :{" "}
              </Form.Label>
              <Form.Control type="email" value="mhd.alsous@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold text-muted">
                كلمة المرور القديمة :{" "}
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-semibold text-muted">
                كلمة المرور الجديدة :{" "}
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="10" className="d-flex justify-content-end">
          <Button variant="dark">حفظ التعديلات</Button>
        </Col>
      </Row>
    </>
  );
};

export default UserProfilePage;
