import React from 'react';
import '../scss/Contact.scss';
import githubImg from '../assets/images/toolLogos/GitHub.svg';

function Contact(){
  return(
    <section className='Contact'>
      <div className='content'>
        <h2>CONTACT</h2>
        <div className='link'>
          <a href='https://github.com/djqtdma14' target='_blank' className='git'>
            <img src={githubImg} alt='github.svg' />
            <span>GitHub</span>
          </a>
        </div>
        <a href='https://github.com/djqtdma14' target='_blank' className='github-fixed'>
          <img src={githubImg} alt='github.svg' />
          <span>GitHub</span>
        </a>
      </div>
      <div className='foot'>
        <span className='image-site'>Image By <a href='https://icons8.com' target='_blank'>https://icons8.com</a>, <a href='https://techicons.dev' target='_blank'>https://techicons.dev</a></span>
      </div>
    </section>
  );
};

export default Contact;