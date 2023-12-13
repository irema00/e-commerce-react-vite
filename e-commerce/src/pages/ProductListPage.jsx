import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Clients from "../layouts/productlistPage/Clients";
import ProductLists from "../layouts/productlistPage/productLists";
import CategoryList from "../layouts/productlistPage/CategoryList";

export default function ProductListPage() {
  return (
    <>
      <Header />
      <CategoryList />
      <ProductLists />
      <Clients />
      <Footer />
    </>
  );
}
