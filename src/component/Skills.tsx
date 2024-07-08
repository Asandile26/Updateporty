import React from 'react';
import use from '../assets/Styles/Skills.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Skills: React.FC = () => {
  return (
    <div className={`${use.skills} d-flex`} id="skills">
      <div className={use.soft}>
        <h1 id={use.tech}>SOFT SKILLS</h1>
        <div className={use.buttons}>
          <button className={use.raise}>Team player</button>
          <button className={use.raise}>A great communicator</button>
          <button className={use.raise}>Patient</button>
          <button className={use.raise}>Problem solver</button>
          <button className={use.raise}>Inquisitive</button>
          <br />
          <button className={use.raise}>Time Management</button>
          <button className={use.raise}>Self awareness</button>
          <button className={use.raise}>Customer service champ</button>
          <button className={use.raise}>Analytic</button>
          <button className={use.raise}>Creativity</button>
        </div>
      </div>
      <h1 id={use.tech}>TECHNICAL SKILLS</h1>
      <div className={use.Tech1}>
      <i className="fa-brands fa-html5"></i>
        <i className="bi bi-bootstrap-fill" style={{ fontSize: '7em' }}></i>
        <i className="fa-brands fa-node-js" style={{ fontSize: '7em' }}></i>
        <i className="fa-brands fa-css3-alt"></i>
      </div>
      <div className={use.Tech2}>
        <i className="fa-brands fa-js" style={{ fontSize: '7em' }}></i>
        <i className="fa-brands fa-vuejs" style={{ fontSize: '7em' }}></i>
        <i className="fa-brands fa-github"style={{ fontSize: '7em' }}></i>
        <i className="fa-brands fa-react"style={{ fontSize: '7em' }}></i>
      </div>
    </div>
  );
};

export default Skills;
