import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className="row position fixed bottom-0 d-flex align-items-center px-5 w-100">
      <div className="col-4 pt-2 d-flex justify-content-center">
        <a class="text-center fs-1" href="/life"><span id="life">Life</span></a>
      </div>
      <div class="col-4 pt-2 d-flex justify-content-center">
        <a class="text-center fs-1" href="/work"><span id="work">Work</span></a>
      </div>
      <div class="col-4 pt-2 d-flex justify-content-center">
        <a class="text-center fs-1" href="/blog"><span id="blog">Blog</span></a>
      </div>
    </footer>
  )
}

export default Footer;