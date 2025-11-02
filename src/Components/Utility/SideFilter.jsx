import "../../Styles/SideFilterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React Hooks
import { useState, useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";

// Filtering SideBar Hook
import useSideFilterBarHook from "../../Hooks/Products/useSideFilterBarHook";

const SideFilter = () => {
  const {
    AllCategories,
    AllBrands,
    handleCategoriesClick,
    handleBrandsClick,
    categoriesChecked,
    brandsChecked,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
  } = useSideFilterBarHook();

  // React States
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [show, setShow] = useState(false);

  // ==== React States ==== //

  // Refresh  when resizing the screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <Button onClick={() => setShow(true)}>
            <FontAwesomeIcon
              icon="filter"
              style={{ position: "relative", top: "1px", marginLeft: "5px" }}
            />
            فلترة
          </Button>
          <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>فلترة حسب ما يلي :</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <>
                <div className="main-classes">
                  <h3>الفئة</h3>
                  <div>
                    <input
                      type="checkbox"
                      id="all-categories"
                      value=""
                      onChange={handleCategoriesClick}
                      checked={categoriesChecked.length === 0}
                    />
                    <label htmlFor="all-categories">الكل</label>
                  </div>
                  {AllCategories.map((category) => (
                    <div key={category._id}>
                      <input
                        type="checkbox"
                        id={category._id}
                        value={category._id}
                        onChange={handleCategoriesClick}
                        checked={categoriesChecked.includes(category._id)}
                      />
                      <label htmlFor={category._id}>{category.name}</label>
                    </div>
                  ))}
                </div>

                <div className="main-brands">
                  <h3>الماركة</h3>
                  <div>
                    <input
                      type="checkbox"
                      id="all-brands"
                      value=""
                      onChange={handleBrandsClick}
                      checked={brandsChecked.length === 0}
                    />
                    <label htmlFor="all-brands">الكل</label>
                  </div>
                  {AllBrands.map((brand) => (
                    <div key={brand._id}>
                      <input
                        type="checkbox"
                        id={brand._id}
                        value={brand._id}
                        onChange={handleBrandsClick}
                        checked={brandsChecked.includes(brand._id)}
                      />
                      <label htmlFor={brand._id}>{brand.name}</label>
                    </div>
                  ))}
                </div>

                <div className="main-prices">
                  <h3>السعر</h3>
                  <div>
                    <label>من</label>
                    <input
                      type="number"
                      value={priceFrom}
                      onChange={(e) => setPriceFrom(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>إلى</label>
                    <input
                      type="number"
                      value={priceTo}
                      onChange={(e) => setPriceTo(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={() => setShow(false)}
                    variant="warning"
                    style={{
                      color: "white",
                      margin: "20px auto 0",
                      width: "200px",
                      display: "block",
                    }}
                  >
                    <FontAwesomeIcon
                      icon="filter"
                      style={{
                        position: "relative",
                        top: "1px",
                        marginLeft: "5px",
                      }}
                    />
                    فلترة
                  </Button>
                </div>
              </>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <>
          <div className="main-classes">
            <h3>الفئة</h3>
            <div>
              <input
                type="checkbox"
                id="all-categories"
                value=""
                onChange={handleCategoriesClick}
                checked={categoriesChecked.length === 0}
              />
              <label htmlFor="all-categories">الكل</label>
            </div>
            {AllCategories.map((category) => (
              <div key={category._id}>
                <input
                  type="checkbox"
                  id={category._id}
                  value={category._id}
                  onChange={handleCategoriesClick}
                  checked={categoriesChecked.includes(category._id)}
                />
                <label htmlFor={category._id}>{category.name}</label>
              </div>
            ))}
          </div>

          <div className="main-brands">
            <h3>الماركة</h3>

            {/* خيار الكل */}
            <div>
              <input
                type="checkbox"
                id="all-brands"
                value=""
                onChange={handleBrandsClick}
                checked={brandsChecked.length === 0} // ✅ "الكل" يكون محدد إذا لا توجد ماركات محددة
              />
              <label htmlFor="all-brands">الكل</label>
            </div>

            {/* باقي الماركات */}
            {AllBrands.map((brand) => (
              <div key={brand._id}>
                <input
                  type="checkbox"
                  id={brand._id}
                  value={brand._id}
                  onChange={handleBrandsClick}
                  checked={brandsChecked.includes(brand._id)} // ✅ يعتمد على الحالة
                />
                <label htmlFor={brand._id}>{brand.name}</label>
              </div>
            ))}
          </div>

          <div className="main-prices">
            <h3>السعر</h3>
            <div>
              <label>من</label>
              <input
                type="number"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
              />
            </div>
            <div>
              <label>إلى</label>
              <input
                type="number"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SideFilter;
