import { DownloadButtonProps } from "@/type/types";
import Image from "next/image";

const DownloadButton = ({image, alt}: DownloadButtonProps) => {
    return (
        <button className="lg:w-[340px] md:w-[290px] sm:w-[200px] lg:h-[60px] rounded-[30px] flex justify-center  hover:bg-[var(--color-sunny)] text-[var(--color-text-neutral-50)]">
            <Image src={image} alt={alt} width={369} height={60} />
        </button>
    );
};

export default DownloadButton;