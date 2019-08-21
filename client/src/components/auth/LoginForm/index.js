import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import { clearErrors } from '../../../actions/errorActions';
import { styled } from '@material-ui/styles';

const Word = styled(Link)({
    color: '#03a9f4'
});

const LoginFormButton = styled(Button)({
    background: '#03a9f4',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 36,
    width: '80%',
    padding: '0 30px'
});

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        msg: null
    };

    componentDidUpdate(previousProps) {
        const { error } = this.props;
        if (error !== previousProps.error) {
            // Check for login error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    onChange = event => {

        this.setState({ [event.target.id]: event.target.value })
    };

    onSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        }

        // Attempt to login
        this.props.login(user);
    };

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
                <Grid container justify='center'>
                    <Paper className={classes.padding} style={{ marginBottom: 60, marginTop: 40, maxWidth: 420, height: 276 }}>
                        <form className={classes.margin} onSubmit={this.onSubmit}>
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
                            <Grid container alignItems='center' justify='space-between'>
                                <Grid item>
                                    <FormControlLabel control={
                                        <Checkbox
                                            color='primary'
                                        />
                                    } label='Remember me!' />
                                </Grid>
                                <Grid container justify='center' style={{ marginTop: '10px' }}>
                                    <LoginFormButton label='Submit' type='submit' className='nav-link' href='/dashboard'>Login</LoginFormButton>
                                </Grid>
                            </Grid>
                            <Grid container justify='center' style={{ marginTop: '10px' }}>
                                <Typography>
                                    <Word className='nav-link' href='/signup'>
                                        New? Sign Up
                                    </Word>
                                </Typography>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </div >
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(withStyles(styles)(LoginForm));