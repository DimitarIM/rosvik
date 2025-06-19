import GameLowerSection from "@/components/GameLowerSection"
import GameOverview from "@/components/GameOverview"
import {gameOverViewData}  from "@/data/gameOverViewData"
import { useTranslations } from "next-intl";

const Game = () => {
    const t = useTranslations("game")
    return (
        <>
        <GameOverview {...gameOverViewData}/>
        <GameLowerSection title={t("lowerSection")} description={'(...)'}/>
        </>
    )
}

export default Game
