'use client'
import { DownloadButtonProps } from "@/types/types"


const DownloadButton = ({downloadButtonLink, downloadButtonText}: DownloadButtonProps) => {
    return (
        <div>
            <button onClick={() => window.open(downloadButtonLink, "_blank")}>
                {downloadButtonText}
            </button>
        </div>

    )
}

export default DownloadButton