// רק בסיעתא דשמיא
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import PostsOfUser from './PostsOfUser'
import './Home.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';


export default function Home() {

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
        post = <PostsOfUser posts={posts} id={id} getPost={getPost} />
        console.log(post)
        setPostOfUser(post)
    }

    function getPost(userId, title, body) {
        console.log("vvvv+" + userId, title, body)
        setPosts([...posts, { userId, title, body }]);

    }

    return (
        <>
            <div id="home">
                <TextField id="outlined-basic" label="Filter By Name" variant="outlined" onChange={filterByName} />
                <TextField id="outlined-basic" label="Filter By Email" variant="outlined" onChange={filterByEmail} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 200 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell>Name</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell >Company</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterUser.map((user, i) => (
                                <TableRow onClick={() => choiseUser(user.id)}
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.name}
                                    </TableCell>
                                    <TableCell >{user.email}</TableCell>
                                    <TableCell >{user.company.name}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {postOfUser}

            </div>
    
            <div id="wrapTable">

            </div>



        </>

    )

}

