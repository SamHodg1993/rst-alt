import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

function NavChooser({handleShowMobileNavList}) {
    return (
    <div>
        {window.innerWidth < 900 && <MobileNavbar handleShowMobileNavList={handleShowMobileNavList}/>}
        {window.innerWidth > 900 && <Navbar />}
    </div>
  )
}

export default NavChooser