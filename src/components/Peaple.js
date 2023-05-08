// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // // import Box from '@mui/material/Box';
// // import Collapse from '@mui/material/Collapse';
// // import IconButton from '@mui/material/IconButton';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Typography from '@mui/material/Typography';
// // import Paper from '@mui/material/Paper';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// // // import PropTypes from 'prop-types';
// // import Box from '@mui/material/Box';
// // // import Collapse from '@mui/material/Collapse';
// // // import IconButton from '@mui/material/IconButton';
// // // import Table from '@mui/material/Table';
// // // import TableBody from '@mui/material/TableBody';
// // // import TableCell from '@mui/material/TableCell';
// // // import TableContainer from '@mui/material/TableContainer';
// // // import TableHead from '@mui/material/TableHead';
// // // import TableRow from '@mui/material/TableRow';
// // // import Typography from '@mui/material/Typography';
// // // import Paper from '@mui/material/Paper';
// // // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // // import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// //  import axios from "axios";
// //  import { useEffect, useState } from "react";
// //  import PostsOfUser from './PostsOfUser'

// // function createData(name, calories, fat, carbs, protein, price) {
// //   return {
// //     name,
// //     calories,
// //     fat,
// //     carbs,
// //     protein,
// //     price,
// //     history: [
// //       {
// //         date: '2020-01-05',
// //         customerId: '11091700',
// //         amount: 3,
// //       },
// //       {
// //         date: '2020-01-02',
// //         customerId: 'Anonymous',
// //         amount: 1,
// //       },
// //     ],
// //   };
// // }

// // function Row(props) {
// //   const { row } = props;
// //   const [open, setOpen] = React.useState(false);

// //   return (
// //     <React.Fragment>
// //       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
// //         <TableCell>
// //           <IconButton
// //             aria-label="expand row"
// //             size="small"
// //             onClick={() => setOpen(!open)}
// //           >
// //             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
// //           </IconButton>
// //         </TableCell>
// //         <TableCell component="th" scope="row">
// //           {row.name}
// //         </TableCell>
// //         <TableCell align="right">{row.calories}</TableCell>
// //         <TableCell align="right">{row.fat}</TableCell>
// //         <TableCell align="right">{row.carbs}</TableCell>
// //         <TableCell align="right">{row.protein}</TableCell>
// //       </TableRow>
// //       <TableRow>
// //         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
// //           <Collapse in={open} timeout="auto" unmountOnExit>
// //             <Box sx={{ margin: 1 }}>
// //               <Typography variant="h6" gutterBottom component="div">
// //                 History
// //               </Typography>
// //               <Table size="small" aria-label="purchases">
// //                 <TableHead>
// //                   <TableRow>
// //                     <TableCell>Date</TableCell>
// //                     <TableCell>Customer</TableCell>
// //                     <TableCell align="right">Amount</TableCell>
// //                     <TableCell align="right">Total price ($)</TableCell>
// //                   </TableRow>
// //                 </TableHead>
// //                 <TableBody>
// //                   {row.history.map((historyRow) => (
// //                     <TableRow key={historyRow.date}>
// //                       <TableCell component="th" scope="row">
// //                         {historyRow.date}
// //                       </TableCell>
// //                       <TableCell>{historyRow.customerId}</TableCell>
// //                       <TableCell align="right">{historyRow.amount}</TableCell>
// //                       <TableCell align="right">
// //                         {Math.round(historyRow.amount * row.price * 100) / 100}
// //                       </TableCell>
// //                     </TableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             </Box>
// //           </Collapse>
// //         </TableCell>
// //       </TableRow>
// //     </React.Fragment>
// //   );
// // }

// // Row.propTypes = {
// //   row: PropTypes.shape({
// //     name: PropTypes.number.isRequired,
// //     email: PropTypes.number.isRequired,
// //     company: PropTypes.number.isRequired,
// //     history: PropTypes.string.isRequired,
   

// //   }).isRequired,
// // };

// // const rows = [

// //     filterUser.map((user) => (
// //         createData(user.name,user.email,user.company)
// //       ))
// // //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
// // //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
// // //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
// // //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
// // //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// // ];

// //  function CollapsibleTable() {
// //   return (
// //     <TableContainer component={Paper}>
// //       <Table aria-label="collapsible table">
// //         <TableHead>
// //           <TableRow>
// //             <TableCell />
// //             <TableCell>Name</TableCell>
// //             <TableCell align="right">Email</TableCell>
// //             <TableCell align="right">Company</TableCell>
           
