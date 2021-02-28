import React from 'react';
import './index.css';
import projects from '../../projects.json';

function Project() {
  return (
    <section class="row p-5" id="projects">
      <div class="row my-2">
        <div class="col-2">
          <h4 class="color skinny fs-2 text-center pt-4">Projects</h4>
        </div>
        <div class="col-10">
          {projects.map(({ id, title, description, image, github, website})=> (
            <div class="row my-4">
              <div class="col-9 px-5">
                <h6>{title}</h6>
                <p>{description}</p>
                <div class="text-end">
                  <a class="link px-1" href={website} target="_blank">Website</a>
                  <a class="link px-1" href={github} target="_blank">GitHub</a>
                </div>
              </div>
              <div class="col-3 d-flex py-1">
                <img class="img-fluid rounded mx-auto w-50 light" src={image} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;