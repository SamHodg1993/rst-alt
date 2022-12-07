import Navbar from "./Navbar";

import images from '../data/imagesData';

import '../styles/gallary.css';

const Gallary = () => {
    return(
        <div>
            <Navbar />
            <div className="gallary-container">
                {images.map(img => {
                    return(
                        <img src={img.image} alt={img.alt} className="gallary-image"/>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallary

// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';

// import images from './images'

// function Gallery() {
//   return (
//     <div className='gallary-container'>
//       <Carousel fade>
//         {images.map(e => {
//           return(
//             <Carousel.Item>
//           <img
//             className="d-block image"
//             src={e.image}
//             alt={e.alt}
//             loading="lazy"
//           />
//           <Carousel.Caption>
//             <h3>{e.alt}</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//           )
//         })}
//       </Carousel>
//     </div>
//   )
// }

// export default Gallery