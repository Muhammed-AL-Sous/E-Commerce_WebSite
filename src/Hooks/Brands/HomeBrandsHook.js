// React Hooks & Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBrands } from "../../Redux/Actions/BrandsAction.jsx";

const HomeBrandsHook = () => {
  const BrandsData = useSelector((state) => state.Brands.Brands);
  const BrandsLoader = useSelector((state) => state.Brands.Loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllBrands());
  }, []);
  return [BrandsData, BrandsLoader];
};

export default HomeBrandsHook;
