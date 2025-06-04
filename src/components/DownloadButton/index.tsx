import Image from "next/image";

const DownloadButton = () => {
    return (
        <button className="lg:w-[340px] md:w-[290px] sm:w-[200px] lg:h-[60px] rounded-[30px] flex justify-center  hover:bg-[var(--color-sunny)] text-[var(--color-text-neutral-50)]">
            <Image src="/btn/main_btn_download.png" alt="Download Button" width={369} height={60} />
        </button>
    );
};

export default DownloadButton;