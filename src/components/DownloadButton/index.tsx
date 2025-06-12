import { DownloadButtonHpProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const DownloadButton = ({image, alt, href}: DownloadButtonHpProps) => {
    return (
        <Link href={href} target="_blank">
        <button className="lg:w-[340px] md:w-[290px] sm:w-[200px] lg:h-[60px] rounded-[30px] flex justify-center hover:bg-[var(--color-sunny)] text-download-text">
            <Image src={image} alt={alt} width={369} height={60}/>
        </button>
        </Link>
    );
};

export default DownloadButton;