import Image from "next/image";
import Logo from "../Logo";
import DownloadButton from "../DownloadButton";
import { MainHeroSectionProps } from "@/utils/types";

const MainHeroSection = ({image}: MainHeroSectionProps) => { 
    return(
        <div className="relative w-full h-[600px] md:h-[500px] sm:h-[350px]">
            <Image src={image} alt="herosection image" width={1509} height={1045} />
            <Logo image="/img/rosvik_logo.png"/>
  <div className="absolute w-full mt-[15px] sm:top-[300px] md:top-[450px] flex flex-col items-center px-4 text-center">
  {/* Text Row */}
  <div className="flex flex-row gap-15 text-[#D7D3CD4D] 
                  text-[36px] sm:text-[40px] md:text-[48px] 
                  font-labrada font-normal mt-[-10px] mr-10">

           {/* <div className="absolute w-[958px] md:w-[768px] h-[59px] md:h-[29px] top-[450px] md:top-[255px] md:left-[20px] left-[386px] text-[#D7D3CD4D] md:text-[40px] text-[48px] leading-[100%] tracking-[0%] text-center font-labrada font-normal space-x-10" >  */}
               <span>Explore</span>
               <span>Avoid</span>
               <span>Survive</span>
               <div className=" mt-25 ml-[-490px]">
               <DownloadButton/>
               </div>
           </div>    
          </div>    
        </div>
    );
}

export default MainHeroSection;
