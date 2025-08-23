// Default Image
import imageUpload from "../../assets/images/avatar.png";

// React Hooks & Redux
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateBrand } from "../../Redux/Actions/BrandsAction";

// External Libraries
import notify from "../ToastNotifications.js";

const AddBrandHook = () => {
  const [image, setImage] = useState(imageUpload);
  const [BrandName, setBrandName] = useState("");
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

  // Handle Add Brand
  const handleAddBrand = async (e) => {
    e.preventDefault();

    if (!BrandName.trim() || !selectedFile) {
      notify("يرجى إدخال اسم التصنيف واختيار صورة", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", BrandName);
    formData.append("image", selectedFile);

    setLoading(true);

    const res = await dispatch(CreateBrand(formData));

    if (res.success) {
      setImage(imageUpload);
      setSelectedFile(null);
      setBrandName("");
      notify("تم إضافة الماركة الجديدة بنجاح", "success");
    } else {
      notify(res.message || "حدث خطأ أثناء الإضافة", "error");
    }

    setLoading(false);
  };

  // ==== Handle Add Brand ==== //

  return [
    image,
    BrandName,
    loading,
    setBrandName,
    onImageChange,
    handleAddBrand,
  ];
};

export default AddBrandHook;
