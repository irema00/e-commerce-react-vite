import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/globalActions";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Clients from "../layouts/productlistPage/Clients";
import ProductLists from "../layouts/productlistPage/ProductLists";
import CategoryList from "../layouts/productlistPage/CategoryList";
import PageBanner from "../layouts/productlistPage/PageBanner";

export default function ProductListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <Header />
      <PageBanner />
      <CategoryList />
      <ProductLists />
      <Clients />
      <Footer />
    </>
  );
}
