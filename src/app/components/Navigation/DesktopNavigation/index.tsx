import HeaderLogo from '../../HeaderLogo'
import NavigationItems from '../NavigationItems'
import LanguageSwitch from '../../LanguageSwitch'

const DesktopNavigation: React.FC = () => {
    return(
        <nav className='flex items-center justify-center w-full '>
           <HeaderLogo/>
           <NavigationItems/>
           <LanguageSwitch/>
        </nav>

    
    )
}

export default DesktopNavigation