import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import tickets from "./../../assets/data/dummyticket.json";
import TicketHistory from "../../components/ticket-history/TicketHistory";
import TicketUpdate from "../../components/ticket-update/TicketUpdate";

const ticket = tickets[0];

const TicketDetails = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnUpdateTicket = (e) => {
    setMessage(e.target.value);
  };
  const handleOnTicketSubmit = () => {
    return toast.success("Form Is Submitted!", {
      autoClose: 3000,
    });
  };
  return (
    <>
      <div className="flex mr-6 justify-center align-middle">
        <button
          type="button"
          className="inline-block p-6 py-2.5 my-5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out tracking-widest"
        >
          ❌ Close Ticket
        </button>
      </div>
      <div className="text-md font-bold tracking-wide text-gray-900 px-6 py-1 text-left">
        subject : {ticket.subject}
      </div>
      <div className="text-md font-bold tracking-wide text-gray-900 px-6 py-1 text-left">
        status : {ticket.status}
      </div>
      <div className="text-md font-bold tracking-wide text-gray-900 px-6 py-1 text-left">
        added at : {ticket.addedAt}
      </div>
      <TicketHistory msg={ticket.history} />
      <TicketUpdate
        message={message}
        handleOnUpdateTicket={handleOnUpdateTicket}
        handleOnTicketSubmit={handleOnTicketSubmit}
      />
    </>
  );
};

export default TicketDetails;
