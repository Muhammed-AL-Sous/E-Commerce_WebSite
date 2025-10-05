// React-BootStrap
import { Button, Col, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

// React Hooks
import { Link } from "react-router-dom";

// images
import fav from "../../assets/images/fav-off.png";
import rate from "../../assets/images/rate.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  DeleteProduct,
  GetAllProducts,
} from "../../Redux/Actions/ProductAction";

const AdminAllProductsCard = ({ products, loading }) => {
  const dispatch = useDispatch();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null); // تخزين id المنتج المحدد
  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setSelectedId(id);
    setShow(true);
  };

  const handleDeleteConfirm = async () => {
    setLoadingDelete(true);
    try {
      await dispatch(DeleteProduct(selectedId));
      setShow(false);
      await dispatch(GetAllProducts());
    } catch (error) {
      console.log(error);
    }
    setLoadingDelete(false);
  };

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );

  if (products.data && products.data.length > 0) {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ justifyContent: "space-between" }}>
            <Modal.Title>حذف منتج معين</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل أنت متأكد من حذف هذا المنتج ؟؟ </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              إلغاء
            </Button>
            <Button
              variant="danger"
              onClick={handleDeleteConfirm}
              disabled={loadingDelete}
            >
              {loadingDelete ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "تأكيد الحذف"
              )}
            </Button>
          </Modal.Footer>
        </Modal>
        <>
          {products.data.map((card) => (
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="5"
              xl="4"
              className="my-4"
              key={card._id}
            >
              <Card
                className="shadow"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <div className="d-flex justify-content-between mt-3 mb-3 mx-3">
                  <Button variant="warning" className="text-white">
                    تعديل
                  </Button>
                  <Button variant="danger" onClick={() => handleShow(card._id)}>
                    حذف
                  </Button>
                </div>
                <Link to={`/products/${card._id}`}>
                  <Card.Img
                    variant="top"
                    src={card.imageCover}
                    style={{ width: "100%", height: "228px" }}
                  />
                </Link>
                <div className="d-flex justify-content-end mx-3">
                  <img
                    src={fav}
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="m-0">{card.title}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={rate}
                        alt="rate-icon"
                        style={{ width: "20px" }}
                      />
                      <span
                        className="d-block mx-1 fw-bold position-relative"
                        style={{ top: "3px", color: "gold" }}
                      >
                        {card.ratingsQuantity || 0}
                      </span>
                    </div>
                    <div style={{ position: "relative", top: "3px" }}>
                      <span style={{ fontWeight: "600", fontSize: "20px" }}>
                        {card.price}
                      </span>
                      <span style={{ fontWeight: "600", fontSize: "20px" }}>
                        $
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </>
      </>
    );
  }

  return <h3>لا يوجد منتجات متاحة حالياً</h3>;
};

export default AdminAllProductsCard;
