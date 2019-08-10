import React from 'react';
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignupButton from '../SignupButton/SignupButton';
import LoginButton from '../LoginButton/LoginButton';
import { styled } from '@material-ui/styles';
import { fontSize } from '@material-ui/system';

const Nav = styled(Appbar)({
  background: 'white',
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
      <Nav position="static">
        <Toolbar>
          <Word variant="Title" >
            Stockpholio
          </Word>
          <div style={{ position: 'absolute', right: 0, marginRight: '5px' }}>
            <SignupButton>
              Sign Up
          </SignupButton>
            <LoginButton>
              Login
          </LoginButton>
          </div>
        </Toolbar>
      </Nav>
    </div>
  );
}

export default Navbar;
