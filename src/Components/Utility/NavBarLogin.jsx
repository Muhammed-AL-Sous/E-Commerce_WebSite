// NavBar React-BootStrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// React Router
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import cart from "../../assets/images/cart.png";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword } from "../../Redux/Actions/SearchActions";

function NavBarLogin() {
  const dispatch = useDispatch();
  const searchWords = useSelector((state) => state.search.keyword);
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand
          href="/"
          style={{ width: "90px", padding: "0px 0px 0px 5px" }}
        >
          <img src={Logo} alt="logo" className="w-100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form.Control
            value={searchWords}
            onChange={(e) => dispatch(setSearchKeyword(e.target.value))}
            type="search"
            placeholder="ابحث"
            className="me-2 my-2 w-100"
            aria-label="Search"
          />

          <Nav
            className="me-auto my-2 my-lg-0 flex-row justify-content-around"
            style={{ maxHeight: "100px", display: "flex" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/login"
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
              as={Link}
              to="/cart"
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
