import React from "react";
import Header from "../layouts/Header";
import Clients from "../layouts/productlistPage/Clients";
import Footer from "../layouts/Footer";
import ProductDetail from "../layouts/productPage/productDetail";

export default function ProductDetailPage() {
  return (
    <>
      <Header />
      <ProductDetail />
      <Clients />
      <Footer />
    </>
  );
}
