import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Dashboard from "../../pages/dashboard/Dashboard";
import NewTicket from "../../pages/tickets/NewTicket";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Dashboard /> */}
      <NewTicket />
      <Footer />
    </>
  );
};

export default DefaultLayout;
