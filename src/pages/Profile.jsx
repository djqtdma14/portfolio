import React from 'react';
import '../scss/Profile.scss';
import Logos from '../assets/images/Logos.jsx';

function Profile(){

  const prontLogos = Object.values(Logos);

  return(
    <section className='Profile'>
      <h2>PROFILE</h2>
      <div className='about'>
        <section className='about-me'>
          <h3>about me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nulla incidunt eligendi quae maiores cum ea impedit reprehenderit esse unde doloremque? Laboriosam obcaecati eligendi est dolore accusantium voluptatibus perspiciatis. Est!
          </p>
        </section>
        <section className='about-skill'>
          <h3>skills</h3>
          {
            prontLogos.map((logo, idx) => {
              return <img src={logo} alt={logo.keys} key={idx} />
            })
          }
        </section>
      </div>
    </section>
  );
};

export default Profile;