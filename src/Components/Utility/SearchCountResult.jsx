import UnopDropdown from "unop-react-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Redux
import { useDispatch } from "react-redux";
import { SetSortType } from "../../Redux/Actions/SortingProductsActions";

const SearchCountResult = ({ title }) => {
  const dispatch = useDispatch();

  function handleSelectSort(e) {
    switch (e) {
      case "unordered":
        dispatch(SetSortType(""));
        break;
      case "best sellers":
        dispatch(SetSortType("-sold"));
        break;
      case "top rated":
        dispatch(SetSortType("-ratingsQuantity"));
        break;
      case "Price from lowest to highest":
        dispatch(SetSortType("+price"));
        break;
      case "price from highest to lowest":
        dispatch(SetSortType("-price"));
        break;
      case "most quantity":
        dispatch(SetSortType("-quantity"));
        break;
      default:
        dispatch(SetSortType(""));
        break;
    }
  }

  const handler = () => {};
  return (
    <div className="d-flex justify-content-between mt-3 align-items-center ">
      <div>
        <h3 className="fw-semibold fs-4 m-0">{title}</h3>
      </div>
      <div>
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon="arrow-down-short-wide" />
              <button className="AnimatedDropdownButton px-1 py-1 fw-semibold">
                ترتيب حسب
              </button>
            </div>
          }
          delay={100}
          align="CENTER"
          hover
        >
          <div className="card-container shadow">
            <div onClick={() => handleSelectSort("unordered")}>بدون ترتيب</div>
            <div onClick={() => handleSelectSort("best sellers")}>
              الأكثر مبيعاً
            </div>
            <div onClick={() => handleSelectSort("top rated")}>
              الأعلى تقييماً
            </div>
            <div
              onClick={() => handleSelectSort("Price from lowest to highest")}
            >
              السعر من الأقل إلى الأعلى
            </div>
            <div
              onClick={() => handleSelectSort("price from highest to lowest")}
            >
              {" "}
              السعر من الأعلى إلى الأقل
            </div>
            <div onClick={() => handleSelectSort("most quantity")}>
              {" "}
              الأكثر كمية
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
