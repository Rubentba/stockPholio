import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginForm extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container justify='center' style={{ marginTop: '40px' }}>
                    <Typography variant='h4'>
                        Welcome Back!
                    </Typography>
                </Grid>
                <Grid container justify='center' style={{ marginTop: '10px' }}>
                    <Typography>
                        Log in to your account
                    </Typography>
                </Grid>
                <Paper className={classes.padding} style={{ marginBottom: 60, marginTop: 40 }}>
                    <div className={classes.margin}>
                        <Grid container spacing={8} alignItems='flex-end'>
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id='username' label='Email' type='email' fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems='flex-end'>
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id='username' label='Password' type='password' fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container alignItems='center' justify='space-between'>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox
                                        color='primary'
                                    />
                                } label='Remember me!' />
                            </Grid>
                            <Grid container justify='center' style={{ marginTop: '10px' }}>
                                <Button variant='outlined' color='primary' style={{ textTransform: 'none' }}>Login</Button>
                            </Grid>
                            <Grid item container justify='center' style={{ marginTop: '10px' }}>
                                <Button disableFocusRipple disableRipple style={{ textTransform: 'none' }} variant='text' color='primary'>Forgot password ?</Button>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' style={{ marginTop: '10px' }}>
                            <Button disableFocusRipple disableRipple style={{ textTransform: 'none' }} variant='text' color='primary'>New? Sign Up</Button>
                        </Grid>
                    </div>
                </Paper>
            </div >
        );
    };
};

export default withStyles(styles)(LoginForm);