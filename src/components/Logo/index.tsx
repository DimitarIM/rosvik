import Image from "next/image";
import RosvikLogo from '../../../public/img/rosvik_logo.png'

const Logo = () => {
    return (
        <div className="opacity-30 ">
          <Image src={RosvikLogo} alt="Logo"  />
        </div>
    );
};

export default Logo;
