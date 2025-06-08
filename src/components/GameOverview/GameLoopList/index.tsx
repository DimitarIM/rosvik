import { GameOverViewProps } from "@/types/types"

const GameLoopList = ({gameLoopText}: Pick<GameOverViewProps, "gameLoopText"> ) => {
    return (
            <ul className="flex flex-col gap-5 pr-4 p-3 list-none">
                {gameLoopText.map((list, index) => (
                    <li className="text-sm pl-3.5 relative before:content-[''] before:absolute before:w-[3px] before:h-[3px] before:bg-text-color before:left-0 before:top-[9px] before:rotate-45 " key={index}>{list}</li>
                ))}
            </ul>

    )
}

export default GameLoopList