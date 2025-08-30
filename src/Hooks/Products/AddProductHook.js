// React Hooks & Redux
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";
import { GetAllBrands } from "../../Redux/Actions/BrandsAction";

// External Libraries

import makeAnimated from "react-select/animated";
import notify from "../../Hooks/ToastNotifications";
import { GetSubCategory } from "../../Redux/Actions/SubCategoryAction";
import { CreateProduct } from "../../Redux/Actions/ProductAction";

const AddProductHook = () => {
  const [formInputProduct, setFormInputProduct] = useState({
    ProductName: "",
    ProductDescription: "",
    ProductAvailableQuantity: "",
    ProductPriceBeforeDiscount: "",
    ProductPrice: "",
    ProductMaincategoryId: "",
    ProductSubcategoriesId: [],
    ProductSelectedSubcategoriesId: [],
    ProductBrandId: "",
    ProductColors: [],
  });

  // Selected Options
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const animatedComponents = makeAnimated();

  // Redux Data
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const BrandsData = useSelector((state) => state.Brands.Brands);
  const SubCategoriesData = useSelector(
    (state) => state.SubCategories.Sub_Categories
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Circle Color Picker
  const [showHideColorPicker, setShowHideColorPicker] = useState(false);

  // React Images Uploading Logic
  const [images, setImages] = useState([]);
  const maxNumber = 4; // أقصى عدد صور

  const onChange = (imageList) => {
    setImages(imageList);
  };

  useEffect(() => {
    dispatch(GetAllCategories());
  }, []);

  useEffect(() => {
    dispatch(GetAllBrands());
  }, []);

  const onChangeSelectMainCategory = (e) => {
    setFormInputProduct({
      ...formInputProduct,
      ProductMaincategoryId: e.target.value,
    });

    if (e.target.value !== "") {
      dispatch(GetSubCategory(e.target.value));
    }
  };

  // Formatted Options For React Select Library
  useEffect(() => {
    if (Array.isArray(SubCategoriesData)) {
      const formattedOptions = SubCategoriesData.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(formattedOptions);
    }
  }, [SubCategoriesData]);

  // Circle Color Picker On Change Function
  function onChangeColor(updatedColor) {
    if (!formInputProduct.ProductColors.includes(updatedColor.hex)) {
      setFormInputProduct({
        ...formInputProduct,
        ProductColors: [...formInputProduct.ProductColors, updatedColor.hex],
      });
    }
    setShowHideColorPicker(false);
  }

  // Add A New Product
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", formInputProduct.ProductName);
    formData.append("description", formInputProduct.ProductDescription);
    formData.append("quantity", formInputProduct.ProductAvailableQuantity);
    formData.append("price", formInputProduct.ProductPriceBeforeDiscount);
    formData.append("brand", formInputProduct.ProductBrandId);
    formData.append("category", formInputProduct.ProductMaincategoryId);

    if (
      formInputProduct.ProductPriceBeforeDiscount <
      formInputProduct.ProductPrice
    ) {
      notify("السعر بعد الخصم يجب أن يكون أقل من السعر قبل الخصم ", "warn");
      return;
    }

    // Add Image Cover
    if (images.length > 0) {
      formData.append("imageCover", images[0].file);
    }

    // Add colors array
    formInputProduct.ProductColors.map((color) =>
      formData.append("availableColors", color)
    );

    // Add Product Selected Subcategories Id array
    formInputProduct.ProductSelectedSubcategoriesId.map((SubcategoriesId) =>
      formData.append("subcategory", SubcategoriesId)
    );

    // Add Product Selected Images array
    images.map((img) => formData.append("images", img.file));

    setLoading(true);

    const response = await dispatch(CreateProduct(formData));

    if (response.success) {
      setFormInputProduct({
        ProductName: "",
        ProductDescription: "",
        ProductAvailableQuantity: "",
        ProductPriceBeforeDiscount: "",
        ProductPrice: "",
        ProductMaincategoryId: "",
        ProductSubcategoriesId: [],
        ProductSelectedSubcategoriesId: [],
        ProductBrandId: "",
        ProductColors: [],
      });

      // Reset images after product creation
      setImages([]);

      // Reset selects
      setSelectedOptions([]); // التصنيفات الفرعية

      notify("تمت إضافة المنتج بنجاح", "success");
    } else {
      notify(response.message, "error"); // الرسالة الآن أول خطأ فقط
    }
    setLoading(false);
  };
  return [
    selectedOptions,
    options,
    animatedComponents,
    loading,
    showHideColorPicker,
    maxNumber,
    onChange,
    onChangeSelectMainCategory,
    onChangeColor,
    handleAddProduct,
    images,
    formInputProduct,
    setFormInputProduct,
    CategoriesData,
    setSelectedOptions,
    BrandsData,
    setShowHideColorPicker,
  ];
};

export default AddProductHook;
