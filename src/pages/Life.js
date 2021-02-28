import React from 'react';
import Bio from '../components/Bio';
import Navbar from '../components/Navbar';

function Life() {
  return (
    <div>
      <Bio />
      <Navbar 
      prev={'Home'}
      prevPath={'/react-portfolio#/'}
      forward={'Work'}
      forPath={'/react-portfolio#/work#'}
      />
    </div>
  )
}

export default Life;