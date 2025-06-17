import Logo from "../Logo";
import DownloadButton from "../DownloadButton";
import { MainHeroSectionProps } from "@/types/types";

const MainHeroSection = ({firstText, secondText, thirdText}: MainHeroSectionProps) => { 
    return(
        <div className={`bg-[url('/img/bg_2.png')] bg-no-repeat bg-cover flex flex-col items-center py-3.5 md:p-20 lg:p-40 `}>
            <Logo image='/img/rosvik_logo.png' alt= 'alt'/>
            <div className="flex flex-row gap-5 lg:gap-15 text-center text-[#D7D3CD4D] 
                            lg:text-[36px] sm:text-[40px] md:text-[30px] 
                            font-labrada font-normal lg:mt-[-10px] ">
                <h1>
                    <span>{firstText}</span>
                    <span>{secondText}</span>
                    <span>{thirdText}</span>
                </h1>
            </div>
             <div className="mt-10">
                <DownloadButton image="/btn/main_btn_download.png" alt="Download Button" href="https://futuregames.itch.io/rosvik"/>

            </div>   
         </div>   
    );
}

export default MainHeroSection;
