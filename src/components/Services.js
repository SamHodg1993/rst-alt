import { FaWarehouse, FaTruckMoving, FaRoad, FaMap } from 'react-icons/fa';

import '../styles/services.css';

import Footer from './Footer';
import NavChooser from './NavChooser';
import MobileNavList from './MobileNavList';
import { useContext } from 'react';
import { AppContext } from './Interim';


function Services() {

    const {showMobileList} = useContext(AppContext);

  return (
      <div className='serv-cont' id="test2">
        <NavChooser />
        {showMobileList && <MobileNavList />}
        {!showMobileList && 
            <div>
                <h1 className='services-header'>Services</h1>
                <div className="serv-item-container">
                    <div className='serv-item'>
                        <FaWarehouse className='icon' color='rgb(18,177,227)'/>
                        <p className='serv-text'>Storage of all goods, from pallets to packs of timber and brick.</p>
                    </div>
                    <div className='serv-item'>
                        <FaMap className='icon' color='rgb(18,177,227)'/>
                        <p className='serv-text'>We offer a complete delivery service accross the whole of the United Kingdom. Need something extra? Give us a quick call and we can see what we can do accommodate you!</p>
                    </div>
                    <div className='serv-item'>
                        <FaTruckMoving className='icon' color='rgb(18,177,227)'/>
                        <p className='serv-text'>The highest standard of Class 1 and Class 2 drivers. Whatever the load, Summers Transport have your back.</p>
                    </div>
                    <div className='serv-item'>
                        <FaRoad className='icon' color='rgb(18,177,227)'/>
                        <p className='serv-text'>Delivery of all good via road transport in accordance with the best practices defined by the Road Haulage Association.</p>
                    </div>
                </div>
                <Footer />
            </div>
        }
    </div>
  )
}

export default Services