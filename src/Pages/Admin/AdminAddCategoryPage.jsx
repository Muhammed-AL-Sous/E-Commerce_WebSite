// React BootStrap
import { Button, Col, Row, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// External Libraries
import { ToastContainer } from "react-toastify";

// Add Category Hook
import AddCategoryHook from "../../Hooks/Categories/AddCategoryHook";

const AdminAddCategoryPage = () => {
  const [
    image,
    categoryName,
    loading,
    setCategoryName,
    onImageChange,
    handleAddCategory,
  ] = AddCategoryHook();

  return (
    <div>
      <Row>
        <Col xs="12">
          <div className="text-muted fs-4 fw-semibold mb-3">أضف تصنيف جديد</div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <p className="m-0 text-muted fw-semibold">صورة التصنيف</p>
          <label htmlFor="upload-img">
            <img
              src={image}
              alt="تصنيف"
              width="200px"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input
            type="file"
            id="upload-img"
            name="photo"
            onChange={onImageChange}
            style={{ display: "none" }}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" md="8">
          <Form.Control
            placeholder="أسم التصنيف"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" md="8" className="d-flex justify-content-end">
          <Button onClick={handleAddCategory} variant="dark" disabled={loading}>
            حفظ التعديلات
          </Button>
        </Col>
      </Row>
      {loading ? <Spinner animation="border" /> : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategoryPage;
