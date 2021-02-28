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
        prevPath={'/react-portfolio#/life#'}
        forward={'Blog'}
        forPath={'/react-portfolio#/blog#'}
      />
    </div>
  )
}

export default Work;