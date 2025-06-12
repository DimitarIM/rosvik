import Image from "next/image";
import { LogoProps } from "@/types/types";

const Logo = ({image,alt}: LogoProps) => {
    return (
        <div className="opacity-30 mt-15">
          <Image src={image} alt={alt} width={704} height={275.12} />
        </div>
    );
};

export default Logo;
