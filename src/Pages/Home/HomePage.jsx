import Slider from "../../Components/Home/Slider";
import NavBarLogin from "../../Components/Utility/NavBarLogin";
import HomeCategories from "../../Components/Home/HomeCategories";
import ProductsContainer from "../../Components/Products/ProductsContainer";

const HomePage = () => {
  return (
    <>
      <NavBarLogin />
      <Slider />
      <HomeCategories />
      <ProductsContainer />
    </>
  );
};

export default HomePage;
