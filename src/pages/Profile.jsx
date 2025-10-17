import React from 'react';
import '../scss/Profile.scss';
import Logos from '../assets/images/Logos.jsx';

function Profile(){

  const prontLogos = Object.values(Logos);

  return(
    <section className='About'>
      <h2>PROFILE</h2>
      <div className='about-me'>
        <h3>about me</h3>
      </div>
      <div className='about-skill'>
        <h3>skills</h3>
        <span>
          {
            prontLogos.map((logo, idx) => {
              return <img src={logo} alt={logo.keys} key={idx} />
            })
          }
        </span>
      </div>
    </section>
  );
};

export default Profile;