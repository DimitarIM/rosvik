import { GameOverViewProps } from "@/types/types"
import GameLoopList from "./GameLoopList"
import About from "./About"
import DownloadButton from "./DownloadButton"
import downloadButtonData from "@/data/downloadButton"
import ManagementBox from "./ManagmentBox"

const GameOverview = ({pageTitle, aboutText, imageOneSrc, imageOneAlt, imageTwoAlt, imageTwoSrc, bgImageAlt, bgImageSrc, gameLoopTitle, gameLoopText, managementBoxText}: GameOverViewProps) => {
    return (
    <section className="text-text-color bg-cover bg-no-repeat grid grid-cols-1 justify-items-center sm:hidden" style={{backgroundImage: `url(${bgImageSrc})`}} aria-label={bgImageAlt} >
        <h1 className="pageTitle text-xl font-normal text-center ">{pageTitle}</h1>
        <About aboutText={aboutText}/>
        <div className="">
            <img className="w-[235px] h-[374px] m-auto" src={imageOneSrc} alt={imageOneAlt}></img>
        </div>
        <h2 className="text-xl font-normal text-center mt-12 ">{gameLoopTitle}</h2>
        <div className="mx-[50px] mt-4 mb-3 rounded-[10px] bg-[rgba(124,131,133,0.2)] ">
          <GameLoopList gameLoopText={gameLoopText} />
        </div>
        <div className="my-12 ">
            <img className="w-[264px] h-[152px] m-auto opacity-70" src={imageTwoSrc} alt={imageTwoAlt}></img>
        </div>
        <ManagementBox managementBoxText={managementBoxText} />
    </section>
    )
}

export default GameOverview