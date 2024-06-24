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
     <h4>This is Menu page</h4>
      </div>
    </div>
  );
};

export default TableThree;


