import GameLowerSection from "@/components/GameLowerSection";
import GameOverview from "@/components/GameOverview";
import Inner from "@/components/Layout/Inner";
import { gameOverViewData } from "@/data/gameOverViewData";

const Game = () => {
  return (
    <>
      <Inner>
        <GameOverview {...gameOverViewData} />
        <GameLowerSection />
        {/* title={'World & Mythology'} description={'(...)'} */}
      </Inner>
    </>
  );
};

export default Game;
