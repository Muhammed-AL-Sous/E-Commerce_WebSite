import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllProductsWithPage } from "../../Redux/Actions/ProductAction";

// Hook لإدارة المنتجات مع Pagination و Loading
const useAdminProductManagementHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // جلب المنتجات من Redux
  const products = useSelector((state) => state.Products.allProducts);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(GetAllProductsWithPage(1, 3)); // جلب الصفحة الأولى
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  // pageCount ≥ 1 دائمًا لتجنب التحذيرات
  const pageCount = products?.paginationResult?.numberOfPages
    ? Math.max(1, Math.ceil(products.paginationResult.numberOfPages))
    : 1;

  // عند الضغط على صفحة
  const getPage = async (page) => {
    setLoading(true);
    await dispatch(GetAllProductsWithPage(page, 3));
    setLoading(false);
  };

  return { products, loading, pageCount, getPage };
};

export default useAdminProductManagementHook;
