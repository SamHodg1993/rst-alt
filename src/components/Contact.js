import Navbar from './Navbar';

import '../styles/contact.css';

import FiMail from '../images/icons/envelope.svg';
import FiPrinter from '../images/icons/printer.svg';
import FiHome from '../images/icons/house.svg';
import FiPhoneCall from '../images/icons/telephone.svg';
import Footer from './Footer';

function Contact() {

  const screenWidth = window.innerWidth;

  return (
    <div className='contact-cont'>
      <Navbar />
      <h1 className='contact-header'>Contact</h1>
      <div className='contact-container' id="test4">
        <div className='contact-item'>
          <img src={FiHome} alt="home icon"/>
          <h4>Address</h4>
          <ul className='list'>
            <li>Robert Summers Transport Ltd</li>
            <li>Tollpark Transport Center</li>
            <li>Station Rd</li>
            <li>Leven</li>
            <li>Fife</li>
            <li>KY8 1JH</li>
          </ul>
        </div>
        <div className='contact-item'>
          <img src={FiPhoneCall} alt="phone icon" />
          <h4>Phone</h4>
          <ul className='list'>
            <li>01592 713 172</li>
          </ul>
        </div>
        <div className='contact-item'>
          <img src={FiPrinter} alt="printer icon"/>
          <h4>Fax</h4>
          <ul className='list'>
            <li>01592 715 046</li>
          </ul>
        </div>
        <div className='contact-item'>
          <img src={FiMail} alt="contact icon"/>
          <h4>E-Mail</h4>
          <ul className='list'>
            <p>
                <a href='mailto:traffic@robertsummerstransport.co.uk'>traffic@robertsummerstransport.co.uk</a>
            </p>
          </ul>
        </div>
        <div className='contact-row contact-row-1'>
          <div className='google-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.0677793825294!2d-3.0380219709357155!3d56.17322116872863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48864cd19e5b26d7%3A0x20a160f4f7fb2ae7!2sRobert%20Summers%20Transport%20Ltd!5e0!3m2!1sen!2suk!4v1670162472822!5m2!1sen!2suk" 
              width={screenWidth-20} 
              height="450" 
              style={{border:"0"}} 
              allowFullScreen={true} 
              loading="lazy" 
              title="google-map-iframe"
              >
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact