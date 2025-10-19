import React from 'react';
import '../scss/Profile.scss';
import FrontLogos from '../assets/images/FrontLogos.jsx';

function Profile(){

  const frontLogos = Object.values(FrontLogos);

  return(
    <section className='Profile'>
      <h2>PROFILE</h2>
      <div className='about'>
        <section className='about-me'>
          <h3>about me</h3>
          <p>
            실전과 부딪히며 배우는 <span>프론트엔드 개발자 전하람</span>입니다.
          </p>
        </section>
        <section className='about-skill'>
          <h3>skills</h3>
          <div className='logos'>
            {
              frontLogos.map((logo, idx) => {
                return <img src={logo} alt={logo.keys} key={idx} />
              })
            }
          </div>
        </section>
      </div>
    </section>
  );
};

export default Profile;