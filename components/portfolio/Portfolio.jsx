import React from 'react';
import IMG1 from '../../assets/m.png';
import IMG2 from '../../assets/home.jpg';
import IMG3 from '../../assets/m3.png';
import IMG4 from '../../assets/m4.png';
import IMG5 from '../../assets/m5.png';
import IMG6 from '../../assets/m6.png';
import IMG7 from '../../assets/img7.png';
import IMG8 from '../../assets/demo.gif';
import IMG9 from '../../assets/m9.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Blog App',
      img: IMG1,
      link: 'https://github.com/ankitjha-webdev/blog-app',
      github: 'https://github.com/ankitjha-webdev/blog-app',
      tech: 'React, Nodejs, Express, MongoDB, Mongoose, CSS',
    },
    {
      id: 2,
      title: 'Web Home Automation Syatem',
      img: IMG2,
      link: 'https://ankitjhamernapp.herokuapp.com/',
      github: 'https://github.com/ankitjha-webdev/WebHomeAutomation',
    },
    {
      id: 3,
      title: 'Logistic Management System',
      img: IMG3,
      link: 'https://github.com/ankitjha-webdev/motherson_lms/tree/main/rate_masters',
      github: 'https://github.com/ankitjha-webdev/motherson_lms/tree/main/rate_masters',
    },
    {
      id: 4,
      title: 'CableCare Company',
      img: IMG4,
      link: 'https://cablecare.co/',
      github: 'https://github.com/ankitjha-webdev/cablecare.co',
    },
    {
      id: 5,
      title: 'Multipart Form App',
      img: IMG5,
      link: 'https://github.com/ankitjha-webdev/multi-part-form/edit/main/README.md',
      github: 'https://github.com/ankitjha-webdev/multi-part-form',
    },
    {
      id: 6,
      title: 'Facebook Clone',
      img: IMG6,
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/ankitjha-webdev/facebook-login-clone',
    },
    {
      id: 7,
      title: 'CUTM Certificate Generator',
      img: IMG7,
      link: 'https://github.com/ankitjha-webdev/certificate_generator_in_js/edit/main/README.md',
      github: 'https://github.com/ankitjha-webdev/certificate_generator_in_js',
    },
    {
      id: 8,
      title: 'CUTM Coding Club Website',
      img: IMG8,
      link: 'https://github.com/ashish-devv/coding-club-website',
      github: 'https://github.com/ashish-devv/coding-club-website',
    },
    {
      id: 9,
      title: 'React Tailwind Landing Page',
      img: IMG9,
      link: 'https://landing-page-react-tailwindcss.netlify.app/',
      github: 'https://github.com/ankitjha-webdev/landing-page-react-tailwindcss',
    },
  ];
  

  return (
    <>
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a> 
          </div>

        </article>
        ))}   
      </div>
    </section>

    </>
  )
}

export default Portfolio