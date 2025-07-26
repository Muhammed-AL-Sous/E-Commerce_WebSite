import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "التصنيف الأول", label: "التصنيف الأول" },
  { value: "التصنيف الثاني", label: "التصنيف الثاني" },
  { value: "التصنيف الثالث", label: "التصنيف الثالث" },
  { value: "التصنيف الرابع", label: "التصنيف الرابع" },
];

export default function AdminMultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="mb-3" style={{zIndex:"4"}}>
      <Select
        closeMenuOnSelect={false} // يسمح بتحديد أكثر من عنصر بدون غلق القائمة
        components={animatedComponents} // تفعيل الأنيميشن من المكتبة نفسها
        isMulti // لتفعيل اختيار متعدد
        options={options}
        value={selectedOptions}
        onChange={(selected) => setSelectedOptions(selected)}
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
  );
}
