import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

export default function PageContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
}
