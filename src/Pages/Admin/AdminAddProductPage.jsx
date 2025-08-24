// React BootStrap
import { Button, Row, Col, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// Images
import ImgUpload from "../../assets/images/avatar.png";
import add from "../../assets/images/add.png";

// React Hooks
import { useState } from "react";

// External Libraries
import AdminMultiSelect from "../../Components/Admin/AdminMultiSelect";
import ImageUploading from "react-images-uploading";

// External Libraries
import { ToastContainer } from "react-toastify";

// External Libraries
import notify from "../../Hooks/ToastNotifications";

const AdminAddProductPage = () => {
  const [formInputProduct, setFormInputProduct] = useState({
    ProductName: "",
    ProductDescription: "",
    ProductAvailableQuantity: "",
    ProductPriceBeforeDiscount: "",
    ProductPrice: "",
    ProductMaincategoryId: "",
    ProductSubcategoriesId: [],
    ProductSelectedSubcategoriesId: [],
    ProductBrandId: "",
    ProductColors: "",
  });
  const [images, setImages] = useState([]);
  const maxNumber = 4; // أقصى عدد صور

  const onChange = (imageList) => {
    setImages(imageList);
  };
  return (
    <div>
      <Row>
        <Col xs="12">
          <div>
            <h2 className="text-muted fs-4 fw-semibold mb-3">
              إضافة منتج جديد
            </h2>
          </div>
          <div>
            <p className="m-0 text-muted fw-semibold">
              مجموعة صور للمنتج ( كحد أقصى 4 صور )
            </p>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              onError={(errors) => {
                if (errors.maxNumber) {
                  notify("لا يمكنك رفع أكثر من 4 صور للمنتج", "error");
                }
              }}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                dragProps,
              }) => (
                <div>
                  {/* الأزرار */}
                  <div className="mb-4 d-flex justify-content-between align-items-center">
                    <Button
                      className="ms-2"
                      onClick={onImageUpload}
                      {...dragProps}
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <img src={ImgUpload} alt="img-upload" width="100px" />
                    </Button>

                    {imageList.length > 0 && (
                      <Button variant="danger" onClick={onImageRemoveAll}>
                        حذف الكل
                      </Button>
                    )}
                  </div>

                  {/* الصور */}
                  <Row className="g-4 mb-3">
                    {imageList.map((image, index) => (
                      <Col key={index} xs={12} sm={6} md={3}>
                        <Card className="h-100 shadow-sm ">
                          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                            <Card.Img
                              variant="top"
                              src={image["data_url"]}
                              className="rounded"
                            />
                          </div>
                          <Card.Body className="d-flex justify-content-between">
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => onImageUpdate(index)}
                            >
                              تعديل
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => onImageRemove(index)}
                            >
                              حذف
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </ImageUploading>
          </div>
        </Col>
        <Col xs="12" md="10">
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>اسم المنتج</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="أدخل اسم المنتج ..."
                  style={{ fontFamily: "sans-serif" }}
                  value={formInputProduct.ProductName}
                  onChange={(e) =>
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductName: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>وصف المنتج</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="أدخل وصف عن المنتج ..."
                  rows={3}
                  style={{ resize: "none", fontFamily: "sans-serif" }}
                  value={formInputProduct.ProductDescription}
                  onChange={(e) =>
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductDescription: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> الكمية المتاحة</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="أدخل الكمية المتاحة من المنتج .."
                  style={{ fontFamily: "sans-serif" }}
                  value={formInputProduct.ProductAvailableQuantity}
                  onChange={(e) =>
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductAvailableQuantity: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> السعر قبل الخصم</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="أدخل السعر قبل الخصم .."
                  style={{ fontFamily: "sans-serif" }}
                  value={formInputProduct.ProductPriceBeforeDiscount}
                  onChange={(e) =>
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductPriceBeforeDiscount: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> سعر المنتج</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="أدخل سعر المنتج .."
                  style={{ fontFamily: "sans-serif" }}
                  value={formInputProduct.ProductPrice}
                  onChange={(e) =>
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductPrice: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> تصنيف المنتج</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={formInputProduct.ProductMaincategoryId}
                  onChange={(e) =>
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductMaincategoryId: e.target.value,
                    })
                  }
                >
                  <option>التصنيف الرئيسي</option>
                  <option value="1">التصنيف الفرعي الأول</option>
                  <option value="2">التصنيف الفرعي الثاني</option>
                  <option value="3">التصنيف الفرعي الثالث</option>
                </Form.Select>
              </Form.Group>
              <AdminMultiSelect />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> الماركة</Form.Label>
                <Form.Select
                  aria-label="Default select example"
             
                >
                  <option>ماركة سامسونغ</option>
                  <option value="1">ماركة آبل</option>
                  <option value="2">ماركة توشيبا</option>
                  <option value="3">ماركة لينوفو</option>
                </Form.Select>
              </Form.Group>
              <div>
                <h6>الألوان المتاحة للمنتج</h6>
                <div className="d-flex align-items-center justify-content-between ">
                  <ul className="list-unstyled d-flex gap-3 m-0 flex-wrap">
                    <li
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    ></li>
                    <li
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    ></li>
                    <li
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        backgroundColor: "blue",
                      }}
                    ></li>
                  </ul>
                  <div>
                    <img src={add} alt="add-color" width="30px" height="30px" />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" md="8" className="d-flex justify-content-end">
          <Button variant="dark">حفظ التعديلات</Button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProductPage;
