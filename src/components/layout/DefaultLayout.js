import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../../pages/dashboard/Dashboard";
import NewTicket from "../../pages/tickets/NewTicket";
import TicketListing from "../../pages/ticket-listing/TicketListing";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Dashboard />
      <NewTicket />
      <TicketListing />
      <Footer />
    </>
  );
};

export default DefaultLayout;
