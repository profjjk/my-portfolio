import React, { Component } from 'react';
import './index.css';

class Project extends Component {
  render() {
  return (
    <section className="row p-5" id="projects">
      <div className="row my-2">
        <div className="col-2">
          <h4 className="color skinny fs-2 text-center pt-4">Projects</h4>
        </div>
        <div className="col-10">
          {this.props.projects.map(({ id, title, description, image, github, website})=> (
            <div className="row my-4" key={id}>
              <hr className="w-75"/>
              <div className="col-9 px-5">
                <h6>{title}</h6>
                <p>{description}</p>
                <div className="text-end">
                  <a className="link px-1" href={website}>Website</a>
                  <a className="link px-1" href={github}>GitHub</a>
                </div>
              </div>
              <div className="col-3 d-flex py-1">
                <img className="img-fluid rounded mx-auto w-50 light" src={`${process.env.PUBLIC_URL}${image}`} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}
}

export default Project;