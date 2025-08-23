// React Hooks & Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";

const HomeCategoriesHook = () => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const CategoriesLoader = useSelector((state) => state.Categories.Loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategories());
  }, []);
  return [colors, CategoriesData, CategoriesLoader];
};

export default HomeCategoriesHook;
