import { Link } from 'react-router-dom';

import '../styles/mobileNavList.css';
import { useContext } from 'react';
import { AppContext } from './Interim';

const Navbar = () => {

    const {setShowMobileNavList} = useContext(AppContext);

    const handleNavClick = () => {
        setShowMobileNavList(false);
        <Link to={'/about'}/>
    }

    return(
        <nav className='mobile-nav-list-container'>
            <ul className='mobile-nav-list-container'>
              <Link to='/' className='mobile-nav-list-item' onClick={() => setShowMobileNavList(false)}>Home</Link>
              <Link to='/contact' className='mobile-nav-list-item' onClick={() => setShowMobileNavList(false)}>Contact</Link>
              <Link to='/about' className='mobile-nav-list-item' onClick={() => handleNavClick()}>About</Link>
              <Link to='/services' className='mobile-nav-list-item' onClick={() => setShowMobileNavList(false)}>Services</Link>
              <Link to='/gallary' className='mobile-nav-list-item' onClick={() => setShowMobileNavList(false)}>Gallary</Link>
            </ul>
        </nav>
    )
}

export default Navbar