import Image from "next/image";
import { FooterLogoProps } from "@/types/types";

const FooterLogoSection = ({ logo, description }: FooterLogoProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center lg:gap-8 md:gap-2 px-4 py-40 max-w-6xl pb-[600px] lg:pb-[200px] -mt-28 lg:-mt-32">
      <div className="w-40 sm:w-60 md:w-80 lg:w-[412px] height-[394px] top-[806px] left-[185px] flex justify-center">
        <Image
          src={logo}
          alt="ftrgames_logo"
          width={412}
          height={394}
          className="object-contain rounded-full w-full h-auto"
          priority
        />
      </div>
      <div className="hidden md:flex flex-col justify-center bg-foreground text-center text-color-primary rounded-[10px] lg:w-[627px] md:w-[400px] h-[394px] top-[806px] left-[628px] shadow-lg max-w-xl opacity-100">
        <div className="text-center leading-relaxed text-sm sm:text-[26px] md:text-lg lg:text-xl font-labrada">
          {description}
        </div>
      </div>
    </section>
  );
};

export default FooterLogoSection;
