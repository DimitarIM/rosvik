import { LogoProps } from "@/utils/types";
import Image from "next/image";


const Logo = ({image}:LogoProps) => {
    return (
        <div className="absolute w-[250px] sm:w-[650px] md:w-[1048px] 
  h-[320px] sm:h-[650px] md:h-[1048px] 
  mt-[70px] sm:top-[-101px] md:top-[-160px] 
  left-[210px] sm:right-[1px] md:right-[46px] opacity-30 ">
            <Image src={image}alt="Logo" width={848} height={1048} />
        </div>
    );
};

export default Logo;
