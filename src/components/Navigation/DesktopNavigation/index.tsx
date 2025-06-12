import HeaderLogo from '../../HeaderLogo'
import NavigationItems from '../NavigationItems'
import LanguageSwitch from '../../LanguageSwitch'

const DesktopNavigation = () => {
    return(
        <nav className='flex items-center justify-between w-full px-6'>
            <div className="flex items-center space-x-6 ">
            <HeaderLogo image='/btn/logo_btn.svg' alt='header-logo'/>
           </div>
           <div className='flex justify-end space-x-6 ml-auto'>           
            <NavigationItems/>
            <LanguageSwitch/>
           </div>
        </nav>
    )
}

export default DesktopNavigation