import { keyfeatures } from "@/types/types";

const KeyFeatures = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 px-4 text-[var(--font-labrada)] overflow-hidden">
      <div className="relative w-[1095px] h-[109px] overflow-hidden -z-20 mx-auto mb-8">
        <img
          src="/img/bg_1.png"
          alt="Background"
          className="w-auto h-auto object-none"
          
        />
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, #000000 80% #000000 49.84%, #000000 25%)",
        }}
      />
      <h2 className="text-[40px] md:text-[40px] font-semibold mb-8 text-center mt-100">
        Key Features
      </h2>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-8 w-full max-w-6xl">
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
