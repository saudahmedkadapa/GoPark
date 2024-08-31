// import React from 'react';
// import { useTable } from 'react-table';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './UserDashboard.css'; // Import CSS file for styling

// const EmployeeDashboard = ({ data = [{ complexID: '1', name: 'Alice Johnson', address: '123 Maple Street' },
//   { complexID: '2', name: 'Bob Smith', address: '456 Oak Avenue' },
//   { complexID: '3', name: 'Carol White', address: '789 Pine Road' },] }) => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const columns = React.useMemo(
//     () => [
//       { Header: 'ComplexID', accessor: 'complexID' },
//       { Header: 'Name', accessor: 'name' },
//       { Header: 'Address', accessor: 'address' },
//       {
//         Header: 'Actions',
//         accessor: 'actions',
//         Cell: ({ row }) => (
//           <button className="book-slot-btn" onClick={() => handleBookSlot(row.original.complexID)}>
//             Book Slot
//           </button>
//         ),
//       },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
//   } = useTable({ columns, data });

//   const handleBookSlot = (complexID) => {
//     navigate(`/grid-employee/${complexID}`); // Navigate to GridEmployee with the complexID
//   };

//   return (
//     <table {...getTableProps()} className="employee-dashboard-table">
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()} key={column.id}>
//                 {column.render('Header')}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()} key={row.id}>
//               {row.cells.map(cell => (
//                 <td {...cell.getCellProps()} key={cell.column.id}>
//                   {cell.render('Cell')}
//                 </td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default EmployeeDashboard;





// import React from 'react';
// import { useTable } from 'react-table';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './UserDashboard.css'; // Import CSS file for styling

// const EmployeeDashboard = ({ data = [
//   { complexID: '1', name: 'Alice Johnson', address: '123 Maple Street' },
//   { complexID: '2', name: 'Bob Smith', address: '456 Oak Avenue' },
//   { complexID: '3', name: 'Carol White', address: '789 Pine Road' },
// ] }) => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const columns = React.useMemo(
//     () => [
//       { Header: 'ComplexID', accessor: 'complexID' },
//       { Header: 'Name', accessor: 'name' },
//       { Header: 'Address', accessor: 'address' },
//       {
//         Header: 'Actions',
//         accessor: 'actions',
//         Cell: ({ row }) => (
//           <button className="book-slot-btn" onClick={() => handleBookSlot(row.original.complexID)}>
//             Book Slot
//           </button>
//         ),
//       },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
//   } = useTable({ columns, data });

//   const handleBookSlot = (complexID) => {
//     navigate(`/grid-employee/${complexID}`); // Navigate to GridEmployee with the complexID
//   };

//   return (
//     <table {...getTableProps()} className="employee-dashboard-table">
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()} key={column.id}>
//                 {column.render('Header')}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()} key={row.id}>
//               {row.cells.map(cell => (
//                 <td {...cell.getCellProps()} key={cell.column.id}>
//                   {cell.render('Cell')}
//                 </td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default EmployeeDashboard;



import React from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserDashboard.css'; // Import CSS file for styling

const EmployeeDashboard = ({ data = [
  {
    complexID: '1',
    name: 'Alice Johnson',
    address: '123 Maple Street',
    complexName: 'Complex A',
    companyName: 'Company X',
    bookingStartTime: '2024-08-15T08:00:00',
    bookingEndTime: '2024-08-15T10:00:00',
    bookingID: 'B001'
  },
  {
    complexID: '2',
    name: 'Bob Smith',
    address: '456 Oak Avenue',
    complexName: 'Complex B',
    companyName: 'Company Y',
    bookingStartTime: '2024-08-16T09:00:00',
    bookingEndTime: '2024-08-16T11:00:00',
    bookingID: 'B002'
  },
  {
    complexID: '3',
    name: 'Carol White',
    address: '789 Pine Road',
    complexName: 'Complex C',
    companyName: 'Company Z',
    bookingStartTime: '2024-08-17T07:00:00',
    bookingEndTime: '2024-08-17T09:00:00',
    bookingID: 'B003'
  },
] }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Define columns including new columns
  const columns = React.useMemo(
    () => [
      { Header: 'ComplexID', accessor: 'complexID' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Address', accessor: 'address' },
      { Header: 'Complex Name', accessor: 'complexName' },
      { Header: 'Company Name', accessor: 'companyName' },
      { Header: 'Booking Start Time', accessor: 'bookingStartTime' },
      { Header: 'Booking End Time', accessor: 'bookingEndTime' },
      { Header: 'Booking ID', accessor: 'bookingID' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="employee-dashboard-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} key={cell.column.id}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeDashboard;
