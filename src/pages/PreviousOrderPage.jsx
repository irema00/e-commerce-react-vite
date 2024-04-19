import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PreviousOrders from "../layouts/createOrderPage/PreviousOrders";

export default function PreviousOrdersPage() {
  return (
    <>
      <Header />
      <PreviousOrders />
      <Footer />
    </>
  );
}
