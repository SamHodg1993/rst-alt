import Navbar from "./Navbar";
import Footer from './Footer';

import images from '../data/imagesData';

import '../styles/gallary.css';

const Gallary = () => {
    return(
        <div>
            <Navbar />
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
    )
}

export default Gallary