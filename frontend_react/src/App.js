import React from 'react';
import { Header, About, Projects, Skills, Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};
export default App;
