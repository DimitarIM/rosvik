import { GameOverViewProps } from "@/types/types"
import GameLoopList from "./GameLoopList"
import About from "./About"
import GameOverviewButton from "./GameOverviewButton"
import downloadButtonData from "@/data/downloadButton"
import ManagementBox from "./ManagmentBox"

const GameOverview = ({pageTitle, aboutText, imageOneSrc, imageOneAlt, imageTwoAlt, imageTwoSrc, bgImageAlt, gameLoopTitle, gameLoopText, managementBoxText}: GameOverViewProps) => {
    return (
    <section className="bg-[url(/img/DescriptionPageBgImage.png)] bg-cover bg-no-repeat w-full min-h-screen pt-[35px] pb-[120px] sm:pb-[120px] sm:pt-[164px] lg:py-[164px] xl:pt-[170px]"  aria-label={bgImageAlt}>
      <div className="text-color-primary  grid grid-cols-1 justify-items-center sm:hidden" >
          <h1 className="text-pageTitle-color text-xl font-normal text-center ">{pageTitle}</h1>
          <About aboutText={aboutText}/>
          <div className="">
              <img className="w-[235px] h-[374px] m-auto" src={imageOneSrc} alt={imageOneAlt}></img>
          </div>
          <h2 className="text-xl font-normal text-center mt-12 ">{gameLoopTitle}</h2>
          <div className="mx-[50px] mt-4 mb-3 rounded-[10px] bg-foreground ">
            <GameLoopList gameLoopText={gameLoopText} />
          </div>
          <div className="my-12 max-w-[455px]">
              <img className="px-7 m-auto opacity-70" src={imageTwoSrc} alt={imageTwoAlt}></img>
          </div>
          <div className="w-full px-[50px]">
          <ManagementBox managementBoxText={managementBoxText} />
          </div>
      </div>



      <div className="hidden sm:text-text-color sm:flex justify-self-center ">
        <div className="sm:max-w-fit lg:mr-[10px]" >
          <h1 className="text-color-primary sm:text-2xl font-normal text-center 
          xl:text-[40px]">{pageTitle}</h1>
          <About aboutText={aboutText}/>
          <div>
              <img className="min-w-[264px] h-[152px] m-auto opacity-70
              sm:max-w-[340px] sm:h-auto
              md:min-w-[370px] 
              lg:max-w-[500px] lg:h-auto 
              xl:my-[10px] xl:max-w-[600px]  xl:h-auto" src={imageTwoSrc} alt={imageTwoAlt}></img>
          </div>
          <ManagementBox managementBoxText={managementBoxText} />
        </div>

        <div className="sm:max-w-fit sm:flex sm:flex-col sm:items-center sm:mr-5">
          <div>
            <img className="w-[235px] h-[374px] 
            sm:mt-20 lg:mt-25 lg:w-[300px] lg:h-[473px]
            xl:mt-30.5 xl:w-[359px] xl:h-[572px]" src={imageOneSrc} alt={imageOneAlt}></img>
          </div>
          <h2 className="text-xl font-normal text-center mt-12 sm:text-2xl sm:w-fit mx-0 sm:mt-15 md:mt-20 xl:text-[40px] xl:mt-22">{gameLoopTitle}</h2>
          <div className=" mt-4 mb-3 rounded-[10px] bg-foreground sm:mb-6 sm:max-w-[252px] md:max-w-[290px] md:p-2 lg:max-w-[380px] lg:p-3 lg:pt-7 lg:pb-5 xl:max-w-[413px] xl:pl-4">
            <GameLoopList gameLoopText={gameLoopText} />
          </div>
          <GameOverviewButton {...downloadButtonData} />
        </div>
      </div>
    </section>
    )
}

export default GameOverview