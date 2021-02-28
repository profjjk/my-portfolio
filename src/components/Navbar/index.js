import React from 'react';
import './index.css';

function Navbar(props) {
  return (
    <nav className="row position-fixed bottom-0 d-flex align-items-center px-5 w-100">
      <a class="col-6 fs-1 text-start" href={props.prevPath}><span className="navlink text-start">{'\u227A'} {props.prev}</span></a>
      <a class="col-6 fs-1 text-end" href={props.forPath}><span className="navlink">{props.forward} {'\u227B'}</span></a>
    </nav>
  )
}

export default Navbar;