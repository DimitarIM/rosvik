import Image from "next/image"
import HeaderLogoImage from '../../../public/btn/logo_2.png'
const HeaderLogo = () => {
    return(
        <button className='opacity-30 hover:bg-[var(--color-sunny)]' >
            <Image src={HeaderLogoImage} alt='headerlogo' width={133} height={133}/>

        </button>
    )
}

export default HeaderLogo