import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
