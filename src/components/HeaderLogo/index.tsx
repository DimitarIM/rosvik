import Image from "next/image"
import HeaderLogoImage from '../../../public/btn/logo_btn.svg'
const HeaderLogo = () => {
    return(
        <button>
            <Image src={HeaderLogoImage} alt='headerlogo' width={133} height={133}
            className="transition duration-300 hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.9)] cursor-pointer"/>
        </button>
    )
}

export default HeaderLogo
