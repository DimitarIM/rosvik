import Image from "next/image";
import { FooterLogoProps } from "@/types/types";

const FooterLogoSection = ({ logo, description }: FooterLogoProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10 max-w-6xl mx-auto">
      <div className="w-40 sm:w-60 md:w-80 lg:w-[412px] flex justify-center">
        <Image
          src={logo}
          alt="ftrgames_logo"
          width={412}
          height={394}
          className="object-contain rounded-full w-full h-auto"
          priority
        />
      </div>
      <div className="hidden md:flex flex-col justify-center bg-foreground text-center text-color-primary p-6 rounded-[10px] lg:w-[627px] h-[394px] top-[806px] left-[628px] shadow-lg max-w-xl">
        <div className="text-center leading-relaxed text-sm sm:text-[26px] md:text-lg lg:text-xl font-labrada">
          {description}
        </div>
      </div>
    </section>
  );
};

export default FooterLogoSection;
