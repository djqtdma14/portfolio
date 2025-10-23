import React from 'react';
import '../scss/Contact.scss';
import github from '../assets/images/toolLogos/GitHub.svg';

function Contact(){
  return(
    <section className='Contact'>
      <h2>CONTACT</h2>
      <div className='git'>
        <a href='https://github.com/djqtdma14' target='_blank'>
          <img src={github} alt='github.svg' />
          <span>깃허브 주소</span>
        </a>
      </div>
      <a href='https://github.com/djqtdma14' target='_blank' className='github-link'>
        <img src={github} alt='github.svg' />
        <span>GitHub</span>
      </a>
    </section>
  );
};

export default Contact;