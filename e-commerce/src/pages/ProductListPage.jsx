import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Clients from "../layouts/productlistPage/Clients";
import ProductLists from "../layouts/productlistPage/productLists";

export default function ProductListPage() {
  return (
    <>
      <Header />
      <ProductLists />
      <Clients />
      <Footer />
    </>
  );
}
