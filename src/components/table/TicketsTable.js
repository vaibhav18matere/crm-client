import React from "react";
import { Link } from "react-router-dom";

const TicketsTable = ({ tickets }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-md font-bold tracking-wide text-gray-900 px-6 py-4 text-left"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold tracking-wide text-gray-900 px-6 py-4 text-left"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold tracking-wide text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold text-gray-900 px-6 py-4 text-left"
                    >
                      Issue Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.length ? (
                    tickets.map((row) => (
                      <tr
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer"
                        key={row.id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {row.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={`/tickets/${row.id}`}>{row.subject}</Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {row.status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {row.addedAt}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <h1 className="leading-tight text-5xl text-center text-indigo-600 font-semibold tracking-wider p-3">
                          No tickets to show here...
                        </h1>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsTable;
