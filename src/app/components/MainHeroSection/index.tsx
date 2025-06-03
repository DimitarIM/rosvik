import Image from "next/image";
import Logo from "../Logo";
import DownloadButton from "../DownloadButton";
import { MainHeroSectionProps } from "@/utils/types";

const MainHeroSection = ({image}: MainHeroSectionProps) => { 
    return(
        <div className="relative w-full h-[600px] md:h-[500px] sm:h-[350px]">
            <Image src={image} alt="herosection image" width={1509} height={1045} />
            <Logo image="/img/rosvik_logo.png"/>
          <div className="absolute w-[958px] md:w-[300px] h-[59px] top-[450px] left-[386px] text-[#D7D3CD4D]  text-[48px] leading-[100%] tracking-[0%] text-center font-labrada font-normal space-x-10" >
               <span>Explore</span>
               <span>Avoid</span>
               <span>Survive</span>
               <DownloadButton/>
          </div>    
        </div>
    );
}

export default MainHeroSection;
