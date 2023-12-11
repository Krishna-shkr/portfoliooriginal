import React from 'react'
import './intro.css'
import bg from '../../assets/image1.png'
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
   <section id='intro'>
   <div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm <span className='introName'>Krishna</span><br/>Full Stack Developer</span>
    <p className='introPara'>I am a superHero</p>
    <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'/>Hire Me</button></Link>
   </div>
   <img src={bg} alt='profile' className='bg'/>
   </section>
  )
}

export default Intro;