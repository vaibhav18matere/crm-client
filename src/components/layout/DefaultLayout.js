import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
        {/* dashboard page will be shown here */}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
