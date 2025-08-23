// React Hooks & Redux
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";

// External Libraries
import notify from "../../Hooks/ToastNotifications";

// External Libraries
import { CreateSubCategory } from "../../Redux/Actions/SubCategoryAction";

const AddSubCategoryPageHook = () => {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCategories());
  }, []);

  const handleAddClick = async (e) => {
    e.preventDefault();

    // Internet Is Offline
    if (!navigator.onLine) {
      notify("يرجى التحقق من الإتصال بشبكة الإنترنت", "warn");
      return;
    }

    if (!subCategoryName.trim()) {
      notify("يرجى تعبئة إسم التصنيف الفرعي", "warn");
      return;
    }

    if (categoryId === "") {
      notify("يرجى إختيار التصنيف الرئيسي ", "warn");
      return;
    }

    const data = {
      name: subCategoryName,
      category: categoryId,
    };

    setLoading(true);

    const response = await dispatch(CreateSubCategory(data));

    if (response.success) {
      setSubCategoryName("");
      setCategoryId("");
      notify("تم إضافة التصنيف الجديد بنجاح", "success");
    } else {
      notify(response.message || "حدث خطأ أثناء الإضافة", "error");
    }

    setLoading(false);
  };

  return [
    subCategoryName,
    setSubCategoryName,
    categoryId,
    setCategoryId,
    CategoriesData,
    handleAddClick,
    loading,
  ];
};

export default AddSubCategoryPageHook;
