import React from "react";
import PropTypes from "prop-types";

const TicketUpdate = ({
  message,
  handleOnUpdateTicket,
  handleOnTicketSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleOnTicketSubmit}>
        <div className="flex justify-center">
          <div className="xl:w-96">
            <label
              htmlFor="updateTicket"
              className="tracking-wide m-6 font-medium"
            >
              Reply
            </label>
            <textarea
              name=""
              value={message}
              onChange={handleOnUpdateTicket}
              className="form-control w-full px-3 py-1.5 my-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
              id="updateTicket"
              rows="4"
              placeholder="reply here to update the status of the ticket"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <button
            type="submit"
            className="inline-block p-6 py-2.5 my-2 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out tracking-widest"
          >
            🔼 Reply To Ticket
          </button>
        </div>
      </form>
    </>
  );
};

export default TicketUpdate;

TicketUpdate.propTypes = {
  message: PropTypes.string.isRequired,
  handleOnUpdateTicket: PropTypes.func.isRequired,
  handleOnTicketSubmit: PropTypes.func.isRequired,
};
