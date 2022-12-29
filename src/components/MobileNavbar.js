import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

import logo from '../images/logo.png';

import '../styles/mobileNavbar.css'

export default function MobileNavbar ({handleShowMobileNavList}) {
  return(
    <IconContext.Provider value={{color:'rgba(32,33,36,0.7)', size:'8rem'}}>
      <div className='mobile-nav-cont'>
        <img src={logo} alt="RST logo" className="logo" />
          <GiHamburgerMenu className='hamburger-icon' onClick={() => {handleShowMobileNavList()}} />
      </div>
      </IconContext.Provider>
  )
}
