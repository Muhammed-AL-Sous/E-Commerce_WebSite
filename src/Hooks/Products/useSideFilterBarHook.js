// React Hooks & Redux
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";
import { GetAllBrands } from "../../Redux/Actions/BrandsAction";

const useSideFilterBarHook = () => {
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const BrandsData = useSelector((state) => state.Brands.Brands);
  const dispatch = useDispatch();

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

  return { AllCategories, AllBrands };
};

export default useSideFilterBarHook;