// //             {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
// //             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
// //             <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {rows.map((row) => (
// //             <Row key={row.name} row={row} />
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //   );
// // }

// // // רק בסיעתא דשמיא
// // // import axios from "axios";
// // // import { useEffect, useState } from "react";
// // // import * as React from 'react';
// // // import PostsOfUser from './PostsOfUser'
// // // import './Home.css';
// // // import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// // // import { GridFilterOperator } from '@mui/x-data-grid-premium';
// // // import QuickFilteringGrid from './temp'
// // // // import { DataTable } from 'primereact/datatable';
// // // // import { Column } from 'primereact/column';
// // // import CollapsibleTable from './Peaple'


// // export default function Home() {

// //     const [users, setUsers] = useState([]);
// //     const [filterUser, setFilterUser] = useState([])
// //     const [name, setName] = useState()
// //     const [email, setEmail] = useState()
// //     const [posts, setPosts] = useState()
// //     const [postOfUser, setPostOfUser] = useState()


// //     useEffect(() => {
// //         setPostOfUser(null)
// //         axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
// //             setUsers(response.data)
// //             setFilterUser(response.data)
// //             console.log(response.data)
// //         }
// //         );
// //         axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
// //             setPosts(response.data)
// //             console.log(response.data)
// //         }
// //         );

// //     }, [])


// //     useEffect(() => {
// //         let f = users.filter(user => user.name.includes(name))
// //         setFilterUser([])
// //         setFilterUser(f)

// //     }, [name])


// //     useEffect(() => {
// //         let f = users.filter(user => user.email.includes(email))
// //         setFilterUser([])
// //         setFilterUser(f)
// //     }, [email])


// //     function filterByName(e) {
// //         setName(e.target.value)
// //     }


// //     function filterByEmail(e) {
// //         setEmail(e.target.value)
// //     }


// //     function choiseUser(id) {
// //         let post = []
// //         post = <PostsOfUser posts={posts} id={id} />
// //         console.log(post)
// //         setPostOfUser(post)
// //     }


// //     return (
// //         <>

// //             <input placeholder="name" onChange={filterByName}></input>
// //             <input placeholder="email" onChange={filterByEmail}></input>
// //             <div id="wrapTable">
// //                 <table>
// //                     <tr>
// //                         <th>name</th>
// //                         <th>email</th>
// //                         <th>company</th>
// //                     </tr>

// //                     {filterUser.map((user, i) => (
// //                         <>
// //                             {/* onClick={() => handleClick("apply clicked")} */}
// //                             <tr onClick={() => choiseUser(user.id)}>
// //                                 <td key={i}>{user.name}</td>
// //                                 <td key={i}>{user.email}</td>
// //                                 <td key={i}>{user.company.name}</td>

// //                             </tr>
// //                         </>
// //                     ))}

// //                 </table>
// //             </div>
// //             {postOfUser}

// //             <CollapsibleTable users={filterUser}/>
// //         </>

// //     )

// // }

// // import * as React from 'react';
// // import Paper from '@mui/material/Paper';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';

// // const columns = [
// //   { id: 'name', label: 'Name', minWidth: 170 },
// //   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
// //   {
// //     id: 'population',
// //     label: 'Population',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'size',
// //     label: 'Size\u00a0(km\u00b2)',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'density',
// //     label: 'Density',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toFixed(2),
// //   },
// // ];

// // function createData(name, code, population, size) {
// //   const density = population / size;
// //   return { name, code, population, size, density };
// // }

// // const rows = [
// //   createData('India', 'IN', 1324171354, 3287263),
// //   createData('China', 'CN', 1403500365, 9596961),
// //   createData('Italy', 'IT', 60483973, 301340),
// //   createData('United States', 'US', 327167434, 9833520),
// //   createData('Canada', 'CA', 37602103, 9984670),
// //   createData('Australia', 'AU', 25475400, 7692024),
// //   createData('Germany', 'DE', 83019200, 357578),
// //   createData('Ireland', 'IE', 4857000, 70273),
// //   createData('Mexico', 'MX', 126577691, 1972550),
// //   createData('Japan', 'JP', 126317000, 377973),
// //   createData('France', 'FR', 67022000, 640679),
// //   createData('United Kingdom', 'GB', 67545757, 242495),
// //   createData('Russia', 'RU', 146793744, 17098246),
// //   createData('Nigeria', 'NG', 200962417, 923768),
// //   createData('Brazil', 'BR', 210147125, 8515767),
// // ];

