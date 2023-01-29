import React from "react";
import TicketsTable from "./../../components/table/TicketsTable";
import tickets from "./../../assets/data/dummyticket.json";

const Dashboard = () => {
  return (
    <>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block p-6 py-2.5 my-5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out tracking-wide"
        >
          Add New Ticket
        </button>
      </div>
      <div>
        <h3 className="text-center">Total Tickets : 50</h3>
        <h3 className="text-center">Pending Tickets : 5</h3>
      </div>
      <TicketsTable tickets={tickets} />
    </>
  );
};

export default Dashboard;