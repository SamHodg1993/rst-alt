import { Fade, Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import Navbar from "./components/Navbar";
import reviewsData from './data/reviewsData';

import './styles/app.css';
import './styles/slideshow.css';
import 'react-slideshow-image/dist/styles.css';

import SeanTrussHighlands from './images/SeanTrussHighlands.jpg';
import WhiskyCollection from './images/WhiskyCollection.jpg';
import TrussAndHill from './images/TrussAndHill.jpg';
import Truckfest from './images/Truckfest.jpg';
import SeanTrussSite from './images/SeanTrussSite.jpg';
import SeanSunset from './images/SeanSunset.jpg';
import SeanTimber from './images/SeanTimber.jpg';
import servicesImage from './images/tile-images/Gerrytrusssite.jpg';
import aboutImage from './images/tile-images/RSTOldTruck.jpg';
import fleetImage from './images/tile-images/Lineoftrucks.jpg';
import careersImage from './images/tile-images/GerrySolo.jpg';
import testimonialsImage from './images/tile-images/FSE.jpg';
import accoladesImage from './images/tile-images/SeanNewTruckShow.jpg';
import Footer from './components/Footer';

const slideshowImages = [SeanTrussHighlands, 
  WhiskyCollection, 
  TrussAndHill, 
  Truckfest, 
  SeanTrussSite, 
  SeanSunset,
  SeanTimber
];


function App() {

  return (
    <div className="homepage-container">
      {/* <Navbar /> */}
      <div className="homepage-slider">
        <Fade>
          {slideshowImages.map(img => {
            return(
              <div className='each-slide-effect' key={slideshowImages.indexOf(img)}>
                <div>
                  <img src={img} alt="background" className='slideshow-image'/>
                </div>
              </div>
            )
          })}
        </Fade>
      </div>
      <div className='home-info'>
        <h2 className='intro-main'>Robert Summers Transport for all your haulage needs</h2>
        <div className='hr'></div>
        <p className='intro-details'>At RST, we value our customers above all else, dedicated to providing the
          most proffesional haulage service around, we cover the entire UK </p>
      </div>
      <div className='tile-wrapper'>
        <Link to="/services" className='section-tiles'>
          <h2 className='tile-header'>Services</h2>
          <img src={servicesImage} alt="background" className='image-tile'/>
        </Link>
        <Link to="/about" className="section-tiles">
          <h2 className='tile-header'>About us</h2>
          <img src={aboutImage} alt="background" className='image-tile'/>
        </Link>
        <Link to="/gallary" className="section-tiles">
          <h2 className='tile-header'>Our Fleet</h2>
          <img src={fleetImage} alt="background" className='image-tile'/>
        </Link>
        <Link to="/" className='section-tiles'>
          <h2 className='tile-header'>Careers</h2>
          <img src={careersImage} alt="background" className='image-tile'/>
        </Link>
        <Link to="/" className='section-tiles'>
          <h2 className='tile-header'>Testimonials</h2>
          <img src={testimonialsImage} alt="background" className='image-tile'/>
        </Link>
        <Link to="/" className='section-tiles'>
          <h2 className='tile-header'>Accolades</h2>
          <img src={accoladesImage} alt="background" className='image-tile'/>
        </Link>
      </div>
      <Slide>
        {reviewsData.map(review => {
          return(
            <div key={review.id} className="review-wrapper">
              <h3 className='review-header'>{review.company}</h3>
              <p className='review-main'><RiDoubleQuotesL />{review.review}<RiDoubleQuotesR /></p>
            </div>
          )
        })}
      </Slide>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  )
}

export default App
