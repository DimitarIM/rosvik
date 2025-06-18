import GameLowerSection from "@/components/GameLowerSection"
import GameOverview from "@/components/GameOverview"
import {gameOverViewData}  from "@/data/gameOverViewData"

const Game = () => {
    return (
        <>
        <GameOverview {...gameOverViewData}/>
        <GameLowerSection/>
        {/* title={'World & Mythology'} description={'(...)'} */}
        </>
    )
}

export default Game