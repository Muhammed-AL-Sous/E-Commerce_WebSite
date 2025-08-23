import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";

const CartPage = () => {
  return (
    <Container>
      <Row className="my-4">
        <div className="text-muted fw-bold fs-3">سلة التسوق</div>
      </Row>
      <Row className="justify-content-center">
        <Col xs="12" lg="9">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col xs="10" md="6" lg="3">
          <CartCheckout />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
