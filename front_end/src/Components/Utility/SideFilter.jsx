import "../../Styles/SideFilterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React Hooks
import { useState, useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";

const SideFilter = () => {
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
                    <input type="checkbox" />
                    <label>الكل</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>أجهزة منزلية</label>
                  </div>

                  <div>
                    <input type="checkbox" />
                    <label>أجهزة كهربائية</label>
                  </div>

                  <div>
                    <input type="checkbox" />
                    <label>إلكترونيات</label>
                  </div>

                  <div>
                    <input type="checkbox" />
                    <label>تخفيضات</label>
                  </div>
                </div>

                <div className="main-brands">
                  <h3>الماركة</h3>
                  <div>
                    <input type="checkbox" />
                    <label>الكل</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>آبل</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>سامسونغ</label>
                  </div>
                </div>

                <div className="main-prices">
                  <h3>السعر</h3>
                  <div>
                    <label>من</label>
                    <input type="number" />
                  </div>
                  <div>
                    <label>إلى</label>
                    <input type="number" />
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
              <input type="checkbox" />
              <label>الكل</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>أجهزة منزلية</label>
            </div>

            <div>
              <input type="checkbox" />
              <label>أجهزة كهربائية</label>
            </div>

            <div>
              <input type="checkbox" />
              <label>إلكترونيات</label>
            </div>

            <div>
              <input type="checkbox" />
              <label>تخفيضات</label>
            </div>
          </div>

          <div className="main-brands">
            <h3>الماركة</h3>
            <div>
              <input type="checkbox" />
              <label>الكل</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>آبل</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>سامسونغ</label>
            </div>
          </div>

          <div className="main-prices">
            <h3>السعر</h3>
            <div>
              <label>من</label>
              <input type="number" />
            </div>
            <div>
              <label>إلى</label>
              <input type="number" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SideFilter;
