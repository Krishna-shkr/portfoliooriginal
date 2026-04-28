import React from 'react';
import './intro.css';
import bg from '../../assets/image1.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I&rsquo;m <span className="introName">Krishna</span>
          <br />
          Full Stack Developer
        </span>
        <p className="introPara">
          I build performant, accessible web applications end&#8209;to&#8209;end.
        </p>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
          <button type="button" className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
