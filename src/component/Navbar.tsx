import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import duwish from '../assets/Styles/Navbar.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar: React.FC = () => {
  return (
    <div className={duwish.navbar}>
      <nav>
        <input type="checkbox" id={duwish.check} />
        <label htmlFor={duwish.check} className={duwish.checkbtn}>
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
