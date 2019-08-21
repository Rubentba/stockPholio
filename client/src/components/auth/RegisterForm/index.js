import React, { Component } from 'react';
import { withStyles, Grid, TextField, Button, Card, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../../actions/authActions';
import { clearErrors } from '../../../actions/errorActions';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class RegisterForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        msg: null
    };

    componentDidUpdate(previousProps) {
        const { error } = this.props;
        if (error !== previousProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    onChange = event => {

        this.setState({ [event.target.id]: event.target.value })
    };

    onSubmit = event => {
        event.preventDefault();

        const { username, email, password } = this.state;

        const newUser = {
            username,
            email,
            password
        }

        this.props.register(newUser)
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid>
                    <Grid container justify='center'>
                        <Typography variant='h5'>
                            Welcome to StockPholio
                        </Typography>
                    </Grid>
                    <Grid container justify='center'>
                        <Typography variant='h5'>
                            <p>- Create Custom Pies</p>
                            <p>- Follow Stocks</p>
                            <p>- Save Time</p>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    {this.state.msg ? <p style={{ color: 'red' }}>{this.state.msg}</p> : null}
                    <Card className={classes.padding}>
                        <form className={classes.margin} onSubmit={this.onSubmit}>
                            <Grid container spacing={8} alignItems='flex-end'>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id='username' label='Username' type='text' placeholder='Username' onChange={this.onChange} fullWidth required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems='flex-end'>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id='email' label='Email' type='text' placeholder='Email' onChange={this.onChange} fullWidth autoFocus required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems='flex-end'>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id='password' label='Password' type='password' placeholder='Password' onChange={this.onChange} fullWidth required />
                                </Grid>
                            </Grid>
                            <Grid container justify='center' style={{ marginTop: '10px' }}>
                                <Button variant='outlined' color='primary' style={{ textTransform: 'none' }} label='Submit' type='submit'>Sign Up Now</Button>
                            </Grid>
                            <Grid container alignItems='center' justify='space-between'>
                                <Grid item container justify='center'>
                                    <Button disableFocusRipple disableRipple style={{ textTransform: 'none' }} variant='text' color='primary'>Already have an account? Login</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
            </div>
        )
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(withStyles(styles)(RegisterForm));