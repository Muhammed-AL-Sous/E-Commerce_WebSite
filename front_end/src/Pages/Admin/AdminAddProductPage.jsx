import { Button, Col, Row } from "react-bootstrap";
import AdminMultiSelect from "../../Components/Admin/AdminMultiSelect";
import Form from "react-bootstrap/Form";
import image from "../../assets/images/avatar.png";
import add from "../../assets/images/add.png";

const AdminAddProductPage = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="8">
          <div>
            <h2 className="text-muted fs-4 fw-semibold mb-3">
              إضافة منتج جديد
            </h2>
          </div>
          <div>
            <p className="m-0 text-muted fw-semibold">صورة للمنتج</p>
            <img
              src={image}
              alt="img-product"
              width="200px"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>اسم المنتج</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="أدخل اسم المنتج ..."
                  style={{ fontFamily: "sans-serif" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>وصف المنتج</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ resize: "none", fontFamily: "sans-serif" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> السعر قبل الخصم</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="أدخل السعر قبل الخصم .."
                  style={{ fontFamily: "sans-serif" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> سعر المنتج</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="أدخل سعر المنتج .."
                  style={{ fontFamily: "sans-serif" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> تصنيف المنتج</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>التصنيف الرئيسي</option>
                  <option value="1">التصنيف الفرعي الأول</option>
                  <option value="2">التصنيف الفرعي الثاني</option>
                  <option value="3">التصنيف الفرعي الثالث</option>
                </Form.Select>
              </Form.Group>
              <AdminMultiSelect />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> الماركة</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>ماركة سامسونغ</option>
                  <option value="1">ماركة آبل</option>
                  <option value="2">ماركة توشيبا</option>
                  <option value="3">ماركة لينوفو</option>
                </Form.Select>
              </Form.Group>
              <div>
                <h6>الألوان المتاحة للمنتج</h6>
                <div className="d-flex align-items-center justify-content-between ">
                  <ul className="list-unstyled d-flex gap-3 m-0 flex-wrap">
                    <li
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    ></li>
                    <li
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    ></li>
                    <li
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        backgroundColor: "blue",
                      }}
                    ></li>
                  </ul>
                  <div>
                    <img src={add} alt="add-color" width="30px" height="30px" />
                  </div>
                </div>
              </div>
            </Form>
          </div>
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

export default AdminAddProductPage;
