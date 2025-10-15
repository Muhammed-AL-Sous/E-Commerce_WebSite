// React Router Dom
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";

// Pages
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoriesPage from "./Pages/Categories/AllCategoriesPage";
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import PaymentmethodPage from "./Pages/Checkout/PaymentmethodPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminLayout from "./Components/Utility/AdminLayout";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminOrdersList from "./Components/Admin/AdminOrdersList";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserLayout from "./Components/Utility/UserLayout";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserfavoriteProductsPage from "./Pages/User/UserfavoriteProductsPage";
import UserAddressPage from "./Pages/User/UserAddressPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";

export const App = () => {
  const location = useLocation();
  // const HideNavAndFooter = location.pathname === "/login";
  const HideNavAndFooter = ["/login", "/register"].includes(location.pathname);
  return (
    <>
      {!HideNavAndFooter && <NavBarLogin />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/allcategories" element={<AllCategoriesPage />} />
        <Route path="/AllBrands" element={<AllBrandsPage />} />
        <Route path="/products" element={<ShopProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order/paymentmethod" element={<PaymentmethodPage />} />

        {/* Admin Pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="allproducts" index element={<AdminAllProductsPage />} />
          <Route path="addbrand" element={<AdminAddBrandPage />} />
          <Route path="addcategory" element={<AdminAddCategoryPage />} />
          <Route path="addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="addproduct" element={<AdminAddProductPage />} />
          <Route path="editproduct/:id" element={<AdminEditProductPage />} />

          {/* Parent Route للطلبات */}
          <Route path="allorders" element={<AdminAllOrdersPage />}>
            {/* index يعرض قائمة الطلبات */}
            <Route index element={<AdminOrdersList />} />
            {/* تفاصيل الطلب */}
            <Route path="details/:id" element={<AdminOrderDetailsPage />} />
          </Route>
        </Route>
        {/*==== Admin Pages ====*/}

        {/* User Pages */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="allorders" index element={<UserAllOrdersPage />} />
          <Route path="favorites" element={<UserfavoriteProductsPage />} />
          <Route path="address" element={<UserAddressPage />} />
          <Route path="add-address" element={<UserAddAddressPage />} />
          <Route path="edit-address" element={<UserEditAddressPage />} />
          <Route path="Profile" element={<UserProfilePage />} />
        </Route>
        {/*==== User Pages ====*/}
      </Routes>
      {!HideNavAndFooter && <Footer />}
    </>
  );
};

export default App;
