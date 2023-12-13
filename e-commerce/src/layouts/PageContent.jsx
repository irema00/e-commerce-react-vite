import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

export default function PageContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
}
