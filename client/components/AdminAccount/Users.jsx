import React from "react";
import { useGetUsersQuery } from "../API/mindfulHarvestApi";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

const Users = () => {
    const adminBoolean = useSelector(state => state.adminBoolean);
    if (adminBoolean === false) {
        return (
            <Card className="permissionMessageCard">
                <CardContent>
                    <Typography variant="body1">
                        Need Special Permissions to Access Page.
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    const { data, error, isLoading } = useGetUsersQuery();

    if (isLoading) {
        return <CircularProgress sx={{color: 'black', marginTop: "40%", marginLeft: "40%"}} size={75}/>
    };

    if (error || !data) {
        return <div>Unable to load users.</div>;
    };

    return (
        <Card className="UsersContainer">
            <CardContent>
                <Typography variant="h5" className="AdminHeading" style={{paddingBottom:'2%'}}>
                    Welcome Back, Administrator!
                </Typography>
                <Typography variant="h6" className="UsersHeading" style={{paddingBottom: '2%'}}>
                    List of Registered Users
                </Typography>
                <Grid container spacing={3}>
                    {data ? (
                        data.map((user) => (
                            <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
                                <Card className="UserItem" style={{ height: "200px" }}>
                                    <CardContent>
                                        <Typography variant="body1" className="UserId">
                                            Id: {user.id}
                                        </Typography>
                                        <Typography variant="body1" className="UserName">
                                            Username: {user.username}
                                        </Typography>
                                        <Typography variant="body1" className="UserEmail">
                                            Email: {user.email}
                                        </Typography>
                                        <Typography variant="body1" className="UserStatus">
                                            Admin Status: {user.isAdmin ? "Yes" : "No" }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Card className="unauthorizedAccessCard">
                            <CardContent>
                                <Typography variant="body1">
                                    Unauthorized Access
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Users;
