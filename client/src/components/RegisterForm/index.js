import React, { Component } from 'react';
import { withStyles, Grid, TextField, Button, Card, Typography } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class RegisterForm extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container justify="left">
                    <Grid container justify="center">
                        <Typography variant='h5'>
                            Welcome to StockPholio
                        </Typography>
                    </Grid>
                    <Grid container justify="center">
                        <Typography variant='h5'>
                            <p>- Create Custom Pies</p>
                            <p>- Follow Stocks</p>
                            <p>- Save Time</p>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="left">
                    <Card className={classes.padding}>
                        <div className={classes.margin}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Face />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="username" label="Email" type="email" fullWidth autoFocus required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Fingerprint />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="username" label="Password" type="password" fullWidth required />
                                </Grid>
                            </Grid>
                            <Grid container justify="center" style={{ marginTop: '10px' }}>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Sign Up Now</Button>
                            </Grid>
                            <Grid container alignItems="center" justify="space-between">
                                <Grid item container justify="center">
                                    <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Already have an account? Login</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(RegisterForm);