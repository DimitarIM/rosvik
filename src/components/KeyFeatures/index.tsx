
import { keyfeaturesProps } from "@/types/types";

const KeyFeatures = ({ keyfeatures }: keyfeaturesProps) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-16 gap-2 font-labrada overflow-hidden">
      <h2 className="text-[20px] md:text-[40px] text-feature font-semibold md:mb-2 sm:mb-2 p-2 text-center mt-30">
        Key Features
      </h2>
      <div className="bg-foreground text-feature backdrop-blur-sm rounded-xl gap:2 md:px-6 md:py-8 max-w-[90%]w-full sm:max-w-[600px] md:max-w-[800px]">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center text-lg md:text-xl text-center p-4">
          {keyfeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-start md:gap-2 text-[12px] md:text-[26px]"
            >
              <span className="font-labrada text-[12px] block md:hidden pr-2">◆</span>
              <span>{feature}</span>
              {index < keyfeatures.length - 1 && (
                <span className="text-[12px] hidden md:inline font-labrada pl-2">◆</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
