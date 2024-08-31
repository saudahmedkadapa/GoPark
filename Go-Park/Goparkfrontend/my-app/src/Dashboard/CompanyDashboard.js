import React,{useEffect,useState} from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './CompanyDashboard.css';
import '../Dashboard/Grid';
import axios from 'axios';

// const CompanyDashboard = ({ data = [
//   { levelID: '1', levelName: 'Level 1', totalSlots: 100, availableSlots: 25 },
//   { levelID: '2', levelName: 'Level 2', totalSlots: 150, availableSlots: 50 },
//   { levelID: '3', levelName: 'Level 3', totalSlots: 200, availableSlots: 75 },
// ] }) => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const columns = React.useMemo(
//     () => [
//       { Header: 'Level ID', accessor: 'levelID' },
//       { Header: 'Level Name', accessor: 'levelName' },
//       { Header: 'Total Slots', accessor: 'totalSlots' },
//       { Header: 'Available Slots', accessor: 'availableSlots' },
//       {
//         Header: 'Actions',
//         accessor: 'actions',
//         Cell: ({ row }) => (
//           <button onClick={() => handleViewSlots(row.original.levelID)}>
//             View Slots
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

//   const handleViewSlots = (levelID) => {
//     navigate(`/grid/${levelID}`); // Navigate to SlotGrid with levelID
//   };

//   return (
//     <table {...getTableProps()} className="dashboard-table">
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()} key={column.id}>{column.render('Header')}</th>
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
//                 <td {...cell.getCellProps()} key={cell.column.id}>{cell.render('Cell')}</td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };




































const CompanyDashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  

  useEffect(() => {
    const companyId = localStorage.getItem('companyId');
    //if (companyId) {
        //axios.get(`http://localhost:8282/api/companies/getcompany/${companyId}`)
        axios.get(`http://localhost:8282/api/companies`)
            .then(response => {
              console.log(data);
                setData(response.data); // Ensure the data is in an array if required by the table
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
   //// } else {
        console.error("No companyId found in local storage");
   // }
}, []);



  const columns = React.useMemo(
    () => [
      // { Header: 'LevelID', accessor: 'levelID' },
      { Header: 'Comapny Name', accessor: 'companyName' },
      { Header: 'Company  contact', accessor: 'companyContact' },
      { Header: 'Company  Username', accessor: 'companyUsername' },

      //{ Header: 'Capacity', accessor: 'capacity' },
      // { Header: 'Available Slot', accessor: 'availableSlot' },
      // { Header: 'Total Slot', accessor: 'totalSlot' },
      // {
      //   Header: 'Actions',
      //   accessor: 'actions',
      //   Cell: ({ row }) => (
      //     <button onClick={() => handleViewSlots(row.original.totalParkingLevels)}>
      //       View Slots
      //     </button>
      //   ),
      // },
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

  // Corrected handleViewSlots function
  // const handleViewSlots = (totalParkingLevels) => {
  //   navigate(`/grid/${totalParkingLevels}`); // Navigate to SlotGrid with levelID
  // };

  return (
    <table {...getTableProps()} className="company-dashboard-table">
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

export default CompanyDashboard;
