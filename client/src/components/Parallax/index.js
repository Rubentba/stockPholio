import React from 'react';
import { Parallax } from 'react-parallax';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const insideStyles = {
  background: '#03a9f4',
  color: 'white',
  padding: 20,
  position: 'absolute',
  top: '70%',
  left: '15%',
  transform: 'translate(-50%,-50%)'
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
  color: 'black',
  position: 'absolute',
  textAlign: 'left',
  fontSize: '25px',
  top: '40%',
  left: '23%',
  transform: 'translate(-50%,-50%)'
};
const image1 =
  'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

const Mparallax = () => {
  return (
    <div style={styles}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={{ position: 'absolute', left: '15%', top: '15%', height: '400px', width: '400px' }}>
            <p style={welcomeStyles}> Welcome to Stockpholio</p>
            <p style={blurbStyles}> The simple stock portfolio tracker for the DIY investor.</p>
            <div style={insideStyles}>TRY FOR FREE - SIGN UP</div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
export default Mparallax;