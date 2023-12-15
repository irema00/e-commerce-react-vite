import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import PageNotFound from "../pages/PageNotFound";
import TeamPage from "../pages/TeamPage";

export default function PageContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
