import Footer from './Footer';

import images from '../data/imagesData';

import '../styles/gallary.css';
import NavChooser from "./NavChooser";
import MobileNavList from './MobileNavList';
import { useContext } from 'react';
import { AppContext } from './Interim';

const Gallary = () => {

    const {showMobileList} = useContext(AppContext);

    return(
        <div className="gallary-cont">
            <NavChooser />
            {showMobileList && <MobileNavList />}
            {!showMobileList && 
                <div>
                    <h1 className="gallary-header">Gallary</h1>
                    <div className="gallary-container">
                        {images.map(img => {
                            return(
                                <img src={img.image} alt={img.alt} className="gallary-image"/>
                            )
                        })}
                    </div>
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Gallary