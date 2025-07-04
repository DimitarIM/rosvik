import { keyfeaturesProps } from "@/types/types";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

const KeyFeatures = ({ keyfeatures }: keyfeaturesProps) => {
  const t = useTranslations("home");
  return (
    <section className="relative flex flex-col items-center justify-center py-12 px-4 font-labrada overflow-hidden z-20">
      <h2 className="text-3xl font-labrada text-feature mb-8 text-center">
        {t("keyfeatures.header")}
      </h2>
      <div className="bg-foreground text-feature rounded-xl py-6 px-12 md:p-9 text-nowrap md:text-wrap w-full max-w-[320px] md:w-full md:max-w-6xl">
        <div
          className="flex flex-col items-center md:flex-row justify-center
               gap-3 md:gap-[2.5vw] lg:gap-15
               text-lg md:text-xl text-center md:text-left"
        >
          {keyfeatures.map((feature, index) => (
            <Fragment key={index}>
              <div className="text-[20px] w-[266px] text-start md:text-center">
                <span className="font-labrada text-xs inline md:hidden md:pr-0 ">
                  ◆
                </span>
                <span className="pl-7 md:pl-0">{feature}</span>
              </div>
              {index < keyfeatures.length - 1 && (
                <span className="text-xs hidden md:inline font-labrada">◆</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
