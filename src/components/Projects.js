import React, { Component } from "react";
import './Projects.css';
import codenight from './codenight.jpg';
import hackclub from './hackclub.png';


class Projects extends Component {
  render() {
    return (
      <div className="body">
       <div className="project">
         <div className="item">
          <img src={codenight} className="bodyPic" alt="codenight" />
          <p>Code Night at PHS! Code night at PHS was on the 12th of December and hosted kids, of elementary school age, to come and explore a variety of coding activities. The code night was a collaborative event, with volunteers from many highschools.</p>
         </div>
         <div className="item">
          <img src={hackclub} className="bodyPic" alt="hackclub" />
          <p>Hack Club Meetings!</p>
         </div>
       </div>
      </div>
    );
  }
}

export default Projects;