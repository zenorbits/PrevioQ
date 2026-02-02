import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UploadForm from './components/UploadForm';
import About from './userpage/About';
import Lenis from '@studio-freight/lenis';
import Userpage from './userpage/Userpage';
import CommunityPage from './userpage/CommunityPage';
import Contacts from './userpage/Contacts';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3,   // scroll speed
      smooth: true,    // enable smooth scrolling
      easing: (t) => t, // easing function
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // optional cleanup
    return () => {
      // lenis.destroy(); // if you want to stop it on unmount
    };
  }, []);

  return (
    <div className="font-mono">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;