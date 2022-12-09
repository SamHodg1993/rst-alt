import { Link } from 'react-router-dom';

import '../styles/navbar.css'

const NAV_DATA = ['Home', 'Contact', 'About', 'Services', 'Gallary'];

const Navbar = () => {
    return(
        <nav className='nav-container'>
            <div></div>
            <div className='nav'>
                {NAV_DATA.map(page => {
                    if(page === 'Home') {
                        return(
                            <div className="link-container" key={NAV_DATA.indexOf(page)}>
                                <Link to={`/`} className="link">
                                    Home
                                </Link >
                            </div>
                        )
                    } else {
                        return(
                            <div className="link-container" key={NAV_DATA.indexOf(page)}>
                                <Link to={`/${page.toLowerCase()}`} className="link">
                                    {page}
                                </Link >
                            </div>
                        )
                    }
                })}
            </div>
        </nav>
    )
}

export default Navbar