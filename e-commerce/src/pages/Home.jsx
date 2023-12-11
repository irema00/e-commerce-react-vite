import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { CarouselTop } from "../utils/CarouselTop";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselTop />
      <Footer />
    </>
  );
}
