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
      <Navbar />
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
      </div>
      <div className='tile-wrapper'>
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
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-top'>
            <h3>Robert Summers Transport</h3>
            <hr />
          </div>
          <div className='footer-main'>
            <div className='vertical-rule'></div>
            <div className='footer-main-sect'>
              <h3 className='footer-heading'>About us</h3>
              <p>Established in 1993 RST is a family owned company who prides itself in providing the best service in Fife!</p>
            </div>
            <div className='vertical-rule'></div>
            <div className='footer-main-sect'>
              <h3 className='footer-heading'>Contact us</h3>
              <ul className='footer-list'>
                <li>Phone: 01592 713 172</li>
                <li>Address:<br /> Robert Summers Transport Ltd <br />
                              Tollpark Transport Centre<br />
                              Station Rd<br />
                              Leven<br />
                              Fife<br />
                              KY8 1JH<br />
                </li>
                <li>E-Mail: <a href='mailto:traffic@robertsummerstransport.co.uk'>traffic@robertsummerstransport.co.uk</a></li>
                <li>Fax: 01592 715 046</li>
              </ul>
            </div>
            <div className='vertical-rule'></div>
            <div className='footer-main-sect'>
              <h3 className='footer-heading'>Services</h3>
              <ul className='footer-list'>
                <li>UK wide logistics solutions</li>
                <li>Various trailer type hire</li>
                <li>Shipping and Freight Managament</li>
                <li>Raw material to site deliveries</li>
              </ul>
            </div>
            <div className='vertical-rule'></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
