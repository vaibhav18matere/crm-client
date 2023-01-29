import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../../pages/dashboard/Dashboard";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Dashboard />
      <Footer />
    </>
  );
};

export default DefaultLayout;
