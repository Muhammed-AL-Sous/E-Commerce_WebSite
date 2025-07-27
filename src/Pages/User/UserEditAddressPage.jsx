import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const UserEditAddressPage = () => {
  return (
    <>
      <div className="text-muted fs-4 fw-semibold mb-3">تعديل العنوان</div>
      <Row>
        <Col xs="12" md="10">
          <Form>
            <Form.Label>تعريف العنوان</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option></option>
              <option value="1" selected>
                المنزل
              </option>
              <option value="2">العمل</option>
              <option value="3">أخرى</option>
            </Form.Select>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>تفاصيل العنوان</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{ resize: "none" }}
                value="  دمشق , ركن الدين , ساحة الميسات , شارع رقم 142"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control type="number" value="009639520147" />
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

export default UserEditAddressPage;
