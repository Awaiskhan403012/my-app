import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; // Your page components
import About from './pages/About';
import Academics from './pages/Acadmics';
import Blog from './pages/Blog-and-news';
import GoverningBody from './pages/GoverningBody';
import Ourteam from './pages/Ourteam';
import Venues from './pages/venues';
import Events from './pages/Events';
import Event from './pages/Event_only';
import './assets/Main.css';
function App() {
  return (
    <>
     <Router>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/governing-body" element={<GoverningBody />} />
        <Route path="/our-team" element={<Ourteam />} />
        <Route path="/venues" element={<Venues />} />
      </Routes>
    </Router>
     

    </>
  );
}
export default App;