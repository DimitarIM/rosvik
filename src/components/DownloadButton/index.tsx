import { DownloadButtonHpProps } from "@/types/types";
import Image from "next/image";

const DownloadButton = ({image, alt}: DownloadButtonHpProps) => {
    return (
        <button className="lg:w-[340px] md:w-[290px] sm:w-[200px] lg:h-[60px] rounded-[30px] flex justify-center hover:bg-download-button text-download-text">
            <Image src={image} alt={alt} width={369} height={60} />
        </button>
    );
};

export default DownloadButton;