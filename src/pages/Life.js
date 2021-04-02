import React from 'react';
import Bio from '../components/Bio';
import Navbar from '../components/Navbar';

function Life() {
  return (
    <div>
      <Bio />
      <Navbar 
      prev={'Home'}
      prevPath={'/my-portfolio/#/'}
      forward={'Work'}
      forPath={'/my-portfolio/#/work'}
      />
    </div>
  )
}

export default Life;