'use client'
// import { menuItems } from "@/data/data"
import aboutUsImage from '../../../../public/btn/pop_up_abouts_us.png'
import aboutGameImage from '../../../../public/btn/pop_up_about_the_game.png';
import demoImage from '../../../../public/btn/pop_up_demo.png';
import Image from "next/image"
import LanguageSwitch from "../../LanguageSwitch"
import Link from "next/link"
import { FullScreenMenuProps } from "@/types/types"
import headerlogoimage from '../../../../public/btn/logo_3.png'
import closebutton from '../../../../public/btn/close-button_dark.png'
const FullScreenMenu = ({isOpen, onClose}:FullScreenMenuProps ) => {
    if(!isOpen) return null;
    return(
        <nav className='fixed inset-0 z-50 bg-fullscreen-bg text-text flex flex-col items-center justify-center'>
            <div className='absolute top-4 left-6'>
               <Link href='/'>
                 <Image src={headerlogoimage} alt='headerlogo' width={75.39} height={75.39}/>
               </Link>
            </div>
            {/* language switch + close button on the right*/}
            <div className='absolute top-8 right-6 flex items-center space-x-4'>
                <LanguageSwitch/>
                <button onClick={onClose} className="transition duration-200 active:invert active:sepia active:hue-rotate-[10deg] active:saturate-[500%] active:brightness-[1.1] top-4 right-6">
                   <Image src={closebutton}alt='close'/>
                </button>
            </div>
            {/* centered menu */}
            <div className="absolute top-[200px] left-[135px] ">
                <Link href="/about-us" onClick={onClose}>
                    <Image src={aboutUsImage} alt="About Us" width= {130} height={130}/>
                </Link>
            </div>
            <div className='absolute top-[286px] left-[106px]'>
                <Link href="/about-game" onClick={onClose}>
                   <Image src={aboutGameImage} alt="About the Game" width= {200} height={200} />
                </Link>
            </div>
            <div className='absolute top-[376px] left-[165px] '>
                <Link href="/demo" onClick={onClose} >
                   <Image src={demoImage} alt="Demo" width={80} height={80}/>
                </Link>
            </div>
        </nav>
    )
}

export default FullScreenMenu