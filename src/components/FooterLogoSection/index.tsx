import Image from "next/image";
import { FooterLogoProps } from "@/types/types";

const FooterLogoSection = ({ logo, description }: FooterLogoProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-10 max-w-screen mx-auto">
      <div className="flex justify-center">
        <div className="w-[60%] md:w-full flex justify-center">
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
      <div className="hidden md:flex flex-col justify-center bg-foreground text-center text-color-primary w-full max-w-[60%] h-auto rounded-[10px] shadow-lg opacity-90">
        <div className="leading-relaxed md:text-[20px] lg:text-[26px] lg:p-4 font-labrada whitespace-normal text-ellipsis ">
          {description}
        </div>
      </div>  
    </section>
  );
};

export default FooterLogoSection;
