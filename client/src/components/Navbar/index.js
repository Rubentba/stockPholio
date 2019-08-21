import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Link, Grid } from '@material-ui/core';
import SignupButton from '../SignupButton';
import LoginButton from '../LoginButton';
import { styled } from '@material-ui/styles';
import Logout from '../auth/Logout';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const Nav = styled(AppBar)({
  backgroundColor: '#f5f5f5',
  border: 0,
  opacity: 1,
  margin: 0,
  padding: 0
});

const Word = styled(Link)({
  color: '#03a9f4',
  fontSize: '24px'
});

class Navbar extends Component {
  state = {

  };

  static propTypes = {
    auth: propTypes.object.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Grid container justify='space-evenly'>
          <Typography style={{ color: '#03a9f4', marginTop: 6 }}>
            {user ? `Welcome, ${user.username}` : ''}
          </Typography>
          <LoginButton style={{ backgroundColor: '#f5f5f5' }} className='nav-link' href='/wishlist'>
            Wishlist
          </LoginButton>
          <LoginButton style={{ backgroundColor: '#f5f5f5' }} className='nav-link' href='/dashboard'>
            Dashboard
          </LoginButton>
          <Logout />
        </Grid>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <SignupButton className='nav-link' href='/signup'>
          Sign Up
        </SignupButton>
        <LoginButton className='nav-link' href='/login'>
          Login
        </LoginButton>
      </Fragment>
    );

    return (
      <div>
        <Nav position='static'>
          <Toolbar>
            <Typography>
              <Word className='nav-link' href='/'>
                StockPholio
              </Word>
            </Typography>
            <div style={{ position: 'absolute', right: 15 }}>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </Toolbar>
        </Nav>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Navbar);
