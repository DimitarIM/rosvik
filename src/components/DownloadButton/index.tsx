import { DownloadButtonHpProps } from "@/types/types";
import Link from "next/link";

const DownloadButton = ({image, alt, href}: DownloadButtonHpProps) => {
    return (
        <Link href={href} target="_blank">
        <button className="w-full max-w-[220px] md:max-w-[300px] rounded-[30px] flex justify-center hover:bg-[var(--color-sunny)] text-download-text">
            <img className="w-full h-auto" src={image} alt={alt}/>
        </button>
        </Link>
    );
};

export default DownloadButton;