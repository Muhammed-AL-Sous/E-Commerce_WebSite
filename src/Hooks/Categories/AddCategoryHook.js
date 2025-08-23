// Default Image
import imageUpload from "../../assets/images/avatar.png";

// React Hooks & Redux
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateCategory } from "../../Redux/Actions/CategoriesAction";

// External Libraries
import notify from "../ToastNotifications.js";

const AddCategoryHook = () => {
  const [image, setImage] = useState(imageUpload);
  const [categoryName, setCategoryName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Handle image change
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  // Handle Add Category
  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (!categoryName.trim() || !selectedFile) {
      notify("يرجى إدخال اسم التصنيف واختيار صورة", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("image", selectedFile);

    setLoading(true);

    const res = await dispatch(CreateCategory(formData));

    if (res.success) {
      setImage(imageUpload);
      setSelectedFile(null);
      setCategoryName("");
      notify("تم إضافة التصنيف الجديد بنجاح", "success");
    } else {
      notify(res.message || "حدث خطأ أثناء الإضافة", "error");
    }

    setLoading(false);
  };

  // ==== Handle Add Category ==== //

  return [
    image,
    categoryName,
    loading,
    setCategoryName,
    onImageChange,
    handleAddCategory,
  ];
};

export default AddCategoryHook;
