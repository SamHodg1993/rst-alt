import logo from '../images/logo-removebg.png';
import { BsFacebook, BsLinkedin, BsYoutube, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import Navbar from './Navbar';

import '../styles/topBar.css'

function TopBar() {
  return (
    <div className='tb-container'>
        <div className="top-section">
            <div className="tb-contact">
                <p><BsFillTelephoneFill size={20} className="tb-contact-icon"/>01592 713 172</p>
                <p><MdEmail size={20} className="tb-contact-icon"/>traffic@robertsummerstransport.co.uk</p>
            </div>
            <div className="tb-socials">
                <BsFacebook size={20}  className='tb-social-item' href='https://www.facebook.com/profile.php?id=100063662462350'/>
                <BsLinkedin size={20}  className='tb-social-item' href='https://www.linkedin.com/company/robert-summers-transport-limited/about/'/>
                <BsYoutube  size={20} className='tb-social-item' href='https://www.youtube.com/results?search_query=robert+summers+transport'/>
            </div>
        </div>
        <div className="main-section">
            <div className="tb-logo-cont">
                <img src={logo} alt="" className='tb-logo'/>
            </div>
            <div className="tb-details">
                <div className="line"></div>
                <p className='tb-details-text'>Delivering top Logistical solutions since 1801! Thats how old Davie is...</p>
                <div className="line"></div>
                <Navbar />
            </div>
        </div>
    </div>
  )
}

export default TopBar