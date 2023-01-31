import React, { useState, useEffect } from "react";
import SearchForm from "../../components/search-form/SearchForm";

const TicketList = () => {
  const [str, setStr] = useState("");

  const searchOnchange = (e) => {
    //console.log(e.target.value);
    setStr(e.target.value);
  };

  useEffect(() => {}, [str]);

  return (
    <>
      <button
        type="button"
        className="inline-block p-6 py-2.5 my-5 ml-6 rounded-md bg-indigo-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out tracking-wider"
      >
        Add New Ticket
      </button>
      <SearchForm searchOnchange={searchOnchange} str={str} />
    </>
  );
};

export default TicketList;
