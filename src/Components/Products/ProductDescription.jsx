import { useParams } from "react-router-dom";
import useViewProductDetailsHook from "../../Hooks/Products/useViewProductDetailsHook";

const ProductDescription = () => {
  const { id } = useParams();
  const { categoryName, product, brandName } = useViewProductDetailsHook(id);

  return (
    <div
      className="shadow p-4 rounded-4"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <div className="mb-4">
        <h4 className="text-muted fw-bolder">{categoryName} :</h4>
        <p className="text-secondary fw-semibold mb-1">{product.title}</p>
        <span className="text-warning fw-semibold">
          {product.ratingsQuantity}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="text-muted fw-bolder mb-3">
          الماركة :{" "}
          <span className="text-secondary fw-semibold"> {brandName}</span>
        </h4>
        <ul className="list-unstyled d-flex gap-2">
          {product.availableColors && product.availableColors.length > 0 ? (
            product.availableColors.map((color, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: color,
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                }}
              ></li>
            ))
          ) : (
            <h5 className="text-muted fs-6 fw-semibold">
              لا يوجد ألوان متاحة لهذا المنتج
            </h5>
          )}
        </ul>
      </div>

      <div>
        <h4 className="text-muted fw-bolder">المواصفات :</h4>
        <p className="text-info-emphasis fw-medium lh-lg">
          {product.description}
        </p>
      </div>
      <div className="d-flex align-items-center">
        <span
          className="text-secondary fw-semibold rounded-2"
          style={{
            padding: "7px 20px",
            margin: "0 5px",
            border: "2px solid #ccc",
          }}
        >
          {product.price}$
        </span>
        <span
          style={{
            backgroundColor: "#272727",
            padding: "8px 10px",
            color: "white",
            borderRadius: "0.375rem",
            cursor: "pointer",
          }}
        >
          أضف للسلة
        </span>
      </div>
    </div>
  );
};

export default ProductDescription;
