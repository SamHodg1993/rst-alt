import Navbar from './Navbar';

import '../styles/contact.css';

import FiMail from '../images/icons/envelope.svg';
import FiPrinter from '../images/icons/envelope.svg';
import FiHome from '../images/icons/house.svg';
import FiPhoneCall from '../images/icons/telephone.svg';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='contact-container' id="test4">
        <div className='contact-item'>
          <img src={FiHome} alt="home icon"/>
          <p className='text-center contact-address'>Robert Summers Transport Ltd<br/>
              Tollpark Transport Center <br/>
              Station Rd <br/>
              Leven <br />
              Fife <br />
              KY8 1JH
          </p>
        </div>
        <div className='contact-item'>
          <img src={FiPhoneCall} alt="phone icon" />
          <p>01592 713 172</p>
        </div>
        <div className='contact-item'>
          <img src={FiPrinter} alt="printer icon"/>
          <p>01592 715 046</p>
        </div>
        <div className='contact-item'>
          <img src={FiMail} alt="contact icon"/>
          <p>
              <a href='mailto:traffic@robertsummerstransport.co.uk'>traffic@robertsummerstransport.co.uk</a>
          </p>
        </div>
        <div className='contact-row contact-row-1'>
          <div className='google-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.0677793825294!2d-3.0380219709357155!3d56.17322116872863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48864cd19e5b26d7%3A0x20a160f4f7fb2ae7!2sRobert%20Summers%20Transport%20Ltd!5e0!3m2!1sen!2suk!4v1670162472822!5m2!1sen!2suk" 
              width="600" 
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
    </div>
  )
}

export default Contact