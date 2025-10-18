// React Hooks & Redux
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";
import { GetAllBrands } from "../../Redux/Actions/BrandsAction";
import {
  GetSpecificProduct,
  UpdateProduct,
} from "../../Redux/Actions/ProductAction";

// External Libraries
import makeAnimated from "react-select/animated";
import notify from "../../Hooks/ToastNotifications";
import { GetSubCategory } from "../../Redux/Actions/SubCategoryAction";

// react-router-dom
import { useNavigate } from "react-router-dom";

// Reselect
import { createSelector } from "reselect";

// Memoized selectors
const selectProductData = createSelector(
  (state) => state.Products.specific_product,
  (sp) => sp?.data || {}
);

const EditProductHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(selectProductData);

  // States
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

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const animatedComponents = makeAnimated();
  const [loading, setLoading] = useState(false);
  const [showHideColorPicker, setShowHideColorPicker] = useState(false);
  const [images, setImages] = useState([]);
  const maxNumber = 4;

  // Redux data
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const BrandsData = useSelector((state) => state.Brands.Brands);
  const SubCategoriesData = useSelector(
    (state) => state.SubCategories.Sub_Categories
  );

  // Handlers
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onChangeSelectMainCategory = (e) => {
    const selectedCategory = e.target.value;
    setFormInputProduct((prev) => ({
      ...prev,
      ProductMaincategoryId: selectedCategory,
    }));
    if (selectedCategory) dispatch(GetSubCategory(selectedCategory));
  };

  const onChangeColor = (updatedColor) => {
    const hex = updatedColor.hex;
    if (!formInputProduct.ProductColors.includes(hex)) {
      setFormInputProduct((prev) => ({
        ...prev,
        ProductColors: [...prev.ProductColors, hex],
      }));
    }
    setShowHideColorPicker(false);
  };

  // Fetch data
  useEffect(() => {
    if (id) dispatch(GetSpecificProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(GetAllCategories());
    dispatch(GetAllBrands());
  }, [dispatch]);

  // When product data arrives
  useEffect(() => {
    if (product && product.title) {
      setFormInputProduct((prev) => ({
        ...prev,
        ProductName: product.title || "",
        ProductDescription: product.description || "",
        ProductAvailableQuantity: product.quantity || "",
        ProductPriceBeforeDiscount: product.priceBeforeDiscount || "",
        ProductPrice: product.price || "",
        ProductMaincategoryId: product.category || "",
        ProductSelectedSubcategoriesId: Array.isArray(product.subcategory)
          ? product.subcategory
          : [],
        ProductBrandId: product.brand || "",
        ProductColors: Array.isArray(product.availableColors)
          ? product.availableColors
          : [],
      }));

      // Fetch subcategories of main category
      if (product.category) dispatch(GetSubCategory(product.category));
    }
  }, [product, dispatch]);

  // Format subcategory options
  useEffect(() => {
    if (Array.isArray(SubCategoriesData)) {
      const formattedOptions = SubCategoriesData.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(formattedOptions);
    }
  }, [SubCategoriesData]);

  // Select subcategories when product has them
  useEffect(() => {
    if (product && Array.isArray(product.subcategory) && options.length > 0) {
      const selected = options.filter((option) =>
        product.subcategory.includes(option.value)
      );
      setSelectedOptions(selected);
    }
  }, [product, options]);

  // Initialize product images (existing)
  useEffect(() => {
    if (Array.isArray(product?.images)) {
      const initialImages = product.images.map((imgUrl) => ({
        data_url: imgUrl,
        file: null, // existing image, no file yet
      }));
      setImages(initialImages);
    }
  }, [product]);

  // Edit Product Handler
  const handleEditProduct = async (e) => {
    e.preventDefault();

    if (!id) {
      notify("لم يتم تحديد المنتج للتعديل", "error");
      return;
    }

    if (
      Number(formInputProduct.ProductPriceBeforeDiscount) <
      Number(formInputProduct.ProductPrice)
    ) {
      notify("السعر بعد الخصم يجب أن يكون أقل من السعر قبل الخصم", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("title", formInputProduct.ProductName);
    formData.append("description", formInputProduct.ProductDescription);
    formData.append("quantity", formInputProduct.ProductAvailableQuantity);
    formData.append("price", formInputProduct.ProductPrice);
    formData.append("brand", formInputProduct.ProductBrandId);
    formData.append("category", formInputProduct.ProductMaincategoryId);

    // Safe check before adding cover image
    const imageCover = images?.[0]?.file;
    if (imageCover) {
      formData.append("imageCover", imageCover);
    }

    // Add colors
    formInputProduct.ProductColors.forEach((color) =>
      formData.append("availableColors", color)
    );

    // Add selected subcategories
    formInputProduct.ProductSelectedSubcategoriesId.forEach((subId) =>
      formData.append("subcategory", subId)
    );

    // Add extra images (newly uploaded only)
    if (Array.isArray(images) && images.length > 0) {
      images.forEach((img) => {
        if (img.file) formData.append("images", img.file);
      });
    }

    setLoading(true);

    const response = await dispatch(UpdateProduct({ id, formData }));

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

      notify("تم تعديل المنتج بنجاح", "success");

      setTimeout(() => {
        navigate("/admin/allproducts"); // <-- فقط المسار النسبي داخل المشروع
      }, 2000);
    } else {
      notify(response?.message || "حدث خطأ أثناء التعديل", "error");
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
    handleEditProduct,
    images,
    formInputProduct,
    setFormInputProduct,
    CategoriesData,
    setSelectedOptions,
    BrandsData,
    setShowHideColorPicker,
  ];
};

export default EditProductHook;
