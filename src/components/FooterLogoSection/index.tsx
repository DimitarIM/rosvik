import Image from "next/image";
import { FooterLogoProps } from "@/types/types";

const FooterLogoSection = ({ logo, description }: FooterLogoProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center lg:gap-2 sm:gap-2 py-8 max-w-7xl mx-auto">
      <div className="flex justify-center p-4">
        <div className="w-40 sm:w-52 md:w-84 lg:w-[412px] lg:h-[394px] flex justify-center p-4">
          <Image
            src={logo}
            alt="ftrgames_logo"
            width={412}
            height={394}
            className="object-contain rounded-full w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center bg-foreground text-center text-color-primary mr-10 md:rounded-[10px] lg:w-[627px] md:w-[400px] h-[394px] shadow-lg max-w-xl opacity-90">
        <div className="leading-relaxed md:text-[20px] lg:text-[26px] lg:p-8 font-labrada whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis ">
          {description}
        </div>
      </div>  
    </section>
  );
};

export default FooterLogoSection;
