import Image from "next/image";
import Logo from "../Logo";
import DownloadButton from "../DownloadButton";
import { MainHeroSectionProps } from "@/utils/types";

const MainHeroSection = ({image}: MainHeroSectionProps) => { 
    return(
        <div className={`bg-[url('/img/bg_2.png')] flex flex-col`}>
            <Logo />
            <div className="flex flex-row gap-15 text-center text-[#D7D3CD4D] 
                            lg:text-[46px] sm:text-[40px] md:text-[30px] 
                            font-labrada font-normal lg:mt-[-10px] g:mr-10">
                <span>Explore</span>
                <span>Avoid</span>
                <span>Survive</span>
            </div>
             <div className="">
                <DownloadButton/>
            </div>   
         </div>   
    );
}

export default MainHeroSection;
