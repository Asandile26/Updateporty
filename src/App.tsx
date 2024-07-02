import {} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Intro from './component/Intro';
import About from './component/About';
import Projects from './component/Project';
import Resume from './component/Resume';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Skills from './component/Skills';
import Testimonials from './component/Testimonials';

function App() {
  return (
    <> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonials" element={<Testimonials/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

