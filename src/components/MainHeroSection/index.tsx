import Logo from "../Logo";
import DownloadButton from "../DownloadButton";
import { MainHeroSectionProps } from "@/types/types";

const MainHeroSection = ({firstText, secondText, thirdText}: MainHeroSectionProps) => { 
    return(
        <div className={`bg-[url('/img/bg_2.png')] relative bg-no-repeat bg-center bg-cover flex flex-col items-center pt-[80px] pb-[5rem] md:pt-[170px] md:pb-[10rem]`}>
            <Logo image='/img/rosvik_logo.png' alt='alt' />
            <div className="flex flex-row gap-5 md:gap-15 text-center text-[#D7D3CD4D] text-[26px] md:text-[34px] font-labrada font-normal">
                <span>{firstText}</span>
                <span>{secondText}</span>
                <span>{thirdText}</span>
            </div>
            <div className="mt-10 z-10">
                <DownloadButton image="/btn/main_btn_download.png" alt="Download Button" href="https://futuregames.itch.io/rosvik" />
            </div>
            {/* Overlay */}
            <div className="absolute bottom-0 top-[70%] w-full h-[30%] bg-linear-0 from-[#0c100c] from-0 to-[#0c100c00)]  z-[0] mix-blend-overlay"></div>
        </div>   
    );
}
export default MainHeroSection;
