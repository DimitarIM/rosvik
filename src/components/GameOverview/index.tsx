import { GameOverViewProps } from "@/types/types";
import GameLoopList from "./GameLoopList";
import About from "./About";
import GameOverviewButton from "./GameOverviewButton";
import downloadButtonData from "@/data/downloadButton";
import ManagementBox from "./ManagmentBox";
import { useTranslations } from "next-intl";

const GameOverview = ({
  imageOneSrc,
  imageOneAlt,
  imageTwoAlt,
  imageTwoSrc,
  bgImageAlt,
}: GameOverViewProps) => {
  const t = useTranslations("game");
  const tAboutText: string[] = [
    t("aboutText.paragraph1"),
    t("aboutText.paragraph2"),
    t("aboutText.paragraph3"),
    t("aboutText.paragraph4"),
  ];

  const tGameLoopText: string[] = [
    t("gameLoopText.paragraph1"),
    t("gameLoopText.paragraph2"),
    t("gameLoopText.paragraph3"),
    t("gameLoopText.paragraph4"),
    t("gameLoopText.paragraph5"),
    t("gameLoopText.paragraph6"),
    t("gameLoopText.paragraph7"),
    t("gameLoopText.paragraph8"),
  ];

  const tManagementBox: string[] = [
    t("managementBox.header"),
    t("managementBox.paragraph1"),
    t("managementBox.paragraph2"),
    t("managementBox.paragraph3"),
    t("managementBox.paragraph4"),
    t("managementBox.paragraph5"),
    t("managementBox.paragraph6"),
    t("managementBox.paragraph7"),
  ];

  return (
    <section
      className="bg-[url(/img/DescriptionPageBgImage.png)] bg-cover bg-no-repeat w-full min-h-screen pt-[35px] pb-[120px] sm:pb-[120px] sm:pt-[164px] lg:py-[164px] xl:pt-[170px]"
      aria-label={bgImageAlt}
    >
      <div className="text-color-primary  grid grid-cols-1 justify-items-center sm:hidden">
        <h1 className="text-pageTitle-color text-xl font-normal text-center ">
          {t("pageTitle")}
        </h1>
        <About aboutText={tAboutText} />
        <div className="">
          <img
            className="w-[235px] h-[374px] m-auto"
            src={imageOneSrc}
            alt={imageOneAlt}>

            </img>
        </div>
        <h3 className="text-xl font-normal text-center mt-12 ">
          {t("gameLoopTitle")}
        </h3>
        <div className="mx-[50px] mt-4 mb-3 rounded-[10px] bg-foreground ">
          <GameLoopList gameLoopText={tGameLoopText} />
        </div>
        <div className="my-12 max-w-[455px]">
          <img
            className="px-7 m-auto opacity-70"
            src={imageTwoSrc}
            alt={imageTwoAlt}
          ></img>
        </div>
        <div className="w-full px-[50px]">
          <ManagementBox managementBoxText={tManagementBox} />
        </div>
      </div>

      <div className="hidden sm:text-text-color sm:flex justify-self-center ">
        <div className="sm:max-w-fit lg:mr-[10px]">
          <h2
            className="text-color-primary sm:text-2xl font-normal text-center 
          xl:text-[40px]"
          >
            {t("pageTitle")}
          </h2>
          <About aboutText={tAboutText} />
          <div>
            <img
              className="min-w-[264px] h-[152px] m-auto opacity-70
              sm:max-w-[340px] sm:h-auto
              md:min-w-[370px] 
              lg:max-w-[500px] lg:h-auto 
              xl:my-[10px] xl:max-w-[600px]  xl:h-auto"
              src={imageTwoSrc}
              alt={imageTwoAlt}
            ></img>
          </div>
          <ManagementBox managementBoxText={tManagementBox} />
        </div>

        <div className="sm:max-w-fit sm:flex sm:flex-col sm:items-center sm:mr-5">
          <div>
            <img
              className="w-[235px] h-[374px] 
            sm:mt-20 lg:mt-25 lg:w-[300px] lg:h-[473px]
            xl:mt-35 xl:w-[359px] xl:h-[572px]"
              src={imageOneSrc}
              alt={imageOneAlt}
            ></img>
          </div>
          <h3 className="text-xl font-normal text-center mt-12 sm:text-2xl sm:w-fit mx-0 sm:mt-15 md:mt-20 xl:text-[40px] xl:mt-22">
            {t("gameLoopTitle")}
          </h3>
          <div className=" mt-4 mb-3 rounded-[10px] bg-foreground sm:mb-6 sm:max-w-[252px] md:max-w-[290px] md:p-2 lg:max-w-[380px] lg:p-3 lg:pt-7 lg:pb-5 xl:max-w-[413px] xl:pl-4">
            <GameLoopList gameLoopText={tGameLoopText} />
          </div>
          <GameOverviewButton {...downloadButtonData} />
        </div>
      </div>
    </section>
  );
};

export default GameOverview;
