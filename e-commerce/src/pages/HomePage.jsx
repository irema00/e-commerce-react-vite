import React from "react";

import Header from "../layouts/Header";
import { CarouselTop } from "../layouts/homepage/CarouselTop";
import EditorsPick from "../layouts/homepage/EditorsPick";
import Bestseller from "../layouts/homepage/Bestseller";
import { CarouselBottom } from "../layouts/homepage/CarouselBottom";
import ContainerFluid from "../layouts/homepage/ContainerFluid";
import Footer from "../layouts/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <CarouselTop />
      <EditorsPick />
      <Bestseller />
      <CarouselBottom />
      <ContainerFluid />
      <Footer />
    </>
  );
}
