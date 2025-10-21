import React, { useRef } from 'react';
import './scss/App.scss';
import FristPage from './pages/FirstPage.jsx';
import Project from './pages/Project.jsx';
import Profile from './pages/Profile.jsx';

function App(){
  // https://inthedev.tistory.com/27 - 스크롤 기능
  const scrollRef = useRef([]);
  const handleScrollView = (e) => {
    const name = e.target.innerText;
    const pages = {
      main: 0,
      profile: 1,
      project: 2,
    };
    scrollRef.current[pages[name]].scrollIntoView({ behavior:'smooth'});
  };

  return(
    <section className='App'>
      <div className='Navbar' onClick={handleScrollView}>
        <span className='main'>main</span>
        <nav>
          <span className='profile'>profile</span>
          <span className='project'>project</span>
        </nav>
      </div>
      <div ref={(el) => (scrollRef.current[0] = el)}>
        <FristPage />
      </div>
      <div ref={(el) => (scrollRef.current[1] = el)}>
        <Profile />
      </div>
      <div ref={(el) => (scrollRef.current[2] = el)}>
        <Project />
      </div>
    </section>
  );
};

export default App;