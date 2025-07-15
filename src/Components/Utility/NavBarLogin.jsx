// NavBar React-BootStrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Images
import Logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import cart from "../../assets/images/cart.png";

function NavBarLogin() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" className="w-75" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form.Control
            type="search"
            placeholder="ابحث"
            className="me-2 w-100"
            aria-label="Search"
          />

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className="d-flex align-items-center justify-content-center"
            >
              <img src={login} alt="login-img" style={{ width: "30px" }} />
              <p
                className="mb-0 me-1"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                دخول
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex align-items-center justify-content-center"
            >
              <img src={cart} alt="cart-img" style={{ width: "30px" }} />
              <p
                className="mb-0 me-1"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                السلة
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarLogin;
