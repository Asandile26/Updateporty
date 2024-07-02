import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import swenka from '../assets/Styles/Project.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


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
    image: 'https://i.postimg.cc/8crNQjRf/portfolio.png',
    title: 'Portfolio (HTML & CSS)',
    githubLink: 'https://github.com/Asandile26/portfolio2.git',
    netlifyLink: 'https://portfolioasandilelangeni.netlify.app'
  },
  {
    id: 1,
    title: 'E-Commerce',
    image: 'https://i.postimg.cc/tTD0JLkg/Ecommerce.png',
    githubLink: 'https://github.com/Asandile26/Ecommerce.git',
    netlifyLink: 'https://asandilelangeniecommerce.netlify.app'
  },
  {
    id: 2,
    title: 'E-Commerce (Javascript)',
    image: 'https://i.postimg.cc/VkXv0Hb0/JS-Ecommerce.png',
    githubLink: 'https://github.com/Asandile26/Project-E-commerce.git',
    netlifyLink: 'https://asandilelangeni-ecommerce.netlify.app'
  },
  {
    id: 3,
    title: 'CapStone',
    image: 'https://i.postimg.cc/bJxW0h1N/capstone.png',
    githubLink: 'https://github.com/Asandile26/capstone_final.git',
    netlifyLink: 'capstone-asandile.firebaseapp.com'
  },
  {
    id: 4,
    title: 'Calculator',
    image: 'https://i.postimg.cc/TP9PCL0R/calculator.png',
    githubLink: 'https://github.com/Asandile26/calculator.git',
    netlifyLink: 'https://asandilelangenicalculator.netlify.app'
  },
  {
    id: 5,
    title: 'Vue-Portfolio',
    image: 'https://i.postimg.cc/2y5GqRwt/Vue-portfolio.png',
    githubLink: 'https://github.com/Asandile26/Vue-Portfolio.git',
    netlifyLink: 'https://portfolio-asandilelangeni.netlify.app'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="project">
      <h1>PROJECTS</h1>
      <div className={swenka.projects}>
        {projects.map((pro) => (
          <div className="card" style={{ width: '18rem' }} key={pro.id}>
            <img src={pro.image} className="card-img-top" alt="photo" style={{ height: '25vh' }} />
            <div className="card-body">
              <h5 className="card-title">{pro.title}</h5>
              <a href={pro.githubLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary btn1" type="button">
                  Github
                </button>
              </a>
              <a href={pro.netlifyLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary btn2" type="button">
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
