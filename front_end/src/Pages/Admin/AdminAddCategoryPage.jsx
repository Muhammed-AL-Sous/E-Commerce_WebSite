import { Button, Col, Row } from "react-bootstrap";
import imageUpload from "../../assets/images/avatar.png";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateCategory } from "../../Redux/Actions/CategoriesAction";

const AdminAddCategoryPage = () => {
  const [image, setImage] = useState(imageUpload);
  const [categoryName, setCategoryName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  // When An Image Is Selected, It Is Stored In The Variable => ( image )
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  // Handle Add Category Function
  function handleAddCategory(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("image", selectedFile);
    dispatch(CreateCategory(formData));
  }
  // ==== Handle Add Category Function ==== //

  return (
    <div>
      <Row>
        <Col xs="12">
          <div className="text-muted fs-4 fw-semibold mb-3">أضف تصنيف جديد</div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <div>
            <p className="m-0 text-muted fw-semibold">صورة التصنيف</p>
          </div>
          <div>
            <label htmlFor="upload-img">
              <img
                src={image}
                alt="img-brand"
                width="200px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="upload-img"
              name="photo"
              onChange={onImageChange}
              style={{ position: "absolute", opacity: "0", zIndex: "-1" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" md="8">
          <Form.Control
            placeholder="أسم التصنيف"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" md="8" className="d-flex justify-content-end">
          <Button onClick={handleAddCategory} variant="dark">
            حفظ التعديلات
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCategoryPage;
