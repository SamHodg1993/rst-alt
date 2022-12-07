import Navbar from './Navbar';

import '../styles/about.css';

import RSTOldTruck from '../images/RSTOldTruck.jpg';
import Truckfest from '../images/Truckfest.jpg';
import SeanSiteDelivery from '../images/SeanSiteDelivery.jpg';

function About() {
  return (
    <div className='about-container' id="test3">
        <Navbar />
        <div className='about-section-reverse'>
            <img src={RSTOldTruck} alt="RST Old truck, all nice and shiny!" className='about-image'/>
            <p className='about-text'>Established in 1970 with the original Mr Robert Summers we gained an excellent reputation for offering a total quality transport service. 
                        We have came a long way from then though, pictured here is the first truck in the RST fleet, the Mercades Atkins Roberts pride and joy, 
                        on a sunny day on the lead up to truck show season, if you are lucky, you may see Robert pollishing this beauty up.</p>
        </div>
        <div className='about-section'>
            <img src={Truckfest} alt="TruckFest 2022" className='about-image'/>
            <p className='about-text'>This picture shows a portion of our current fleet lined up at Truckfest Ingliston 2022. We have a modern fleet, we tend to trust 
                    Daf and Mercedes trucks, although if you have a keen eye then you might spot our new Renault T-High or our new Iveco. At RST we are proud of our 
                    working vehicle fleet and love to keep them looking good. Our drivers are enouraged to make their trucks their own and can generally pimp their rides with lights and interior 
                    furnishings so they can live in style and comfort while out down the road.</p>
        </div>
        <div className='about-section-reverse'>
            <img src={SeanSiteDelivery} alt="A typical site delivery at RST" className='about-image'/>
            <p className='about-text'>Our drivers are experinced in many types of feight movement. Here we can see one of our drivers delivering flat roof trusses to a building 
                    site in Glasgow. Out drivers are skilled in all kinds of deliveries, we are always looking for the next challenge here at Summers.</p>
        </div>
    </div>
  )
}

export default About