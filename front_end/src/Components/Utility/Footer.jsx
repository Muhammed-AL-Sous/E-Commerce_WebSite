import { Col, Container, Row } from "react-bootstrap";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Container>
      <hr style={{ margin: "0.5rem 0" }} />
      <Row className="d-flex align-items-center justify-content-center  py-3">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center justify-content-lg-start gap-3 mb-3 mb-md-0"
        >
          <a href="#" className="text-dark fw-semibold text-decoration-none">
            الشروط والأحكام
          </a>
          <a href="#" className="text-dark fw-semibold text-decoration-none">
            سياسة الخصوصية
          </a>
          <a href="#" className="text-dark fw-semibold text-decoration-none">
            اتصل بنا
          </a>
        </Col>
        <Col xs="12" md="6">
          <ul className="list-unstyled d-flex justify-content-center justify-content-md-end m-0 gap-4 ">
            <li>
              <a
                href="https://www.instagram.com/acc.muhammed.al.sous/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "20px",
                  color: "#f56040",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "20px",
                  color: "#1877f2",
                  cursor: "pointer",
                }}
                href="https://www.facebook.com/profile.php?id=100021566181496"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "20px", cursor: "pointer", color: "unset" }}
                href="https://github.com/Muhammed-AL-Sous"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a
                style={{
                  fontSize: "20px",
                  color: "#25d366",
                  cursor: "pointer",
                }}
                href="https://www.facebook.com/profile.php?id=100021566181496"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "whatsapp"]} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