// // export default function ColumnGroupingTable() {
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //   return (
// //     <Paper sx={{ width: '100%' }}>
// //       <TableContainer sx={{ maxHeight: 440 }}>
// //         <Table stickyHeader aria-label="sticky table">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell align="center" colSpan={2}>
// //                 Country
// //               </TableCell>
// //               <TableCell align="center" colSpan={3}>
// //                 Details
// //               </TableCell>
// //             </TableRow>
// //             <TableRow>
// //               {columns.map((column) => (
// //                 <TableCell
// //                   key={column.id}
// //                   align={column.align}
// //                   style={{ top: 57, minWidth: column.minWidth }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows
// //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //               .map((row) => {
// //                 return (
// //                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
// //                     {columns.map((column) => {
// //                       const value = row[column.id];
// //                       return (
// //                         <TableCell key={column.id} align={column.align}>
// //                           {column.format && typeof value === 'number'
// //                             ? column.format(value)
// //                             : value}
// //                         </TableCell>
// //                       );
// //                     })}
// //                   </TableRow>
// //                 );
// //               })}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[10, 25, 100]}
// //         component="div"
// //         count={rows.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //   );
// // }

// // <TableHead>
// //   <TableRow />
// //   <TableRow />
// // </TableHead>
// // import * as React from 'react';
// // import Paper from '@mui/material/Paper';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';

// // const columns = [
// //   { id: 'name', label: 'Name', minWidth: 170 },
// //   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
// //   {
// //     id: 'population',
// //     label: 'Population',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'size',
// //     label: 'Size\u00a0(km\u00b2)',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'density',
// //     label: 'Density',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toFixed(2),
// //   },
// // ];

// // function createData(name, code, population, size) {
// //   const density = population / size;
// //   return { name, code, population, size, density };
// // }

// // const rows = [
// //   createData('India', 'IN', 1324171354, 3287263),
// //   createData('China', 'CN', 1403500365, 9596961),
// //   createData('Italy', 'IT', 60483973, 301340),
// //   createData('United States', 'US', 327167434, 9833520),
// //   createData('Canada', 'CA', 37602103, 9984670),
// //   createData('Australia', 'AU', 25475400, 7692024),
// //   createData('Germany', 'DE', 83019200, 357578),
// //   createData('Ireland', 'IE', 4857000, 70273),
// //   createData('Mexico', 'MX', 126577691, 1972550),
// //   createData('Japan', 'JP', 126317000, 377973),
// //   createData('France', 'FR', 67022000, 640679),
// //   createData('United Kingdom', 'GB', 67545757, 242495),
// //   createData('Russia', 'RU', 146793744, 17098246),
// //   createData('Nigeria', 'NG', 200962417, 923768),
// //   createData('Brazil', 'BR', 210147125, 8515767),
// // ];

// // export default function ColumnGroupingTable() {
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //   return (
// //     <Paper sx={{ width: '100%' }}>
// //       <TableContainer sx={{ maxHeight: 440 }}>
// //         <Table stickyHeader aria-label="sticky table">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell align="center" colSpan={2}>
// //                 Country
// //               </TableCell>
// //               <TableCell align="center" colSpan={3}>
// //                 Details
// //               </TableCell>
// //             </TableRow>
// //             <TableRow>
// //               {columns.map((column) => (
// //                 <TableCell
// //                   key={column.id}
// //                   align={column.align}
// //                   style={{ top: 57, minWidth: column.minWidth }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows
// //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //               .map((row) => {
// //                 return (
// //                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
// //                     {columns.map((column) => {
// //                       const value = row[column.id];
// //                       return (
// //                         <TableCell key={column.id} align={column.align}>
// //                           {column.format && typeof value === 'number'
// //                             ? column.format(value)
// //                             : value}
// //                         </TableCell>
// //                       );
// //                     })}
// //                   </TableRow>
// //                 );
// //               })}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[10, 25, 100]}
// //         component="div"
// //         count={rows.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //   );
// // }
// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // import * as React from 'react';
// // import Paper from '@mui/material/Paper';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';

