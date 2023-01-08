import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';

import logo from '../images/logo-removebg.png';

import '../styles/mobileNavbar.css'
import { AppContext } from './Interim';

export default function MobileNavbar () {

  const {showMobileList, setShowMobileList} = useContext(AppContext);

  return(
    <div>
      Hi there
    </div>
  )
}


// -------------------------- Removed Code ---------------------------- 

{/* <IconContext.Provider value={{color:'rgba(32,33,36,0.7)', size:'8rem'}}>
      <div className='mobile-nav-cont'>
        <img src={logo} alt="RST logo" className="logo" />
          <GiHamburgerMenu className='hamburger-icon' onClick={() => {showMobileList ? setShowMobileList(false) : setShowMobileList(true)}} />
      </div>
      </IconContext.Provider> */}