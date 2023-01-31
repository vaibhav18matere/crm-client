import React from "react";

const TicketsTable = ({ tickets }) => {
  return (
    <>
      <h1 className="font-bold mb-4 ml-4 tracking-wide">
        Recently Added Tickets :
      </h1>
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
                      Ticket ID
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold tracking-wide text-gray-900 px-6 py-4 text-left"
                    >
                      Subjects
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold tracking-wide text-gray-900 px-6 py-4 text-left"
                    >
                      Ticket Status
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold text-gray-900 px-6 py-4 text-left"
                    >
                      Ticket Opened Date
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
                          {row.subject}
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
                    <h1 className="leading-tight text-5xl text-center text-indigo-600 font-semibold tracking-wider p-3">
                      No tickets to show here...
                    </h1>
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
