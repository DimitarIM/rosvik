'use client'
import { DownLoadButtonProps } from "@/types/types" 


const GameOverviewButton = ({downloadButtonLink, downloadButtonText}: DownLoadButtonProps) => {
    return (
        <div className="sm:grid  sm:text-center sm:rounded-full sm:bg-button-color sm:h-11 sm:min-w-[240px] lg:h-[60px] lg:w-[350px] xl:w-[369px]">
            <button className="cursor-pointer sm:text-[18px] lg:text-[22px] xl:text-[26px]" onClick={() => window.open(downloadButtonLink, "_blank")}>
                {downloadButtonText}
            </button>
        </div>

    )
}

export default GameOverviewButton
