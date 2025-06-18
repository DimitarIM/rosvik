import Footer from "@/components/Footer"
import GameOverview from "@/components/GameOverview"
import {gameOverViewData}  from "@/data/gameOverViewData"

const Game = () => {
    return (
        <>
        <GameOverview {...gameOverViewData}/>
        <Footer />
        </>
    )
}

export default Game