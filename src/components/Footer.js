
import '../styles/footer.css'

const Footer = () => {
    return(
    <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-main'>
            <div className='footer-main-sect'>
              <h3 className='footer-heading'>Contact us</h3>
              <div className="hr"></div>
              <ul className='footer-list'>
                <li>Phone: 01592 713 172</li>
                <li>Address:
                    <ul>
                        <ul>Robert Summers Transport Ltd</ul>
                        <ul>Tollpark Transport Centre</ul>
                        <ul>Station Rd</ul>
                        <ul>Leven</ul>
                        <ul>Fife</ul>
                        <ul>KY8 1JH</ul>
                    </ul>
                </li>
                <li>E-Mail: <a className="mail-to" href='mailto:traffic@robertsummerstransport.co.uk'>traffic@robertsummerstransport.co.uk</a></li>
                <li>Fax: 01592 715 046</li>
              </ul>
            </div>
            <div className='footer-main-sect'>
              <h3 className='footer-heading'>Services</h3>
              <div className="hr"></div>
              <ul className='footer-list'>
                <li>UK wide logistics solutions</li>
                <li>Various trailer type hire</li>
                <li>Shipping and Freight Managament</li>
                <li>Raw material to site deliveries</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;