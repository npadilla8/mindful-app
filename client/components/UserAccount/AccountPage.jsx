import React from 'react';
import OrderItem from './OrderItem';
import { useNavigate } from 'react-router-dom';
import { useGetUserWithCartQuery } from '../API/mindfulHarvestApi';
import { useGetUserOrderHistoryQuery } from '../API/mindfulHarvestApi';
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const AccountPage = () => {
    const token = useSelector(state => state.token);
    const { data, error, isLoading } = useGetUserWithCartQuery();
    const { data: orderHistory, error: orderError, isLoading: orderLoading } = useGetUserOrderHistoryQuery();
    const navigate = useNavigate();

    // conditional rendering based on what is happening to userwithcart query
    if (isLoading) {
        return <CircularProgress sx={{color: 'black', marginTop: "40%", marginLeft: "40%"}} size={75}/>
    };
    if (error || !data) {
        return <Typography variant="body1">Unable to get user information. </Typography>
    };

    // conditional rendering based on what is happening to orderhistory query
    if (orderLoading) {
        return <CircularProgress sx={{color: 'black', marginTop: "40%", marginLeft: "40%"}} size={75}/>
    };
    if (orderError || !orderHistory) {
        return <Typography>Error in getting order history.</Typography>
    };

    if (!token) {
        // Redirect to login page if not signed in
        navigate('/login');
        return null; // Prevent rendering content when redirecting
    };

    return (
        <>
            <div className="accountDetails">
                {data ? (
                    <div>
                        <Typography variant="h5" style={{ marginLeft: "15%", marginTop: '2%', marginBottom: '1%' }}>Welcome, {data.username}!</Typography>
                        <Paper elevation={3} style={{ maxWidth: '68%', margin: 'auto', alignContent: 'left', marginBottom: '5%', padding: '1%' }}>
                            <Typography variant="h6">Account Details</Typography>
                            <Typography variant="body1"><b>Username:</b> {data.username}</Typography>
                            <Typography variant="body1"><b>Email: </b>{data.email}</Typography>
                        </Paper>
                    </div>
                ) : (
                    <Typography variant="body1">User information not available.</Typography>
                )}
            </div>
            <br />
                <Typography variant="h5" style={{ marginLeft: "15%", marginBottom: '2%' }}>Your Orders</Typography>
                {orderHistory.listOfOrders && orderHistory.listOfOrders.length > 0 ? (
                    orderHistory.listOfOrders.map((order) => {
                        const date = new Date(order.createdAt).toLocaleDateString();
                        return (
                            <>
                                <Paper elevation={3} style={{ maxWidth: '70%', margin: 'auto', alignContent: 'left', marginBottom: '5%' }}>
                                    <div key={order.id} className="individualOrder">
                                        <Box sx={{ flexGrow: 1 }} style={{ borderBottom: '1px solid #bcbcbc', backgroundColor: '#eeeeee', paddingLeft: '2%', paddingBottom: '1%' }}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2">ORDER DATE: {date}</Typography>
                                                    <Typography variant="body2">TOTAL PRICE: ${order.totalAmount}</Typography>
                                                </Grid>
                                                <Grid item xs={6} >
                                                    <Typography variant="body2" style={{ textAlign: 'right', paddingRight: '10%' }}>STATUS: {order.status}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        {order.items.map((item) => (
                                            <OrderItem key={item.id} item={item} />))
                                        }
                                        <br />
                                    </div>
                                </Paper>
                            </>
                        )
                    })
                ) : (
                    <Paper elevation={3} style={{ maxWidth: '70%', margin: 'auto', alignContent: 'left', marginBottom: '5%' }}>
                        <Typography variant="h6" style={{padding: '1%'}}> You have no order history at this time.</Typography>
                    </Paper>
                )}
        </>
    );
}

export default AccountPage;
