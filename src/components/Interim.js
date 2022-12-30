import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import App from '../App';
import About from './About';
import Services from './Services';
import Gallary from './Gallary';
import Contact from './Contact';
import { UserContext } from '../context/UserContext';
// import ErrorPage from './components/ErrorPage';



function Interim() {

    const [showMobileNavList, setShowMobileNavList] = useState(false);

  return (
    <div>
        <BrowserRouter>
            <ScrollToTop />
            <UserContext.Provider>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/gallary" element={<Gallary />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    </div>
  )
}

export default Interim