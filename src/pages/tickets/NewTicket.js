import React, { useState, useEffect } from "react";
import NewTicketForm from "../../components/tickets/NewTicketForm";

const initialTicketFormData = {
  subject: "",
  issueDate: "",
  details: "",
};

const NewTicket = () => {
  const [ticketFormData, setTicketFormData] = useState(initialTicketFormData);

  useEffect(() => {}, [ticketFormData]);

  const handleOnChangeTicket = (e) => {
    const { name, value } = e.target;

    setTicketFormData({
      ...ticketFormData,
      [name]: value,
    });
  };
  const handleOnSubmitTicket = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NewTicketForm
        handleOnChangeTicket={handleOnChangeTicket}
        handleOnSubmitTicket={handleOnSubmitTicket}
        ticketFormData={ticketFormData}
      />
    </>
  );
};

export default NewTicket;
