import { GameOverViewProps } from "@/types/types"


const ManagementBox = ({managementBoxText}: Pick<GameOverViewProps, "managementBoxText">) => {
    return (
        <div className="grid content-center mx-[50px] p-5 w-55 h-33 rounded-[10px] bg-foreground
        sm:m-auto sm:my-5 sm:min-w-[340px] sm:min-h-[200px] md:min-w-[370px] md:min-h-[220px]
        lg:min-w-[500px] lg:min-h-[300px] xl:min-w-[600px] xl:min-h-[370px]">
            {managementBoxText.map((text, index) => (
                <p className="text-sm sm:text-[18px] lg:text-[22px] lg:pl-6 xl:text-[26px]" key={index}>{text}</p>
            ))}
        </div>

    )
}

export default ManagementBox