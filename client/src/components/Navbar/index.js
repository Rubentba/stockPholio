import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SignupButton from '../SignupButton';
import LoginButton from '../LoginButton';
import { styled } from '@material-ui/styles';
import Logout from '../auth/Logout'

const Nav = styled(AppBar)({
  backgroundColor: '#f5f5f5',
  border: 0,
  opacity: 1,
  margin: 0,
  padding: 0
});

const Word = styled(Typography)({
  color: '#03a9f4',
  fontSize: '24px'
});

function Navbar() {
  return (
    <div>
      <Nav position='static'>
        <Toolbar>
          <Word className='nav-link' href='/'>
            Stockpholio
          </Word>
          <div style={{ position: 'absolute', right: 15 }}>
            <SignupButton className='nav-link' href='/signup'>
              Sign Up
            </SignupButton>
            <LoginButton className='nav-link' href='/login'>
              Login
            </LoginButton>
            <Logout />
          </div>
        </Toolbar>
      </Nav>
    </div>
  );
};

export default Navbar;
