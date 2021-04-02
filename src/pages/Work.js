import React from 'react';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Navbar from '../components/Navbar';
import projects from '../projects.json';

function Work() {
  return (
    <div>
      <Skills />
      <Project 
        projects={projects.reverse()}
      />
      <Navbar 
        prev={'Life'}
        prevPath={'/my-portfolio/#/life'}
        forward={'Blog'}
        forPath={'/my-portfolio/#/blog'}
      />
    </div>
  )
}

export default Work;