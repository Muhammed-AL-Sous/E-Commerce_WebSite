// React BootStrap
import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// External Libraries
import { ToastContainer } from "react-toastify";

// Font Awesome Library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Register Css File
import "../../Styles/RegisterPageStyle.css";

// React Router Dom
import { Link } from "react-router-dom";

// Register Logic
import RegisterSignUpHook from "../../Hooks/Auth/RegisterSignUpHook";

const RegisterPage = () => {
  const { registerForm, setRegisterForm, handleSubmitClick } =
    RegisterSignUpHook();
  return (
    <div className="register-main-div">
      <Link to="/">
        <Button className="go-back" variant="warning">
          <FontAwesomeIcon icon="right-left" />
          <span>عودة للرئيسية</span>
        </Button>
      </Link>

      <Container className="register-container">
        <Form className="form-register" onSubmit={(e) => e.preventDefault()}>
          <Form.Text className="register-title">إنشاء حساب</Form.Text>
          <Form.Group className="mb-2" controlId="formBasicUser">
            <Form.Label>
              <FontAwesomeIcon icon="circle-user" className="ms-1" />
              اسم المستخدم :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل اسمك ..."
              style={{ fontSize: "14px" }}
              value={registerForm.name}
              onChange={(e) =>
                setRegisterForm({ ...registerForm, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>
              <FontAwesomeIcon icon="envelope" className="ms-1" />
              الإيميل :
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="أدخل الإيميل الخاص بك"
              style={{ fontSize: "14px" }}
              value={registerForm.email}
              onChange={(e) =>
                setRegisterForm({ ...registerForm, email: e.target.value })
              }
            />
            {/* <Form.Text
              style={{
                fontSize: "10px",
                fontWeight: "600",
                marginTop: "10px",
                color: "beige",
              }}
            >
              لن نشارك بريدك الإلكتروني مع أي شخص آخر.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPhone">
            <Form.Label>
              <FontAwesomeIcon icon="phone-volume" className="ms-1" />
              رقم الهاتف :
            </Form.Label>
            <Form.Control
              type="phone"
              placeholder="أدخل رقم هاتفك ..."
              style={{ fontSize: "14px" }}
              value={registerForm.phone}
              onChange={(e) =>
                setRegisterForm({ ...registerForm, phone: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>
              <FontAwesomeIcon icon="lock" className="ms-1" />
              كلمة المرور :
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة المرور الخاصة بك"
              style={{ fontSize: "14px" }}
              value={registerForm.password}
              onChange={(e) =>
                setRegisterForm({ ...registerForm, password: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPasswordConfirm">
            <Form.Label>
              <FontAwesomeIcon icon="lock" className="ms-1" />
              تأكيد كلمة المرور :
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="قم بتأكيد كلمة المرور"
              style={{ fontSize: "14px" }}
              value={registerForm.passwordConfirm}
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  passwordConfirm: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="تذكرني" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="btn-register"
            disabled={registerForm.loading}
            onClick={handleSubmitClick}
          >
            إنشاء حساب
          </Button>

          <Form.Text
            style={{
              display: "block",
              marginTop: "10px",
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
        {registerForm.loading ? (
          <Spinner
            animation="border"
            style={{ position: "absolute", color: "white", top: "90%" }}
          />
        ) : null}
        <ToastContainer />
      </Container>
    </div>
  );
};

export default RegisterPage;
