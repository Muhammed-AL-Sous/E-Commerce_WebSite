import "../../Styles/LoginPageStyle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// External Libraries
import { ToastContainer } from "react-toastify";

// Custom Hook Login
import LoginPageHook from "../../Hooks/Auth/LoginPageHook";

const LoginPage = () => {
  const { loginForm, setLoginForm, handleSubmitClick } = LoginPageHook();

  return (
    <div className="login-main-div">
      <Link to="/">
        <Button className="go-back" variant="warning">
          <FontAwesomeIcon icon="right-left" />
          <span>عودة للرئيسية</span>
        </Button>
      </Link>
      <Container className="login-container">
        <Form className="form-login" onSubmit={handleSubmitClick}>
          <Form.Text className="form-title">تسجيل الدخول</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <FontAwesomeIcon icon="envelope" className="ms-1" />
              الإيميل :
            </Form.Label>
            <Form.Control
              className="input-email"
              type="email"
              placeholder="أدخل الإيميل الخاص بك"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
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
              placeholder="أدخل كلمة المرور الخاصة بك"
              className="input-pass"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="تذكرني" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-login">
            تسجيل الدخول
          </Button>
          <Form.Text
            style={{
              display: "block",
              marginTop: "20px",
              textAlign: "center",
              color: "white",
            }}
          >
            ليس لديك حساب ؟
            <Link
              to="/register"
              style={{ textDecoration: "none", fontWeight: "600" }}
            >
              <span className="me-2">إنشاء حساب جديد</span>
            </Link>
          </Form.Text>
        </Form>
      </Container>
      <Link to="/admin/allproducts">
        <Button
          variant="primary"
          style={{
            position: "absolute",
            bottom: "70px",
            right: "20px",
            zIndex: "20",
          }}
        >
          <span>الدخول بحساب المدير</span>
        </Button>
      </Link>
      <Link to="/user/allorders">
        <Button
          variant="warning"
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            zIndex: "20",
          }}
        >
          <span>الدخول بحساب المستخدم</span>
        </Button>
      </Link>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
