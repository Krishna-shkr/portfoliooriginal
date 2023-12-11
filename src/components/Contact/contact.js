import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4mhzzm6', 'template_mffxq1e', form.current, 'qaBcwh0A0PZ9ksLXMOz9R')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent');
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contactPage">
        <div id="clients">
        <hi class="contactPageTitle">My Clients</hi>
        <p class="clientDesc">ugygtfSTDFywgdywdtatqffegutefyiegfuuyyfgyagychdtsjddhgdytre demo</p>
        <div class="clientsImgs">
        <img src={Walmart}  alt="Client" class="clientImg"></img>
        <img src={Adobe}  alt="Client" class="clientImg"></img>
        <img src={Microsoft}  alt="Client" class="clientImg"></img>
        <img src={Facebook}  alt="Client" class="clientImg"></img>
        </div>
        </div>
        <div id="contact">
        <h1 class="contactPageTitle">Contact Me</h1>
        <span class="contactDesc">fill the deatils</span>
        <form action="" class="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" class="name"  placeholder='Your Name' name='your-name'/>
        <input type="text" class="email"placeholder='Your Email'name='your-email'/>
        <textarea name="message"   rows="5" class="msg" placeholder='Your Message'></textarea>
        <button type='submit' value='Send' class="submitBtn">Submit</button>
        <div class="links">
        <img src={facebookIcon} alt="Facebook" class="link" />
        <img src={twitterIcon} alt="Twitter" class="link" />
        <img src={youtubeIcon} alt="Youtube" class="link" />
        <img src={instagramIcon} alt="Instagram" class="link" />
        </div>
        </form>
        </div>
    </section>
  )
}

export default Contact