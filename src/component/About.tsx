import {} from "react";
import color from "../assets/Styles/About.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function About() {
  return (
    <div className={color.About} id={color.about}>
      <h1>ABOUT</h1>
      <div className={color.container}>
        <div className={`${color.intro} col d-flex`}>
          <div className={color.photo}>
            <img
              src="https://imgur.com/W5prbUo"
              alt="profile img"
              className={color.profile}
            />
          </div>
          <div className={color.text}>
            <p className={`${color.para} mt-4`} id={color.about}>
              Hello, welcome to my portfolio! My name is Asandile Langeni, and I
              am a graduate of the University of the Western Cape, where I
              earned a Bachelor of Commerce with a major in Economics and
              Information Systems. I also have a certificate from Life Choices,
              which I obtained in 2023. <br />
              <br />
              I have always been interested in technology and its potential to
              change the world, and that's what drew me to web development. I
              believe that the internet has the power to connect people and
              ideas in ways that were once impossible, and I want to be a part
              of making that happen. As a web developer, I am constantly
              learning and growing, and I am excited to take on new challenges
              and push myself to become the best developer I can be. Whether you
              need a simple website or a complex web application, I am confident
              that I have the skills and expertise to deliver high-quality
              results. Thank you for taking the time to visit my website, and I
              look forward to working with you! <br />
              <br />
              D.O.B : 1995-10-13 <br />
              Location : Cape Town, Khayelitsha <br />
              Email : asandilelangeni@gmail.com <br />
              Phone : 067 6555 678
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
