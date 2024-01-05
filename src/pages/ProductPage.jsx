import React from "react";
import Header from "../layouts/Header";
import Clients from "../layouts/productlistPage/Clients";
import Footer from "../layouts/Footer";
import ProductDetail from "../layouts/productPage/ProductDetail.jsx";
import ProductDetailBestseller from "../layouts/ProductPage/ProductDetailBestseller";
import ProductDescription from "../layouts/productPage/ProductDescription";

export default function ProductPage() {
  return (
    <>
      <Header />
      <ProductDetail />
      <ProductDescription />
      <ProductDetailBestseller />
      <Clients />
      <Footer />
    </>
  );
}