// // const columns = [
// //   { id: 'name', label: 'Name', minWidth: 170 },
// //   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
// //   {
// //     id: 'population',
// //     label: 'Population',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'size',
// //     label: 'Size\u00a0(km\u00b2)',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'density',
// //     label: 'Density',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toFixed(2),
// //   },
// // ];

// // function createData() {
// // //   const density = population / size;
// // //   return { name, email, company };
// // return axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
// //     // setUsers(response.data)
// //     // setFilterUser(response.data)
// //      console.log(response.data)
// // }
// // );
// // }

// // // const rows = [
// // //   createData('India', 'IN', 1324171354, 3287263),
// // //   createData('China', 'CN', 1403500365, 9596961),
// // //   createData('Italy', 'IT', 60483973, 301340),
// // //   createData('United States', 'US', 327167434, 9833520),
// // //   createData('Canada', 'CA', 37602103, 9984670),
// // //   createData('Australia', 'AU', 25475400, 7692024),
// // //   createData('Germany', 'DE', 83019200, 357578),
// // //   createData('Ireland', 'IE', 4857000, 70273),
// // //   createData('Mexico', 'MX', 126577691, 1972550),
// // //   createData('Japan', 'JP', 126317000, 377973),
// // //   createData('France', 'FR', 67022000, 640679),
// // //   createData('United Kingdom', 'GB', 67545757, 242495),
// // //   createData('Russia', 'RU', 146793744, 17098246),
// // //   createData('Nigeria', 'NG', 200962417, 923768),
// // //   createData('Brazil', 'BR', 210147125, 8515767),
// // // ];


// // const rows=createData()


// // export default function StickyHeadTable() {
// //     const [users, setUsers] = useState([]);
// // const [filterUser, setFilterUser] = useState([])
// // const [name, setName] = useState()
// // const [email, setEmail] = useState()
// // const [posts, setPosts] = useState()
// // const [postOfUser, setPostOfUser] = useState()
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //   return (
// //     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
// //       <TableContainer sx={{ maxHeight: 440 }}>
// //         <Table stickyHeader aria-label="sticky table">
// //           <TableHead>
// //             <TableRow>
// //               {columns.map((column) => (
// //                 <TableCell
// //                   key={column.id}
// //                   align={column.align}
// //                   style={{ minWidth: column.minWidth }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows
// //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //               .map((row) => {
// //                 return (
// //                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
// //                     {columns.map((column) => {
// //                       const value = row[column.id];
// //                       return (
// //                         <TableCell key={column.id} align={column.align}>
// //                           {column.format && typeof value === 'number'
// //                             ? column.format(value)
// //                             : value}
// //                         </TableCell>
// //                       );
// //                     })}
// //                   </TableRow>
// //                 );
// //               })}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[10, 25, 100]}
// //         component="div"
// //         count={rows.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //   );
// // }
// import { useEffect, useState } from "react";

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import axios from 'axios';
// import PostsOfUser from "./PostsOfUser";
// function createData(name, email,company,history) {
//   return {
//     name,
//     email,
//     company,
   
//     history
      
   
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.name}</TableCell>
//         <TableCell align="right">{row.email}</TableCell>
//         <TableCell align="right">{row.company}</TableCell>
//         {/* <TableCell align="right">{row.protein}</TableCell> */}
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 posts
//               </Typography>
//               {/* <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>title</TableCell>
//                     <TableCell>body</TableCell> */}
//                     {/* <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell> */}
//                   {/* </TableRow>
//                 </TableHead>
//                 <TableBody> */}
//                   {/* { row.history.map((historyRow,i) => (
//                     <TableRow key={i}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.title}
//                       </TableCell>
//                       <TableCell>{historyRow.body}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
                  
//                     </TableRow>
                   
//                   ))}  */}
//                   {/* <h2>{history.title}</h2>
//                   <h3>{history.body}</h3> */} 
//                   {/* <PostsOfUser/> */}
//                 {/* </TableBody>
//               </Table> */}
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     company: PropTypes.string.isRequired,
//     history: PropTypes.string .isRequired,
   

//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function CollapsibleTable(props) {


//     const [users, setUsers] = useState([]);
//     const [filterUser, setFilterUser] = useState([])
//     const [name, setName] = useState()
//     const [email, setEmail] = useState()
//     const [posts, setPosts] = useState()
//     const [postOfUser, setPostOfUser] = useState()
   
