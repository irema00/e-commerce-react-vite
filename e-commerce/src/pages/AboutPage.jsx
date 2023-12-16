import React from "react";
import Header from "../layouts/Header";
import AboutHero from "../layouts/aboutPage/aboutHero";
import Career from "../layouts/aboutPage/career";
import ClientTop from "../layouts/aboutPage/clientTop";
import Stats from "../layouts/aboutPage/stats";
import Video from "../layouts/aboutPage/video";
import Clients from "../layouts/productlistPage/Clients";
import Footer from "../layouts/Footer";
import TeamPage from "../layouts/contactPage/TeamPage";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <Stats /> <Video />
      <TeamPage />
      <ClientTop />
      <Clients />
      <Career />
      <Footer />
    </>
  );
}
