// React Hooks & Redux
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Action
import {
  GetSimilarProducts,
  GetSpecificProduct,
  ClearSpecificProduct,
} from "../../Redux/Actions/ProductAction";
import {
  GetSpecificCategory,
  ClearSpecificCategory,
} from "../../Redux/Actions/CategoriesAction";
import {
  GetSpecificBrand,
  ClearSpecificBrand,
} from "../../Redux/Actions/BrandsAction";

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

  // تنظيف الحالة عند الخروج أو تغيير id
  useEffect(() => {
    return () => {
      dispatch(ClearSpecificProduct());
      dispatch(ClearSpecificCategory());
      dispatch(ClearSpecificBrand());
    };
  }, [dispatch]);

  // جلب المنتج
  useEffect(() => {
    if (id) {
      dispatch(GetSpecificProduct(id));
    }
  }, [id, dispatch]);

  // جلب التصنيف عند تغيّر category
  useEffect(() => {
    if (product?.category) dispatch(GetSpecificCategory(product.category));
  }, [product?.category, dispatch]);

  // جلب الماركة عند تغيّر brand
  useEffect(() => {
    if (product?.brand) dispatch(GetSpecificBrand(product.brand));
  }, [product?.brand, dispatch]);

  // جلب المنتجات المشابهة
  useEffect(() => {
    if (id && product?.category) {
      dispatch(GetSimilarProducts(product.category));
    }
  }, [id, product?.category, dispatch]);

  // إعداد الصور
  const images = useMemo(() => {
    if (product?.images?.length) {
      return product.images.map((img) => ({ original: img }));
    }
    return [{ original: mobile }];
  }, [product?.images]);

  const categoryName = category?.name || "بدون تصنيف";
  const brandName = brand?.name || "بدون ماركة";

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
