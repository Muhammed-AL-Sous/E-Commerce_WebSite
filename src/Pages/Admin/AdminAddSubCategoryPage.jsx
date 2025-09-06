// React BootStrap
import Form from "react-bootstrap/Form";
import { Button, Col, Row, Spinner } from "react-bootstrap";

// External Libraries
import { ToastContainer } from "react-toastify";

// Add Sub Category Page Hook
import AddSubCategoryPageHook from "../../Hooks/SubCategory/AddSubCategoryPageHook";

const AdminAddSubCategoryPage = () => {
  const [
    subCategoryName,
    setSubCategoryName,
    categoryId,
    setCategoryId,
    CategoriesData,
    handleAddClick,
    loading,
  ] = AddSubCategoryPageHook();

  return (
    <div>
      <Row>
        <Col xs="12">
          <div className="text-muted fs-4 fw-semibold mb-3">
            إضافة تصنيف فرعي جديد
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs="12" md="8">
          <Form.Control
            placeholder="أسم التصنيف الفرعي"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="8">
          <Form.Select
            aria-label="Default select example"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">إختر تصنيف رئيسي</option>
            {CategoriesData.data && CategoriesData.data.length > 0
              ? CategoriesData.data.map((item) => (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </Form.Select>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" md="8" className="d-flex justify-content-end">
          <Button variant="dark" onClick={handleAddClick}>
            حفظ التعديلات
          </Button>
        </Col>
      </Row>
      {loading ? <Spinner animation="border" /> : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategoryPage;
