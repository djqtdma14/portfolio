import React from 'react';
import './scss/App.scss';
import FristPage from './pages/FirstPage.jsx';
import Project from './pages/Project.jsx';
import Profile from './pages/Profile.jsx';

function App(){
  return(
    <section className='App'>
      <FristPage />
      <Profile />
      <Project />
    </section>
  );
};

export default App;