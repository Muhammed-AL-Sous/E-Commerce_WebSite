import React from "react";
import ProductCard from "../../Components/Products/ProductCard";
import { Row } from "react-bootstrap";

const UserfavoriteProductsPage = () => {
  return (
    <>
      <div className="text-muted fs-4 fw-semibold mb-3">المنتجات المفضلة</div>
      <Row className="d-flex justify-content-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </>
  );
};

export default UserfavoriteProductsPage;
