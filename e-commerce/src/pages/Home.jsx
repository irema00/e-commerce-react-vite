import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { CarouselTop } from "../utils/CarouselTop";
import { CarouselBottom } from "../utils/CarouselBottom";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselTop />
      <CarouselBottom />
      <Footer />
    </>
  );
}
