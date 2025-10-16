import React from 'react';
import './scss/App.scss';
import FristPage from './components/FirstPage.jsx';
import About from './components/About.jsx';

function App(){
  return(
    <section className='App'>
      <FristPage />
      <About />
    </section>
  );
};

export default App;