import React from 'react';
import styles from '../assets/Styles/Resume.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume: React.FC = () => {
  return (
    <div id={styles.resume} className={styles.resume}>
      <h1 className={styles.heading}>RESUME</h1>
      <section className={styles['design-section']}>
        <div className={styles.timeline}>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
            <h2>2024</h2>
            <p>
              Name of Company: 1Nebula <br />
              Duration: January 2024 - Curreently <br />
              Role: Intern Software <br />
              Skills: JavaScript, Typescript, C#, WebAPI, ASP.NET, Azure, React, SQL<br />
            </p>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h2>2023</h2>
            <p>
              Name of Company: Payment24 <br />
              Duration: June 2023 - August 2023 <br />
              Role: Intern Software <br />
              Skills: JavaScript, JQuery, C#, MVC, ASP.NET, Azure <br />
              Reason for leaving: Contract Ended
            </p>
          </div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h2>2023</h2>
            <p>
              Name of School: Life Choices Studio <br />
              Duration: March 2023 - May 2023 <br />
              Modules: PHP, Wordpress, Figma <br />
              Reason for leaving: I got an internship
            </p>
          </div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h2>2022</h2>
            <p>
              Name of School: Life Choices Academy <br />
              Duration: September 2022 - March 2023 <br />
              Qualification: Web Development <br />
              Modules: JavaScript, HTML, CSS, Bootstrap, Node.js, MySQL, & Vue
            </p>
          </div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h2>2021</h2>
            <p>
              Name of Company: ACDC Dynamics <br />
              Duration: November 2021 - September 2022 <br />
              Reason for leaving: I left to study
            </p>
          </div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h2>2019</h2>
            <p>
              Name of Company: IkamvaYouth <br />
              Duration: July 2019 - December 2019 <br />
              Reason for leaving: Contract Ended
            </p>
          </div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h2>2018</h2>
            <p>
              Name of Company: Levi's Strauss <br />
              Duration: May 2018 - October 2018<br />
              Reason for leaving: Contract Ended
            </p>
          </div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h2>2015-2020</h2>
            <p>
              Name of School: University of the Western Cape <br />
              Qualification: Bachelor of Commerce <br />
              Majors: Economics and Information Systems
            </p>
          </div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-empty']}></div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']}></div>
          </div>
          <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
            <h2>2012-2014</h2>
            <p>
              Name of School: J.S Skenjana S.S.S <br />
              Qualification: Matric <br />
              Subjects: Economics, Accounting, Business Studies, Maths
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
