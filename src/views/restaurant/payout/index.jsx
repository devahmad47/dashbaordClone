import React, { useState } from 'react';
// import Card from 'components/Card'; // Replace with your Card component
import { MdAttachMoney } from 'react-icons/md'; // Icon for payout page
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Icons for pagination
import 'assets/css/MiniCalendar.css'; // Replace with your CSS file

const payoutData = [
  {
    id: 1,
    date: 'Jan 13, 2023',
    amount: 100.0,
    status: 'Completed',
    clientName: 'John Doe',
    orderPrice: 75.0,
  },
  {
    id: 2,
    date: 'Jan 14, 2023',
    amount: 75.0,
    status: 'Pending',
    clientName: 'Jane Smith',
    orderPrice: 50.0,
  },
  {
    id: 3,
    date: 'Jan 15, 2023',
    amount: 50.0,
    status: 'Completed',
    clientName: 'Michael Johnson',
    orderPrice: 100.0,
  },
  // Add more payout items as needed
];

const PayoutPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = payoutData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="flex w-full h-full flex-col px-3 py-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-black dark:text-white">Payouts</h2>
          <MdAttachMoney className="text-blue-600 h-8 w-8 dark:text-white" />
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Date
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Amount
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Client Name
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Order Price
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((payoutItem) => (
                <tr key={payoutItem.id}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <p className="text-black dark:text-white">{payoutItem.date}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">${payoutItem.amount}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{payoutItem.clientName}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">${payoutItem.orderPrice}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${getStatusColor(payoutItem.status)}`}>
                      {payoutItem.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-end mt-4">
          <button
            className={`mr-2 bg-gray-200 dark:bg-gray-800 py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 ${
              currentPage === 1 ? 'opacity-50 cursor-default' : 'opacity-100 cursor-pointer'
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <button
            className={`bg-gray-200 dark:bg-gray-800 py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 ${
              indexOfLastItem >= payoutData.length ? 'opacity-50 cursor-default' : 'opacity-100 cursor-pointer'
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= payoutData.length}
          >
            <HiChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-200 text-green-700'; // Customize these colors as needed
    case 'Pending':
      return 'bg-yellow-200 text-yellow-700';
    default:
      return 'bg-blue-200 text-blue-700';
  }
};

export default PayoutPage;
