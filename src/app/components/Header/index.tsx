import HeaderLogo from "../HeaderLogo"
import DesktopNavigation from "../Navigation/DesktopNavigation"

const Header = () => {
    return(
      <header className="header bg-transparent flex" >
        <DesktopNavigation/>
      </header>
    )
}

export default Header