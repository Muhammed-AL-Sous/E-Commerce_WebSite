import { Container } from "react-bootstrap";
import Paymentmethod from "../../Components/Checkout/Paymentmethod";

const PaymentmethodPage = () => {
  return (
    <Container>
        <div className="text-muted my-4 fw-bold fs-4">إختر طريقة الدفع</div>
      <Paymentmethod />
    </Container>
  );
};

export default PaymentmethodPage;
