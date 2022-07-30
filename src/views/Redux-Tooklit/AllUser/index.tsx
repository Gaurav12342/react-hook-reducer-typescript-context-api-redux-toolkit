import React, { FC, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, usersData, userLoading } from '../../../store/user/getAllUserSlice';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmPopup: FC<any> = (props) => {
    const { open, handleClose } = props;
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Delete Record"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this record ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Confirm</Button>
                <Button onClick={handleClose} autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}
const AllUsers: FC = () => {
    const user = useSelector(usersData);
    const userLogin = useSelector(userLoading);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [rowData, setRowData] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {userLogin ?
                        <Box sx={{ width: "100%" }}> <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={false} />
                        </Box>
                        : <>
                            <TableHead>
                                <TableRow>
                                    <TableCell>User Id</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Location</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user?.data?.map((row: any) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => setRowData(row)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.location}</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="Delete" onClick={handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <ModeEditOutlineOutlinedIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </>}
                </Table>
            </TableContainer>

            {open && <ConfirmPopup handleClose={handleClose} open={open} />}
        </div>
    )
}

export default AllUsers