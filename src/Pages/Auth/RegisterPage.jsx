import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/RegisterPageStyle.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="register-main-div">
      <Link to="/">
        <Button className="go-back" variant="warning">
          <FontAwesomeIcon icon="right-left" />
          <span>عودة للرئيسية</span>
        </Button>
      </Link>

      <Container className="register-container">
        <Form className="form-register">
          <Form.Text className="register-title">إنشاء حساب</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>
              <FontAwesomeIcon icon="circle-user" className="ms-1" />
              اسم المستخدم :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل اسمك ..."
              style={{ fontSize: "14px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <FontAwesomeIcon icon="envelope" className="ms-1" />
              الإيميل :
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="أدخل الإيميل الخاص بك"
              style={{ fontSize: "14px" }}
            />
            <Form.Text
              style={{
                fontSize: "10px",
                fontWeight: "600",
                marginTop: "10px",
                color: "beige",
              }}
            >
              لن نشارك بريدك الإلكتروني مع أي شخص آخر.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <FontAwesomeIcon icon="lock" className="ms-1" />
              كلمة المرور :
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة السر الخاصة بك"
              style={{ fontSize: "14px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="تذكرني" />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-register">
            إنشاء حساب
          </Button>

          <Form.Text
            style={{
              display: "block",
              marginTop: "20px",
              textAlign: "center",
              color: "white",
            }}
          >
            لديك حساب بالفعل ؟
            <Link
              to="/login"
              style={{ textDecoration: "none", fontWeight: "700" }}
            >
              <span className="me-2">تسجيل</span>
            </Link>
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterPage;
