import React from "react";
import PropTypes from "prop-types";

const NewTicketForm = ({
  handleOnChangeTicket,
  handleOnSubmitTicket,
  ticketFormData,
}) => {
  return (
    <>
      <div className="flex justify-center align-middle p-6 rounded-lg">
        <form onSubmit={handleOnSubmitTicket}>
          <div className="form-group mb-6">
            <h1 className="font-medium leading-tight text-3xl my-8 tracking-wide">
              Add New Ticket
            </h1>
            <label className="tracking-wide font-medium">Subject : </label>
            <input
              type="text"
              name="subject"
              value={ticketFormData.subject}
              onChange={handleOnChangeTicket}
              className="form-control w-full px-3 py-1.5 my-1.5 text-base border border-solid border-gray-300 bg-white bg-clip-padding text-gray-700 font-normal rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
              placeholder="enter ticket title"
              minLength="5"
              maxLength="80"
              required
            />
          </div>
          <div className="form-group mb-6">
            <label className="tracking-wide font-medium">
              Issue Found At :
            </label>
            <input
              type="date"
              name="issueDate"
              value={ticketFormData.issueDate}
              onChange={handleOnChangeTicket}
              className="form-control w-full px-3 py-1.5 my-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
          </div>
          <div className="form-group mb-6">
            <label className="tracking-wide font-medium">More Details : </label>
            <textarea
              name="details"
              value={ticketFormData.details}
              onChange={handleOnChangeTicket}
              className="form-control w-full px-3 py-1.5 my-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
              rows="5"
              placeholder="provide more information about the bugs, issue you found"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-1.5 bg-indigo-600 text-white font-medium text-md uppercase rounded shadow-md focus:bg-indigo-700 tracking-widest"
          >
            🔺Raise A Ticket
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTicketForm;

NewTicketForm.prototypes = {
  handleOnChangeTicket: PropTypes.func.isRequired,
  handleOnSubmitTicket: PropTypes.func.isRequired,
  ticketFormData: PropTypes.object.isRequired,
};
