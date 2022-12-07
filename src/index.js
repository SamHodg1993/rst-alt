import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import App from './App'
import Gallary from './components/Gallary';
// import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/gallary" element={<Gallary />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
