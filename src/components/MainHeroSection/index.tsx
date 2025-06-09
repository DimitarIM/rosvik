import Logo from "../Logo";
import DownloadButton from "../DownloadButton";

const MainHeroSection = () => { 
    return(
        <div className={`bg-[url('/img/bg_2.png')] flex flex-col items-center py-3.5 md:p-20 lg:p-60 `}>
            <Logo />
            <div className="text-2xl flex flex-row gap-5 lg:gap-15 text-center text-[#D7D3CD4D] 
                            lg:text-[46px] sm:text-[40px] md:text-[30px] 
                            font-labrada font-normal lg:mt-[-10px] g:mr-10">
                <span>Explore</span>
                <span>Avoid</span>
                <span>Survive</span>
            </div>
             <div className="w-3xs mt-10">
                <DownloadButton/>
            </div>   
         </div>   
    );
}

export default MainHeroSection;
