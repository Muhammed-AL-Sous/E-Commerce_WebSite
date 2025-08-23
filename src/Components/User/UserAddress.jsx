import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const UserAddress = () => {
  return (
    <div className="shadow rounded-4 p-3 mb-3 position-relative">
      <div
        className="d-flex align-items-center gap-2 position-absolute"
        style={{ left: "10px", top: "10px" }}
      >
        <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
          <span
            className="border border-primary rounded px-2 py-1 fw-semibold text-primary"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={"pen-to-square"} className="ms-1" />
            تعديل
          </span>
        </Link>

        <span
          className="border border-danger rounded px-2 py-1 fw-semibold text-danger"
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={"trash-can"} className="ms-1" />
          حذف
        </span>
      </div>
      <h3 className="text-secondary fw-bold mb-4"> المنزل </h3>
      <div>
        <address className="fw-bold">
          تفاصيل العنوان :{" "}
          <span className="fw-semibold text-muted">
            دمشق , ركن الدين , ساحة الميسات , شارع رقم 142
          </span>
        </address>
        <p className="fw-bold">
          رقم الهاتف :{" "}
          <span className="fw-semibold text-muted">009639520147</span>
        </p>
      </div>
    </div>
  );
};

export default UserAddress;
