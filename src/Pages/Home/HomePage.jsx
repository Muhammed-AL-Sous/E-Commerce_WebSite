import Slider from "../../Components/Home/Slider";
import HomeCategories from "../../Components/Home/HomeCategories";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandsContainer from "../../Components/Brands/BrandsContainer";
import ViewHomeProductsHook from "../../Hooks/Products/ViewHomeProductsHook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();

  return (
    <>
      <Slider />
      <HomeCategories />
      <ProductsContainer
        ProductsData={items}
        title="الأكثر مبيعاً"
        btnTitle="المزيد"
        path="/products"
      />
      <DiscountSection />
      <ProductsContainer
        ProductsData={items}
        title="أحدث الأزياء"
        btnTitle="المزيد"
        path="/products"
      />
      <BrandsContainer
        title="أشهر الماركات"
        btnTitle="المزيد"
        path="/allbrands"
      />
    </>
  );
};

export default HomePage;
