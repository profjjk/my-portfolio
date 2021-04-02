import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className="row position fixed bottom-0 d-flex align-items-center px-5 w-100">
      <div className="col-4 pt-2 d-flex justify-content-center">
        <a className="text-center fs-1" href="/my-portfolio/#/life"><span>Life</span></a>
      </div>
      <div className="col-4 pt-2 d-flex justify-content-center">
        <a className="text-center fs-1" href="/my-portfolio/#/work"><span>Work</span></a>
      </div>
      <div className="col-4 pt-2 d-flex justify-content-center">
        <a className="text-center fs-1" href="/my-portfolio/#/blog"><span>Blog</span></a>
      </div>
    </footer>
  )
}

export default Footer;