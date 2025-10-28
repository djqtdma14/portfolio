import React, { useRef } from 'react';
import './scss/App.scss';
import FristPage from './pages/FirstPage.jsx';
import Project from './pages/Project.jsx';
import Profile from './pages/Profile.jsx';
import Contact from './pages/Contact.jsx';

function App(){

  // https://inthedev.tistory.com/27 - 스크롤 기능 사용
  const scrollRef = useRef([]);
  const handleScrollView = (e) => {
    const name = e.target.innerText;
    const pages = {
      main : 0,
      profile : 1,
      project : 2,
      contact : 3
    };
    scrollRef.current[pages[name]].scrollIntoView({behavior:'smooth'});
  };

  return(
    <section className='App'>
      <section className='Navbar' onClick={handleScrollView}>
        <span className='main menu'>main</span>
        <nav className='sidebar'>
          <ul>
            <li className='profile menu'>profile</li>
            <li className='project menu'>project</li>
            <li className='contact menu'>contact</li>
          </ul>
        </nav>
      </section>
      <div ref={(el) => (scrollRef.current[0] = el)}>
        <FristPage />
      </div>
      <div ref={(el) => (scrollRef.current[1] = el)}>
        <Profile />
      </div>
      <div ref={(el) => (scrollRef.current[2] = el)}>
        <Project />
      </div>
      <div ref={(el) => (scrollRef.current[3] = el)}>
        <Contact />
      </div>
    </section>
  );
};

export default App;