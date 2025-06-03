import { LogoProps } from "@/utils/types";
import Image from "next/image";


const Logo = ({image}:LogoProps) => {
    return (
        <div className="absolute w-[1048px] h-[1048px] top-[-101px] right-[1px] opacity-30">
            <Image src={image}alt="Logo" width={848} height={1048} />
        </div>
    );
};

export default Logo;
