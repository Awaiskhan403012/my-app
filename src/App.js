import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/Main.css';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Acadmics'));
const Blog = lazy(() => import('./pages/Blog-and-news'));
const GoverningBody = lazy(() => import('./pages/GoverningBody'));
const Ourteam = lazy(() => import('./pages/Ourteam'));
const Venues = lazy(() => import('./pages/venues'));
const Events = lazy(() => import('./pages/Events'));
const Event = lazy(() => import('./pages/Event_only'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div><div className='loader'><div className='loader-img'><img className='img-l' src='https://acpkhi.com/logo.png' alt='loader'></img></div></div></div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
