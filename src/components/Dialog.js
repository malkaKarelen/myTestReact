import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


export default function FormDialog(props) {
    const [open, setOpen] = useState(false);
    const [postTitle, setPostTitle] = useState()
    const [postBody, setPostBody] = useState()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseAndSave = (e) => {
        setOpen(false);
        console.log()
        let p={userId:props.id,title:postTitle,body:postBody}
        console.log(p)
        props.getPost(props.id,postTitle,postBody)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const postFromUserTitle = (e) => {
        setPostTitle(e.target.value)
    }

    const postFromUserBody = (e) => {
        setPostBody(e.target.value)
        
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Post
            </Button>
           
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a new post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here you can write the title
                    </DialogContentText>
                    <TextField onChange={postFromUserTitle}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        Here you can write the body
                    </DialogContentText>
                    <TextField onChange={postFromUserBody}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="body"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCloseAndSave}>save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}