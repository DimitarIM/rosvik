import Image from "next/image";

const DownloadButton = () => {
    return (
        <button className="absolute w-[338px] md:w-[100%] h-[60px] top-[110px] left-[125px] rounded-[30px] flex justify-center hover:bg-[var(--color-sunny)] text-[var(--color-text-neutral-50)] ">
            <Image src="/btn/main_btn_download.png" alt="Download Button" width={369} height={60} />
        </button>
    );
};

export default DownloadButton;