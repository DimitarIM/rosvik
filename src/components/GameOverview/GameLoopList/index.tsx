import { GameOverViewProps } from "@/types/types"

const GameLoopList = ({gameLoopText}: Pick<GameOverViewProps, "gameLoopText"> ) => {
    return (
            <ul className="flex flex-col gap-5 px-2 py-3.5 sm:pr-4 sm:p-4 lg:gap-9 list-none ">
                {gameLoopText.map((list, index) => (
                    <li className="text-sm pl-3.5 relative before:content-[''] before:absolute before:w-[3px] before:h-[3px] before:bg-text-color before:left-0 before:top-[9px] before:rotate-45 
                    sm:text-[18px] sm:before:top-[12px] 
                    lg:text-[22px] lg:before:top-[15px] lg:before:w-[4px] lg:before:h-[4px]
                    xl:text-[26px] xl:before:top-[19px] xl:before:left-[-8px]" key={index}>{list}</li>
                ))}
            </ul>

    )
}

export default GameLoopList