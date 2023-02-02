import React from "react";
import PropTypes from "prop-types";

const TicketHistory = ({ msg }) => {
  if (!msg) return null;

  return msg.map((row, index) => (
    <div key={index} className="container mx-auto">
      <div className="max-w-xl border rounded my-3">
        <div className="p-4">
          <ul className="space-y-2">
            <li className="flex justify-start">
              <div className="max-w-xl px-4 py-2 text-gray-700">
                <div className="block text-md font-bold tracking-wider text-gray-900">
                  {row.message}
                </div>
                <div className="block text-md font-semibold tracking-widest text-gray-700">
                  {row.messageBy}
                </div>
                <div className="block">{row.date}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));
};

export default TicketHistory;

TicketHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
