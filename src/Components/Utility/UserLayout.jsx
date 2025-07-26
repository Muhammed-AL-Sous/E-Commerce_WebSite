import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";
import UserSideBar from "../User/UserSideBar";

const UserLayout = () => {
  return (
    <Container>
      <Row className="py-4">
        <Col xs="3" sm="2">
          <UserSideBar />
        </Col>

        <Col xs="9" sm="10">
          <Outlet />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default UserLayout;
