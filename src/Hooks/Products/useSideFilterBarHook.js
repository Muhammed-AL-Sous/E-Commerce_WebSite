// React Hooks & Redux
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";
import { GetAllBrands } from "../../Redux/Actions/BrandsAction";
import { SortingByCategories } from "../../Redux/Actions/SortingByCategoriesActions";
import { SortingByBrands } from "../../Redux/Actions/SortingByBrandsActions";
import {
  SortingByPriceGte,
  SortingByPriceLte,
} from "../../Redux/Actions/SortingByPricesActions";

const useSideFilterBarHook = () => {
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const BrandsData = useSelector((state) => state.Brands.Brands);
  const dispatch = useDispatch();
  const [categoriesChecked, setCategoriesChecked] = useState([]);
  const [brandsChecked, setBrandsChecked] = useState([]);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  useEffect(() => {
    const FetchData = async () => {
      await dispatch(GetAllCategories());
      await dispatch(GetAllBrands());
    };
    FetchData();
  }, [dispatch]);

  let AllCategories = [],
    AllBrands = [];

  if (CategoriesData.data) {
    AllCategories = CategoriesData.data;
  }
  if (BrandsData.data) {
    AllBrands = BrandsData.data;
  }

  const handleCategoriesClick = (e) => {
    const { value, checked } = e.target;

    if (value === "") {
      // إذا ضغط على "الكل"
      if (checked) {
        setCategoriesChecked([]); // إلغاء تحديد جميع الفئات
      }
    } else {
      if (checked) {
        // عند تحديد فئة معينة، أزل "الكل" إذا كان محددًا
        setCategoriesChecked((prev) => [
          ...prev.filter((v) => v !== ""),
          value,
        ]);
      } else {
        // عند إلغاء تحديد فئة
        setCategoriesChecked((prev) => prev.filter((v) => v !== value));
      }
    }
  };

  const handleBrandsClick = (e) => {
    const { value, checked } = e.target;

    if (value === "") {
      // إذا ضغط على "الكل"
      if (checked) {
        setBrandsChecked([]); // إلغاء تحديد جميع الماركات
      }
    } else {
      if (checked) {
        // عند تحديد ماركة معينة، أزل "الكل" إذا كان محددًا
        setBrandsChecked((prev) => [...prev.filter((v) => v !== ""), value]);
      } else {
        // عند إلغاء تحديد ماركة
        setBrandsChecked((prev) => prev.filter((v) => v !== value));
      }
    }
  };

  let queryCategories = categoriesChecked
    .map((val) => "category[in][]=" + val)
    .join("&");

  let queryBrands = brandsChecked.map((val) => "brand[in][]=" + val).join("&");

  useEffect(() => {
    dispatch(SortingByCategories(queryCategories));
    dispatch(SortingByBrands(queryBrands));
  }, [categoriesChecked, brandsChecked]);

  useEffect(() => {
    // لا تُرسل أكشنات إذا كانت القيم فارغة
    if (priceFrom !== "") {
      dispatch(SortingByPriceGte(priceFrom));
    } else {
      dispatch(SortingByPriceGte(null)); // لتفريغ الفلتر
    }

    if (priceTo !== "") {
      dispatch(SortingByPriceLte(priceTo));
    } else {
      dispatch(SortingByPriceLte(null));
    }
  }, [priceFrom, priceTo]);

  return {
    AllCategories,
    AllBrands,
    handleCategoriesClick,
    handleBrandsClick,
    categoriesChecked,
    brandsChecked,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
  };
};

export default useSideFilterBarHook;
