import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import PageNotFound from "../pages/PageNotFound";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/SignUpPage";

export default function PageContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}
