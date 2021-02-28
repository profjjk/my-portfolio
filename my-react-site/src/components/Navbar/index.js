import React from 'react';
import './index.css';

function Navbar() {
  return (
    <nav className="row position-fixed bottom-0 d-flex align-items-center px-5 w-100">
      <a class="col-6 fs-1 text-start" href="/"><span className="navlink text-start">{'\u227A'} Home</span></a>
      <a class="col-6 fs-1 text-end" href="/work"><span className="navlink">Work {'\u227B'}</span></a>
    </nav>
  )
}

export default Navbar;