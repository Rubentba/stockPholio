import React from 'react';
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignupButton from '../SignupButton/SignupButton';
import LoginButton from '../LoginButton/LoginButton';
import { styled } from '@material-ui/styles';

const Nav = styled(Appbar)({
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
      <Nav position="static">
        <Toolbar>
          <Word>
            <a style={{}} className='nav-link' href='/'>Google Book Search</a>
          </Word>
          <div style={{ position: 'absolute', right: 15 }}>
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
