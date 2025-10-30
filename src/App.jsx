import React, { useRef } from 'react';
// import styled from 'styled-component';
import { RiDeleteBack2Line, RiMenu3Line } from 'react-icons/ri';
import './scss/App.scss';
import FristPage from './pages/FirstPage.jsx';
import Project from './pages/Project.jsx';
import Profile from './pages/Profile.jsx';
import Contact from './pages/Contact.jsx';

function App(){

// https://inthedev.tistory.com/27 - 클릭한 텍스트와 같은 이름의 페이지로 스크롤 이동
  const scrollRef = useRef([]);
  const handleScrollView = (e) => {
    const name = e.target.innerText;
    const pages = {
      home : 'FirstPage',
      profile : 'Profile',
      project : 'Project',
      contact : 'Contact'
    };
    name
    ? scrollRef.current[pages[name]].scrollIntoView({behavior:'smooth'})
    : e.preventDefault();
  };

// 메뉴 바 여는 기능
  const openMenuHandler = () => {
    
  };
// 메뉴 바 닫는 기능
  const closeMenuHandler = () => {
    console.log('close menu');
  };

  return(
    <section className='App'>
      <section className='Navbar'>
        <span className='logo menu' onClick={handleScrollView}>main</span>
        <RiMenu3Line className='RiMenu' onClick={openMenuHandler} />
        <nav className='sidebar'>
          <RiDeleteBack2Line className='RiBack' onClick={closeMenuHandler} />
          <ul>
            <li className='home menu ' onClick={handleScrollView}>home</li>
            <li className='profile menu ' onClick={handleScrollView}>profile</li>
            <li className='project menu ' onClick={handleScrollView}>project</li>
            <li className='contact menu ' onClick={handleScrollView}>contact</li>
          </ul>
        </nav>
      </section>
      <div ref={(el) => (scrollRef.current['FirstPage'] = el)}>
        <FristPage />
      </div>
      <div ref={(el) => (scrollRef.current['Profile'] = el)}>
        <Profile />
      </div>
      <div ref={(el) => (scrollRef.current['Project'] = el)}>
        <Project />
      </div>
      <div ref={(el) => (scrollRef.current['Contact'] = el)}>
        <Contact />
      </div>
    </section>
  );
};

export default App;