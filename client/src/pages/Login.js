import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class Login extends Component {
    render() {
        return (
            <Grid>
                <Navbar />
                <Paper>
                    Hi
                </Paper>
            </Grid>
        )
    };
};

export default Login;