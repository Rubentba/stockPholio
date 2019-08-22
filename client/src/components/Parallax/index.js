import React from 'react';
import { Parallax } from 'react-parallax';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const SignupFormButton = styled(Button)({
  background: '#03a9f4',
  color: 'white',
  padding: 20,
  position: 'absolute',
  top: '70%',
  left: '15%',
  transform: 'translate(-50%,-50%)',
  fontSize: 16
});

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const welcomeStyles = {
  color: '#03a9f4',
  position: 'absolute',
  fontSize: '35px',
  textAlign: 'left',
  top: '15%',
  left: '23%',
  transform: 'translate(-50%,-50%)'
};
const blurbStyles = {
  color: 'white',
  position: 'absolute',
  textAlign: 'left',
  fontSize: '25px',
  top: '40%',
  left: '23%',
  transform: 'translate(-50%,-50%)'
};
const image1 =
  'https://media.beam.usnews.com/46/19/5c6c54fb4c6f812dc85c20fc656a/141106-portfolio-stock.jpg';

const Mparallax = () => {
  return (
    <div style={styles}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={{ position: 'absolute', left: '15%', top: '15%', height: '400px', width: '400px' }}>
            <p style={welcomeStyles}> Welcome to Stockpholio</p>
            <p style={blurbStyles}> The simple stock portfolio tracker for the DIY investor.</p>
            <SignupFormButton className='nav-link' href='/signup'>TRY FOR FREE - SIGN UP</SignupFormButton>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
export default Mparallax;