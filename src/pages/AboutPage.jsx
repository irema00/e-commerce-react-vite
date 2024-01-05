import React from "react";
import Header from "../layouts/Header";
import AboutHero from "../layouts/aboutPage/AboutHero";
import Career from "../layouts/aboutPage/Career";
import ClientTop from "../layouts/aboutPage/ClientTop";
import Stats from "../layouts/aboutPage/Stats";
import Video from "../layouts/aboutPage/Video";
import Clients from "../layouts/productlistPage/Clients";
import Footer from "../layouts/Footer";
import TeamPage from "../layouts/contactPage/TeamPage";
import Problems from "../layouts/aboutPage/Problems";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <Problems />
      <Stats />
      <Video />
      <TeamPage />
      <ClientTop />
      <Clients />
      <Career />
      <Footer />
    </>
  );
}
