// React Hooks & Redux
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { GetAllProducts } from "../../Redux/Actions/ProductAction";

const ViewSearchProductsHook = () => {
  const ProductsData = useSelector((state) => state.Products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);

  let items = [];

  if (ProductsData.data) {
    items = ProductsData.data;
  } else {
    items = [];
  }

  return [items];
};

export default ViewSearchProductsHook;
