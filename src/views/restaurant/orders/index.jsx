import React from 'react';

const orderData = [
  {
    order: 'Order #1',
    date: 'Jan 13, 2023',
    status: 'Completed',
    clientName: 'John Doe',
    orderPrice: '$50.00'
  },
  {
    order: 'Order #2',
    date: 'Jan 14, 2023',
    status: 'Pending',
    clientName: 'Jane Smith',
    orderPrice: '$75.00'
  },
  {
    order: 'Order #3',
    date: 'Jan 15, 2023',
    status: 'Cancelled',
    clientName: 'Alice Johnson',
    orderPrice: '$100.00'
  },
  {
    order: 'Order #4',
    date: 'Jan 16, 2023',
    status: 'Completed',
    clientName: 'Bob Brown',
    orderPrice: '$120.00'
  },
];

const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#C6F6D5'; // Light green
      case 'Cancelled':
        return '#FEE2E2'; // Light red
      default:
        return '#FED7A7'; // Light orange
    }
  };
  
  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#047857'; // Dark green
      case 'Cancelled':
        return '#991B1B'; // Dark red
      default:
        return '#9A3412'; // Dark orange
    }
  };
const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke mt-10 px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark  bg-white dark:!bg-navy-900 sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Order
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Date
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Client Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Order Price
              </th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((orderItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {orderItem.order}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {orderItem.date}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {orderItem.clientName}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p
  className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
  style={{
    backgroundColor: getStatusColor(orderItem.status),
    color: getStatusTextColor(orderItem.status)
  }}
>
  {orderItem.status}
</p>

                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {orderItem.orderPrice}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;


