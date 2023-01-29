import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../../pages/dashboard/Dashboard";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
        <Dashboard />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
