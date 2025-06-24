import Image from "next/image";
import bgImage from '../../../public/img/about_sticky.png'
// import { GameLowerSectionProps } from "@/types/types";
const GameLowerSection = () => {
    // {title, description}:GameLowerSectionProps
    return (
       <div className="relative pb-0.5 bg-[url('/img/about_game_bg-mobile.png')] bg-no-repeat bg-cover bg-center md:bg-none"> 
        <Image src={bgImage} alt='background image' className="w-full"/>
        {/* <div className="w-[70%] px-2 py-12 my-8 mx-auto bg-foreground text-color-primary rounded-[10px] shadow-lg opacity-100 md:absolute top-12 left-25 lg:left-43 md:w-[35%] md:h-[45%]">
            <div className='pl-7 '>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>   */}
        </div>
    )
}

export default GameLowerSection;