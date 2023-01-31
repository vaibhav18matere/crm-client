import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../../pages/dashboard/Dashboard";
import NewTicket from "../../pages/tickets/NewTicket";
import TicketList from "../../pages/tickets-list/TicketList";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Dashboard />
      <NewTicket />
      <TicketList />
      <Footer />
    </>
  );
};

export default DefaultLayout;
