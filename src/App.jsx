import NavBarLogin from "./Components/Utility/NavBarLogin";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";

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
      </Routes>
      {!HideNavAndFooter && <Footer />}
    </>
  );
};

export default App;
