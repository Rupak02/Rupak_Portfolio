import React from "react";
import "./project.css";
import Navbar from "../../components/navbar/Navbar";

const Project = () => {
  return (
    <div>
      
      <div className="know_me">MY PROJECTS</div>
      <div className="projects">
        <div className="project_container">
          <img src="project.jpeg" className="project_img" />
          <div>
            <div className="project_name">
              <p>React TodoList</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
