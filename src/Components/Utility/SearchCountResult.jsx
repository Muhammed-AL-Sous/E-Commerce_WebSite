import UnopDropdown from "unop-react-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchCountResult = ({ title }) => {
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
              <button className="AnimatedDropdownButton px-1 py-1 fw-semibold">ترتيب حسب</button>
            </div>
          }
          delay={100}
          align="CENTER"
         hover
        >
          <div className="card-container shadow">
            <div>الأكثر مبيعاً</div>
            <div>الأعلى تقييماً</div>
            <div>السعر من الأقل إلى الأعلى</div>
            <div> السعر من الأعلى إلى الأقل</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
