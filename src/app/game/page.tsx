import Footer from "@/components/Footer"
import GameOverview from "@/components/GameOverview"
import {gameOverViewData}  from "@/data/gameOverViewData"

const Game = () => {
    return (
        <>
        <GameOverview {...gameOverViewData}/>
        </>
    )
}

export default Game