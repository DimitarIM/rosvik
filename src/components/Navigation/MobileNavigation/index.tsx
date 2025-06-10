'use client'
import LanguageSwitch from "../../LanguageSwitch"
import burgerLight from "../../../../public/btn/menu-button_light.png"
import burgerDark from "../../../../public/btn/menu-button_dark.png"
import HeaderLogo from "../../HeaderLogo"
import Image from "next/image"
import { useState } from "react"
import FullScreenMenu from "../FullScreenMenu"

const MobileNavigation: React.FC = () => {
     const [open, setOpen] = useState(false)

    return(
      <div className="flex items-center space-x-4 " >
         <HeaderLogo/>
         <LanguageSwitch/>
         {/* Burger Menu Button */}
        <button onClick={()=> setOpen(!open)} className='justify-center'>
        <Image 
           src={open ? burgerDark : burgerLight}
           alt= 'menu'
           width={40}
           height={29}/>
        </button>
        {/* Full-screen menu */}
        <FullScreenMenu isOpen={open} onClose={()=> setOpen(false)}/>    
      </div>
    )
}

export default MobileNavigation