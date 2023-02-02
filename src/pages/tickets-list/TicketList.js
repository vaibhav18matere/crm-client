import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchForm from "../../components/search-form/SearchForm";
import TicketsTable from "../../components/table/TicketsTable";
import tickets from "./../../assets//data/dummyticket.json";

const TicketList = () => {
  const [str, setStr] = useState("");
  const [displayTickets, setDisplayTickets] = useState(tickets);

  const searchOnchange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  useEffect(() => {}, [str, displayTickets]);

  const searchTicket = (strInput) => {
    const showTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(strInput.toLowerCase())
    );
    setDisplayTickets(showTickets);
  };

  return (
    <>
      <Link to="/add-tickets">
        <button
          type="button"
          className="inline-block p-6 py-2.5 my-5 ml-6 rounded-md bg-indigo-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out tracking-widest"
        >
          ➕ Add New Ticket
        </button>
      </Link>
      <SearchForm searchOnchange={searchOnchange} str={str} />
      <TicketsTable tickets={displayTickets} />
    </>
  );
};

export default TicketList;

TicketList.propTypes = {
  tickets: PropTypes.array,
};
