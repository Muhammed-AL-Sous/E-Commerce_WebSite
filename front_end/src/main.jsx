import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import App from "./App.jsx";

// Import BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

// Import A Customized File For Collecting Icons
import "./Library/FontAwesome.jsx";

// Redux Imports
import { Provider } from "react-redux";
import store from "./Redux/Store.jsx";

// Browser Router
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/Utility/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/E-Commerce_WebSite">
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
