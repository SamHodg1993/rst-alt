import TopBar from './TopBar';
import MobileNavbar from './MobileNavbar';

function NavChooser({handleShowMobileNavList}) {
    return (
    <div className='nav-chooser'>
        {window.innerWidth < 900 && <MobileNavbar handleShowMobileNavList={handleShowMobileNavList}/>}
        {window.innerWidth > 900 && <TopBar />}
    </div>
  )
}

export default NavChooser