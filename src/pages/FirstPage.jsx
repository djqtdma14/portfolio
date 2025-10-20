import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/FirstPage.scss';
import Project from './Project.jsx';

function FirstPage(){
  return(
    <section className='FirstPage'>
      <nav className='nav-menu'>
        <Link to={Project}>TEST</Link>
        <ul>
          <li><Link></Link></li>
        </ul>
      </nav>
      <span>FRONT END</span>
      <h1>PORTFOLIO</h1>
    </section>
  );
};

export default FirstPage;