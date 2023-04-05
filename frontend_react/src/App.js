import React from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import './App.scss'





const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
