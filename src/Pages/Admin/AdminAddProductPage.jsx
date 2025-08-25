// React BootStrap
import { Button, Row, Col, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// Images
import ImgUpload from "../../assets/images/avatar.png";
import add from "../../assets/images/add.png";

// React Hooks & Redux
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";
import { GetAllBrands } from "../../Redux/Actions/BrandsAction";

// External Libraries
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ImageUploading from "react-images-uploading";
import notify from "../../Hooks/ToastNotifications";
import { ToastContainer } from "react-toastify";
import { CirclePicker } from "react-color";
import { GetSubCategory } from "../../Redux/Actions/SubCategoryAction";

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
    ProductColors: [],
  });

  // Selected Options
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const animatedComponents = makeAnimated();

  // Redux Data
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const BrandsData = useSelector((state) => state.Brands.Brands);
  const SubCategoriesData = useSelector(
    (state) => state.SubCategories.Sub_Categories
  );
  const dispatch = useDispatch();

  // Circle Color Picker
  const [showHideColorPicker, setShowHideColorPicker] = useState(false);

  // React Images Uploading Logic
  const [images, setImages] = useState([]);
  const maxNumber = 4; // أقصى عدد صور

  const onChange = (imageList) => {
    setImages(imageList);
  };

  useEffect(() => {
    dispatch(GetAllCategories());
  }, []);

  useEffect(() => {
    dispatch(GetAllBrands());
  }, []);

  const onChangeSelectMainCategory = (e) => {
    setFormInputProduct({
      ...formInputProduct,
      ProductMaincategoryId: e.target.value,
    });

    if (e.target.value !== "") {
      dispatch(GetSubCategory(e.target.value));
    }
  };

  // Formatted Options For React Select Library
  useEffect(() => {
    if (SubCategoriesData?.data) {
      const formattedOptions = SubCategoriesData.data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(formattedOptions);
    }
  }, [SubCategoriesData]);

  // Circle Color Picker On Change Function
  function onChangeColor(updatedColor) {
    if (!formInputProduct.ProductColors.includes(updatedColor.hex)) {
      setFormInputProduct({
        ...formInputProduct,
        ProductColors: [...formInputProduct.ProductColors, updatedColor.hex],
      });
    }
    setShowHideColorPicker(false);
  }

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
                  type="text"
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
                  onChange={onChangeSelectMainCategory}
                >
                  <option value="">إختر تصنيف رئيسي</option>
                  {CategoriesData.data
                    ? CategoriesData.data.map((item) => (
                        <option value={item._id} key={item._id}>
                          {item.name}
                        </option>
                      ))
                    : null}
                </Form.Select>
              </Form.Group>
              <div className="mb-3" style={{ zIndex: "4" }}>
                <Select
                  closeMenuOnSelect={false} // يسمح بتحديد أكثر من عنصر بدون غلق القائمة
                  components={animatedComponents} // تفعيل الأنيميشن من المكتبة نفسها
                  isMulti // لتفعيل اختيار متعدد
                  options={options}
                  value={selectedOptions}
                  onChange={(selected) => {
                    setSelectedOptions(selected);
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductSelectedSubcategoriesId: selected.map(
                        (s) => s.value
                      ),
                    });
                  }}
                  placeholder="التصنيف الفرعي"
                  styles={{
                    multiValueRemove: (base, state) => ({
                      ...base,
                      color: state.isFocused ? "white" : "red",
                      backgroundColor: state.isFocused ? "red" : "transparent",
                      borderRadius: "4px",
                      transition: "0.3s",
                    }),
                  }}
                />
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> الماركة</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={formInputProduct.ProductBrandId}
                  onChange={(e) =>
                    setFormInputProduct({
                      ...formInputProduct,
                      ProductBrandId: e.target.value,
                    })
                  }
                >
                  <option value="">إختر الماركة </option>
                  {BrandsData.data
                    ? BrandsData.data.map((item) => (
                        <option value={item._id} key={item._id}>
                          {item.name}
                        </option>
                      ))
                    : null}
                </Form.Select>
              </Form.Group>
              <div>
                <h6>الألوان المتاحة للمنتج</h6>
                <div className="d-flex align-items-center justify-content-between ">
                  <ul className="list-unstyled d-flex gap-3 m-0 flex-wrap">
                    {formInputProduct.ProductColors.map((clr) => (
                      <li
                        key={clr}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          backgroundColor: clr,
                          border: "1px solid #ccc",
                          cursor: "pointer",
                        }}
                        title="اضغط لحذف اللون"
                        onClick={() => {
                          // عند الضغط على اللون، يتم حذفه
                          setFormInputProduct({
                            ...formInputProduct,
                            ProductColors:
                              formInputProduct.ProductColors.filter(
                                (c) => c !== clr
                              ),
                          });
                        }}
                      ></li>
                    ))}
                  </ul>
                  <div>
                    <img
                      src={add}
                      alt="add-color"
                      width="30px"
                      height="30px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setShowHideColorPicker(!showHideColorPicker)
                      }
                    />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col xs="12" md="8">
          <div className="d-flex justify-content-end">
            {showHideColorPicker ? (
              <CirclePicker
                colors={[
                  "#e74c3c",
                  "#8e44ad",
                  "#3498db",
                  "#27ae60",
                  "#f1c40f",
                  "#e67e22",
                  "#2c3e50",
                  "#ff0000",
                  "#008000",
                  "#000088",
                  "#008088",
                  "#000000",
                ]}
                onChange={onChangeColor}
              />
            ) : null}
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
