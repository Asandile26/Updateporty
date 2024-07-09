import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  cover from '../assets/Styles/Intro.module.css';
import bg from '../assets/Images/Don-removebg-preview.png'

const Intro: React.FC = () => {
  return (
    <div className={cover.landing}>
      <div className={cover.image}>
      <img src={bg} alt="" />
      </div>
      <div className={cover.banner}>
        <div className={cover.line}>
          <h1>Hi, I'm Asandile Langeni</h1>
          <br />
          <h3>Full Stack Web Developer</h3>
          <br />
          <div className={cover.cv}>
            <a
              href="https://drive.google.com/file/d/1DsJ2r3zEztrdn9n39nW1AgLyAZBZtSOB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className={cover.iconz}>
          <a href="https://github.com/Asandile26" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://twitter.com/LA_Nator21" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://m.facebook.com/100090013194612/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/asandile-langeni-05b027201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
