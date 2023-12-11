import React from 'react'
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';


const works = () => {
  return (
   <section id='works'>
    <h2 className='workstitle'>My Portfolio</h2>
    <span className='worksDesc'>this  is demo text</span>
    <div class="worksImgs">
        <img src={portfolio1} alt="" class="worksImg"/>
        <img src={portfolio2} alt="" class="worksImg"/>
        <img src={portfolio3} alt="" class="worksImg"/>
        <img src={portfolio4} alt="" class="worksImg"/>
        <img src={portfolio5} alt="" class="worksImg"/>
        <img src={portfolio6} alt="" class="worksImg"/>
    </div>
    <div>
    <button className="workBtn">See more</button>
    </div>
   </section>
  );   
}

export default works