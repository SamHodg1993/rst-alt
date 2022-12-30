import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import App from '../App';
import About from './About';
import Services from './Services';
import Gallary from './Gallary';
import Contact from './Contact';
// import ErrorPage from './components/ErrorPage';


export const AppContext = createContext(null);

function Interim() {

    const [ showMobileList, setShowMobileList ] = useState(false);

  return (
    <div>
        <BrowserRouter>
            <ScrollToTop />
                <AppContext.Provider value={{ showMobileList, setShowMobileList}}>
                    <Routes>
                        <Route path="/" element={<App />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/services" element={<Services />}></Route>
                        <Route path="/gallary" element={<Gallary />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                    </Routes>
                </AppContext.Provider>
        </BrowserRouter>
    </div>
  )
}

export default Interim