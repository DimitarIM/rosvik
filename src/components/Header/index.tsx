
import DesktopNavigation from "../Navigation/DesktopNavigation"
import MobileNavigation from "../Navigation/MobileNavigation"

const Header = () => {
    return(
      <header className="w-full flex top-0 bg-transparent px-6 py-4" >
        <div className="hidden md:flex items-center space-x-6 grow" >
        <DesktopNavigation/>
        </div>
        {/* mobile navigation */}
        <div className="md:hidden flex items-center space-x-4">
            <MobileNavigation/>
        </div>
      </header>
    )
}

export default Header