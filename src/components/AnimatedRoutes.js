import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {Routes, Route,useLocation} from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import About from './About';


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
<>
  <AnimatePresence>
    <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={< Home/>}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/project' element={<Project/>}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
    </Routes>
    </AnimatePresence>
</>
  );
};

export default AnimatedRoutes;
