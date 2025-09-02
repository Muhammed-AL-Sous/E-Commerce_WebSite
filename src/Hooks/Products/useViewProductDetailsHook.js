import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpecificProduct } from "../../Redux/Actions/ProductAction";
import { GetSpecificCategory } from "../../Redux/Actions/CategoriesAction";
import mobile from "../../assets/images/mobile.png";
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

const useViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  const product = useSelector(selectProductData);
  const category = useSelector(selectCategoryData);

  // Fetch product
  useEffect(() => {
    if (id) dispatch(GetSpecificProduct(id));
  }, [id, dispatch]);

  // Fetch category when product.category changes
  useEffect(() => {
    if (product?.category) dispatch(GetSpecificCategory(product.category));
  }, [product?.category, dispatch]);

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

  return { product, images, category, categoryName };
};

export default useViewProductDetailsHook;
