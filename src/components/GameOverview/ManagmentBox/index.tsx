import { GameOverViewProps } from "@/types/types"


const ManagementBox = ({managementBoxText}: Pick<GameOverViewProps, "managementBoxText">) => {
    return (
        <div className="mx-[50px] p-5 w-55 h-33 rounded-[10px] bg-[rgba(124,131,133,0.2)] sm:order-7">
            {managementBoxText.map((text, index) => (
                <p className="text-sm" key={index}>{text}</p>
            ))}
        </div>

    )
}

export default ManagementBox