'use client'
import { menuItems } from "@/data"
import Image from "next/image"
import LanguageSwitch from "../../LanguageSwitch"
import Link from "next/link"
import { FullScreenMenuProps } from "@/types/types"
import headerlogoimage from '../../../../public/btn/logo_3.png'
import closebutton from '../../../../public/btn/close-button_dark.png'
const FullScreenMenu = ({isOpen, onClose}:FullScreenMenuProps ) => {
    if(!isOpen) return null;
    return(
        <nav className='fixed inset-0 bg-black text-text flex flex-col items-center justify-center'>
            <div className='absolute top-4 left-6'>
               <Link href='/'>
                 <Image src={headerlogoimage} alt='headerlogo' width={133} height={133}/>
               </Link>
            </div>
            {/* language switch + close button on the right*/}
            <div className='absolute top-4 right-6 flex items-center space-x-4'>
                <LanguageSwitch/>
                <button onClick={onClose}>
                   <Image src={closebutton}alt='close'/>
                </button>
            </div>
            {/* centered menu */}
            <div className="flex flex-col space-y-6 text-lg text-amber-50">
                {menuItems.map((item, index) => (
                    <div key= {index}> 
                       <Link href={item.path} onClick={onClose}>
                         {item.name}
                       </Link>
                    </div>
                ))}

            </div>
        </nav>
    )
}

export default FullScreenMenu