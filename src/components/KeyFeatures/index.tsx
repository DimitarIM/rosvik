
import { keyfeaturesProps } from "@/types/types";

const KeyFeatures = ({ keyfeatures }: keyfeaturesProps) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 font-labrada overflow-hidden">
      <h2 className="text-[32px] md:text-[40px] text-feature font-semibold mb-8 text-center mt-60">
        Key Features
      </h2>
      <div className="bg-foreground text-feature backdrop-blur-sm rounded-xl md:px-6 md:py-8 w-full max-w-[800px]">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 text-lg md:text-xl text-center md:text-left">
          {keyfeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-start sm:gap-4 text-[24px] md:text-[24px]"
            >
              <span className="font-labrada text-xs block md:hidden">◆</span>
              <span>{feature}</span>
              {index < keyfeatures.length - 1 && (
                <span className="text-xs hidden md:inline font-labrada">◆</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
