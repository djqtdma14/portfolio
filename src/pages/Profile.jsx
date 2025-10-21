import React from 'react';
import '../scss/Profile.scss';
import LanguageLogos from '../components/LanguageLogos.jsx';
import ToolsLogos from '../components/ToolsLogos.jsx';

function Profile(){

  const language = Object.values(LanguageLogos);
  const tools = Object.values(ToolsLogos);

  return(
    <section className='Profile'>
      <h2>PROFILE</h2>
      <div className='about'>
        <section className='about-me'>
          <h3>about me</h3>
          <p>
            <span>프론트엔드 개발자 전하람</span>입니다.
          </p>
        </section>
        <section className='about-skill'>
          <div className='language logos'>
            <h3>Language</h3>
            {
              language.map((logo, idx) => {
                return <img src={logo} alt={logo.keys} key={idx} />
              })
            }
          </div>
          <div className='tools logos'>
            <h3>Tools</h3>
            {
              tools.map((logo, idx) => {
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