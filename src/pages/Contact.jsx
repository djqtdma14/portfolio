import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import '../scss/Contact.scss';
import githubImg from '../assets/images/toolLogos/GitHub.svg';

// 사용한 이미지 사이트
// https://icons8.com
// https://techicons.dev

function Contact(){
  return(
    <section className='Contact'>
      <div className='content'>
        <h2>CONTACT</h2>
        <div className='link'>
          <a href='https://github.com/djqtdma14/portfolio' target='_blank' className='git'>
            <img src={githubImg} alt='github.svg' />
            <span className='con-msg'>GitHub &#40;portfolio&#41;</span>
          </a>
          <span className='mail'>
            <MdOutlineEmail className='MdEmail' />
            <span className='con-msg'>mail : jhram7475@gmail.com</span>
          </span>
        </div>
        <a href='https://github.com/djqtdma14' target='_blank' className='github-fixed'>
          <img src={githubImg} alt='github.svg' />
          <span>GitHub</span>
        </a>
      </div>
      <div className='foot'>
        <div className='image-site'>
          <span>Image By </span>
          <a href='https://icons8.com' target='_blank'>icons8, </a>
          <a href='https://techicons.dev' target='_blank'>techicons, </a>
          <a href='https://react-icons.github.io/react-icons' target='_blank'>react-icons</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;