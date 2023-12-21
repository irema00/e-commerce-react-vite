import React from "react";
import TeamPage from "../layouts/contactPage/TeamPage";
import ContactInfo from "../layouts/contactPage/ContactInfo";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <TeamPage />
      <ContactInfo />
      <Footer />
    </div>
  );
}
