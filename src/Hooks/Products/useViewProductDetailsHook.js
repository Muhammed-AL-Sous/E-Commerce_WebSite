// React Hooks & Redux
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Action
import {
  GetSimilarProducts,
  GetSpecificProduct,
} from "../../Redux/Actions/ProductAction";
import { GetSpecificCategory } from "../../Redux/Actions/CategoriesAction";
import { GetSpecificBrand } from "../../Redux/Actions/BrandsAction";

// Default Image
import mobile from "../../assets/images/mobile.png";

// Reselect
import { createSelector } from "reselect";

// Memoized selectors
const selectProductData = createSelector(
  (state) => state.Products.specific_product, // input selector
  (sp) => sp?.data || {} // result function
);

const selectCategoryData = createSelector(
  (state) => state.Categories.Specific_Category,
  (sc) => sc?.data || {}
);

const selectBrandData = createSelector(
  (state) => state.Brands.Specific_Brand,
  (sb) => sb?.data || {}
);

const selectSimilarProductsData = createSelector(
  (state) => state.Products.similar_products,
  (sm) => sm?.data || []
);

const useViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  const product = useSelector(selectProductData);
  const category = useSelector(selectCategoryData);
  const brand = useSelector(selectBrandData);
  const similarProducts = useSelector(selectSimilarProductsData);

  // Fetch product
  useEffect(() => {
    if (id) dispatch(GetSpecificProduct(id));
  }, [id, dispatch]);

  // Fetch category when product.category changes
  useEffect(() => {
    if (product?.category) dispatch(GetSpecificCategory(product.category));
  }, [product?.category, dispatch]);

  // Fetch brand when product.brand changes
  useEffect(() => {
    if (product?.brand) dispatch(GetSpecificBrand(product.brand));
  }, [product?.brand, dispatch]);

  // Fetch similar Products When Product or ID Changes
  useEffect(() => {
    if (id && product?.category) {
      dispatch(GetSimilarProducts(product.category));
    }
  }, [id, product?.category, dispatch]);

  // Prepare images with useMemo to avoid new reference each render
  const images = useMemo(() => {
    if (product?.images?.length) {
      return product.images.map((img) => ({ original: img }));
    }
    return [{ original: mobile }];
  }, [product?.images]);

  // Example: derived data using useMemo
  const categoryName = useMemo(
    () => category?.name || "بدون تصنيف",
    [category]
  );

  // Example: derived data using useMemo
  const brandName = useMemo(() => brand?.name || "بدون ماركة", [brand]);

  return {
    product,
    images,
    category,
    categoryName,
    brandName,
    similarProducts,
  };
};

export default useViewProductDetailsHook;
