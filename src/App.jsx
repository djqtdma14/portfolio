import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/App.scss';
import FristPage from './pages/FirstPage.jsx';
import Project from './pages/Project.jsx';
import Profile from './pages/Profile.jsx';

function App(){
  return(
    <Router>
      <section className='App'>
        <FristPage />
        <Profile />
        <Project />
      </section>
    </Router>
  );
};

export default App;