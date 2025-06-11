import HeaderLogo from '../../HeaderLogo'
import NavigationItems from '../NavigationItems'
import LanguageSwitch from '../../LanguageSwitch'

const DesktopNavigation: React.FC = () => {
    return(
        <nav className='flex items-center justify-between w-full px-6'>
            <div className="flex items-center space-x-6 ">
            <HeaderLogo/>
           </div>
           <div className='flex justify-end space-x-6 ml-auto'>           
            <NavigationItems/>
            <LanguageSwitch/>
           </div>
        </nav>
    )
}

export default DesktopNavigation