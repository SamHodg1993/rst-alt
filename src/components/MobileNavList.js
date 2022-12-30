import { Link } from 'react-router-dom';

import '../styles/mobileNavList.css';

const Navbar = () => {
    return(
        <nav className='mobile-nav-list-container'>
            <ul className='mobile-nav-list-container'>
              <Link to='/' className='mobile-nav-list-item'>Home</Link>
              <Link to='/contact' className='mobile-nav-list-item'>Contact</Link>
              <Link to='/about' className='mobile-nav-list-item'>About</Link>
              <Link to='/services' className='mobile-nav-list-item'>Services</Link>
              <Link to='/gallary' className='mobile-nav-list-item'>Gallary</Link>
            </ul>
        </nav>
    )
}

export default Navbar