import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Classes from './pages/Classes';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="Classes" element={<Classes/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