//     const [globalFilter, setGlobalFilter] = useState('');
//     const [filterMode, setFilterMode] = useState('lenient');
//     const [filterOptions] = useState([
//         { label: 'Lenient', value: 'lenient' },
//         { label: 'Strict', value: 'strict' }
//     ]);






//     useEffect(() => {
//         setPostOfUser(null)
//         axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//             setUsers(response.data)
//             setFilterUser(response.data)
//             console.log(response.data)
//         }
//         );
//         axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
//             setPosts(response.data)
//             console.log(response.data)
//         }
//         );

//     }, [])

//     useEffect(() => {
//       let f = users.filter(user => user.name.includes(name))
//       setFilterUser([])
//       setFilterUser(f)

//   }, [name])


//   useEffect(() => {
//       let f = users.filter(user => user.email.includes(email))
//       setFilterUser([])
//       setFilterUser(f)
//   }, [email])


//   function filterByName(e) {
//       setName(e.target.value)
//   }


//   function filterByEmail(e) {
//       setEmail(e.target.value)
//   }


//   function choiseUser(id) {
//       let post = []
//       post = <PostsOfUser posts={posts} id={id} getPost={getPost}/>
//       console.log(post)
//       setPostOfUser(post)
//   }
  
//   function getPost(userId,title,body){
//       console.log("vvvv+"+userId,title,body)
//       setPosts([...posts,{userId,title,body}]);
//       // setFilterUser([...filterUser,{userId,title,body}])
//   }
//   return (


//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Email</TableCell>
//             <TableCell align="right">Company</TableCell>
        
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filterUser.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }





// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { useState,useEffect } from 'react';
// import axios from 'axios';

// export default function StickyHeadTable() {
//   const [users, setUsers] = useState([]);
//   const [filterUser, setFilterUser] = useState([])
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [posts, setPosts] = useState()

//   const columns = [
//     { id: 'name', label: 'Name', minWidth: 170 },
//     { id: 'email', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//       id: 'company',
//       label: 'Population',
//       minWidth: 170,
//       align: 'right',
//       format: (value) => value.toLocaleString('en-US'),
//     }
    // {
    //   id: 'size',
    //   label: 'Size\u00a0(km\u00b2)',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //   id: 'density',
    //   label: 'Density',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toFixed(2),
    // },
  // ];
  
  // function createData(name, code, population, size) {
  //   const density = population / size;
  //   return { name, code, population, size, density };
  // }
  
//   const rows = filterUser
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
//   const [postOfUser, setPostOfUser] = useState();

//   useEffect(() => {
//     setPostOfUser(null)
//     axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//         setUsers(response.data)
//         setFilterUser(response.data)
//         console.log(response.data)
//     }
//     );
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
//         setPosts(response.data)
//         console.log(response.data)
//     }
//     ); }, [])
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row,i) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={i}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import axios from 'axios';
import PostsOfUser from './PostsOfUser';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {

  const [users, setUsers] = useState([]);
  const [filterUser, setFilterUser] = useState([])
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [posts, setPosts] = useState()
  const [postOfUser, setPostOfUser] = useState()
  useEffect(() => {
    setPostOfUser(null)
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        setUsers(response.data)
        setFilterUser(response.data)
        console.log(response.data)
    }
    );
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        setPosts(response.data)
        console.log(response.data)
    }
    );

}, [])


useEffect(() => {
    let f = users.filter(user => user.name.includes(name))
    setFilterUser([])
    setFilterUser(f)

}, [name])


useEffect(() => {
    let f = users.filter(user => user.email.includes(email))
    setFilterUser([])
    setFilterUser(f)
}, [email])


function filterByName(e) {
    setName(e.target.value)
}


function filterByEmail(e) {
    setEmail(e.target.value)
}


function choiseUser(id) {
    let post = []
    post = <PostsOfUser posts={posts} id={id} getPost={getPost}/>
    console.log(post)
    setPostOfUser(post)
}

function getPost(userId,title,body){
    console.log("vvvv+"+userId,title,body)
    setPosts([...posts,{userId,title,body}]);
    // setFilterUser([...filterUser,{userId,title,body}])
}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Company</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user,i) => (
            <TableRow onClick={() => choiseUser(user.id)}
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.company.name}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}