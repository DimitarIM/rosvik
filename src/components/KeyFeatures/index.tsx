import { keyfeatures } from "@/types/types";

const KeyFeatures = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 font-labrada overflow-hidden">
      
      <h2 className="text-[40px] text-feature md:text-[40px] font-semibold mb-8 text-center mt-100">
        Key Features
      </h2>
      <div className="bg-foreground text-feature backdrop-blur-sm rounded-xl px-6 py-8 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 text-lg md:text-xl text-center md:text-left">
          {keyfeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-start space-x-3 gap-4 text-[24px] md:text-[24px]"
            >
              <span className="text-[var(--font-labrada)] text-xs block md:hidden">◆</span>
              <span>{feature}</span>
              {index < keyfeatures.length - 1 && (
                <span className="text-xs hidden md:inline ml-4 text-[var(--font-labrada)]">◆</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
