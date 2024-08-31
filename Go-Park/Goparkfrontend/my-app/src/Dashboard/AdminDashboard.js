// import React, { useState } from 'react';
// import './AdminDashboard.css';


// const AdminDashboard = () => {
//     const [selectedComplex, setSelectedComplex] = useState(null);
//     const complexes = [
//         {
//             id: 1,
//             name: 'Complex A',
//             address: '123 Main St',
//             capacityLevel1: 50,
//             capacityLevel2: 50,
//             username: 'adminA',
//             companies: [
//                 { id: 1, name: 'Company 1', contact: 'contact1@example.com' },
//                 { id: 2, name: 'Company 2', contact: 'contact2@example.com' },
//                 // Add 8 more companies here
//             ],
//         },
//         {
//             id: 2,
//             name: 'Complex B',
//             address: '456 Oak Ave',
//             capacityLevel1: 60,
//             capacityLevel2: 60,
//             username: 'adminB',
//             companies: [
//                 { id: 1, name: 'Company 1', contact: 'contact1@example.com' },
//                 { id: 2, name: 'Company 2', contact: 'contact2@example.com' },
//                 // Add 8 more companies here
//             ],
//         },
//         {
//             id: 3,
//             name: 'Complex C',
//             address: '789 Pine Rd',
//             capacityLevel1: 75,
//             capacityLevel2: 75,
//             username: 'adminC',
//             companies: [
//                 { id: 1, name: 'Company 1', contact: 'contact1@example.com' },
//                 { id: 2, name: 'Company 2', contact: 'contact2@example.com' },
//                 // Add 8 more companies here
//             ],
//         },
//     ];

//     const handleSelectChange = (e) => {
//         const complex = complexes.find(c => c.id === parseInt(e.target.value));
//         setSelectedComplex(complex);
//     };

//     return (
//         <div>
//             <h1>Admin Dashboard</h1>
//             <label htmlFor="complexSelect">Select Complex:</label>
//             <select id="complexSelect" onChange={handleSelectChange}>
//                 <option value="">Select a complex</option>
//                 {complexes.map(complex => (
//                     <option key={complex.id} value={complex.id}>{complex.name}</option>
//                 ))}
//             </select>

//             {selectedComplex && (
//                 <div>
//                     <h2>{selectedComplex.name} Details</h2>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
//                                 <th>Address</th>
//                                 <th>Capacity Level 1</th>
//                                 <th>Capacity Level 2</th>
//                                 <th>Username</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>{selectedComplex.id}</td>
//                                 <td>{selectedComplex.name}</td>
//                                 <td>{selectedComplex.address}</td>
//                                 <td>{selectedComplex.capacityLevel1}</td>
//                                 <td>{selectedComplex.capacityLevel2}</td>
//                                 <td>{selectedComplex.username}</td>
//                                 <td>
//                                     <button>Edit</button>
//                                     <button>Delete</button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>

//                     <h3>Companies in {selectedComplex.name}</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Company Name</th>
//                                 <th>Contact</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {selectedComplex.companies.map(company => (
//                                 <tr key={company.id}>
//                                     <td>{company.id}</td>
//                                     <td>{company.name}</td>
//                                     <td>{company.contact}</td>
//                                     <td>
//                                         <button>Edit</button>
//                                         <button>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;   










import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [view, setView] = useState(null); // Tracks whether to show complexes or companies
    const [complexes, setComplexes] = useState([]);
    const [companies, setCompanies] = useState([]);

    // Fetch data for complexes
    useEffect(() => {
        if (view === 'complexes') {
            fetch('http://localhost:8282/api/getcomplexes')
                .then(response => response.json())
                .then(data => setComplexes(data))
                .catch(error => console.error('Error fetching complexes:', error));
        }
    }, [view]);

    // Fetch data for companies
    useEffect(() => {
        if (view === 'companies') {
            fetch('http://localhost:8282/api/companies')
                .then(response => response.json())
                .then(data => setCompanies(data))
                .catch(error => console.error('Error fetching companies:', error));
        }
    }, [view]);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-buttons">
                <button onClick={() => setView('complexes')}>Complexes</button>
                <button onClick={() => setView('companies')}>Companies</button>
            </div>

            {view === 'complexes' && (
                <div className="complex-list">
                    <h2>Complexes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Total Parking Levels</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complexes.map(complex => (
                                <tr key={complex.complexId}>
                                    <td>{complex.complexName}</td>
                                    <td>{complex.complexAddress}</td>
                                    <td>{complex.totalParkingLevels}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {view === 'companies' && (
                <div className="company-list">
                    <h2>Companies</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Complex ID</th>
                                <th>Company Name</th>
                    
                                <th>Username</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map(company => (
                                <tr key={company.companyId}>
                                    <td>{company.complexId}</td>
                                    <td>{company.companyName}</td>
                                    <td>{company.companyUsername}</td>  
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;