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
      <ProductsContainer title="الأكثر مبيعاً" btnTitle="المزيد" />
      <DiscountSection />
      <ProductsContainer title="أحدث الأزياء" btnTitle="المزيد" />
      <BrandsContainer title="أشهر الماركات" btnTitle="المزيد" />
    </>
  );
};

export default HomePage;
