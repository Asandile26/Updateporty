import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import swenka from '../assets/Styles/Project.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import calculator from '../assets/Images/Calculator.png';
import vuePorty from '../assets/Images/Vue-portfolio.png';
import capstone from '../assets/Images/Capstone.png';
import ecommerce from '../assets/Images/E-commerce.png';
import old from '../assets/Images/OldEcommerc.png';
import firstPorty from '../assets/Images/firstPorty.png'

interface Project {
  id: number;
  image: string;
  title: string;
  githubLink: string;
  netlifyLink: string;
}

const projects: Project[] = [
  {
    id: 0,
    image:firstPorty ,
    title: 'Portfolio (HTML & CSS)',
    githubLink: 'https://github.com/Asandile26/portfolio2.git',
    netlifyLink: 'https://portfolioasandilelangeni.netlify.app'
  },
  {
    id: 1,
    title: 'E-Commerce',
    image: old,
    githubLink: 'https://github.com/Asandile26/Ecommerce.git',
    netlifyLink: 'https://asandilelangeniecommerce.netlify.app'
  },
  {
    id: 2,
    title: 'E-Commerce (Javascript)',
    image: ecommerce,
    githubLink: 'https://github.com/Asandile26/Project-E-commerce.git',
    netlifyLink: 'https://asandilelangeni-ecommerce.netlify.app'
  },
  {
    id: 3,
    title: 'CapStone',
    image: capstone,
    githubLink: 'https://github.com/Asandile26/capstone_final.git',
    netlifyLink: 'https://capstone-asandile.firebaseapp.com/'
  },
  {
    id: 4,
    title: 'Calculator',
    image: calculator,
    githubLink: 'https://github.com/Asandile26/calculator.git',
    netlifyLink: 'https://asandilelangenicalculator.netlify.app'
  },
  {
    id: 5,
    title: 'Vue-Portfolio',
    image: vuePorty,
    githubLink: 'https://github.com/Asandile26/Vue-Portfolio.git',
    netlifyLink: 'https://portfolio-asandilelangeni.netlify.app'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="project">
      <h1 className={swenka.heading}>PROJECTS</h1>
      <div className={swenka.projects}>
        {projects.map((pro) => (
          <div className="card" style={{ width: '18rem' }} key={pro.id}>
            <img src={pro.image} className="card-img-top" alt="photo" style={{ height: '25vh' }} />
            <div className="card-body">
              <h5 className="card-title">{pro.title}</h5>
              <a href={pro.githubLink} target="_blank" rel="noopener noreferrer">
                <button className={swenka.btn1} type="button">
                  Github
                </button>
              </a>
              <a href={pro.netlifyLink} target="_blank" rel="noopener noreferrer">
                <button className={swenka.btn2} type="button">
                  Netlify
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
