import Image from "next/image";
import { FooterLogoProps } from "@/types/types";

const FooterLogoSection = ({ logo, description }: FooterLogoProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center lg:gap-6 py-10 max-w-3xl">
      <div className="w-40 sm:w-50 md:w-84 lg:w-[412px] height-[394px] top-[806px] left-[195px] flex justify-center p-4">
        <Image
          src={logo}
          alt="ftrgames_logo"
          width={412}
          height={394}
          className="object-contain rounded-full w-full h-auto"
          priority
        />
      </div>
      <div className="hidden md:flex flex-col justify-center bg-foreground text-center text-color-primary mr-8 md:rounded-[10px] lg:w-[627px] md:w-[400px] h-[394px] top-[806px] left-[628px] shadow-lg max-w-xl opacity-90 ">
        <div className="text-14px whitespace-nowrap not-only-of-type:text-center leading-relaxed md:text-[20px] md:text-lg lg:text-xl font-labrada">
          {description}
        </div>
      </div>
    </section>
  );
};

export default FooterLogoSection;
