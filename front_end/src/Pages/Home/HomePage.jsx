import Slider from "../../Components/Home/Slider";
import HomeCategories from "../../Components/Home/HomeCategories";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandsContainer from "../../Components/Brands/BrandsContainer";

const HomePage = () => {
  return (
    <>
      <Slider />
      <HomeCategories />
      <ProductsContainer
        title="الأكثر مبيعاً"
        btnTitle="المزيد"
        path="/products"
      />
      <DiscountSection />
      <ProductsContainer
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
