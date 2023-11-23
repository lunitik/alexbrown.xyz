import { useState } from "react";
import "./RockPaperScissors.scss";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { Hand } from "./Enum_Hand";
import { GameResult } from "./Enum_GameResult";
import { calculateGameResult, generateOpponentChoice } from "../../features/gameHelpers";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

function RockPaperScissorsGame() {
    const { t } = useTranslation("translation", {
        keyPrefix: "components.game",
    });
    const [gameInPlay, setGameInPlay] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Hand | null>(null);
    const [curentWinningStreakCount, setCurrentWinningStreakCount] =
        useSessionStorage("currentWinningStreak", 0);
    const [winningStreakCount, setWinningStreakCount] = useLocalStorage(
        "winningStreak",
        0
    );
    const [opponentChoice, setOpponentChoice] = useState<Hand>(
        generateOpponentChoice
    );
    const [gameResult, setGameResult] = useState<GameResult | null>(
        calculateGameResult(selectedOption, opponentChoice)
    );

    function handleOnClick() {
        setGameInPlay(true);
        const currentGameResult = calculateGameResult(selectedOption, opponentChoice);
        setGameResult(currentGameResult);
        handleCurrentWinningStreak(currentGameResult);
        handleWinningStreak();
    }    

    function handleCurrentWinningStreak(currentGameResult: GameResult | null) {
        if (currentGameResult === null) return;

        if (currentGameResult !== GameResult.Win) {
            setCurrentWinningStreakCount((prevVal: number) => 0);
        }

        if (currentGameResult == GameResult.Win) {
            setCurrentWinningStreakCount((prevVal: number) => prevVal + 1);
        }
    }

    function handleWinningStreak() {
        if (curentWinningStreakCount > winningStreakCount) {
            setWinningStreakCount(curentWinningStreakCount);
        }
    }

    const handleOptionChange = (changeEvent) => {
        setSelectedOption(changeEvent.target.value);
    };

    const handleReset = () => {
        setSelectedOption(null);
        setOpponentChoice(generateOpponentChoice());
        setGameResult(null);
        setGameInPlay(false);
    };

    return (
        <div className="rockpaperscissorsgame">
            <Typography variant="h1" className="rockpaperscissorsgame__title">
            🏆{t("title")}🏆
            </Typography>
            <div id="message" className="rockpaperscissorsgame__message">
            <Typography variant="h3" className="rockpaperscissorsgame__instructions_title">
                    {t("instructions-title")}
                </Typography>
                <Typography variant="body1" className="rockpaperscissorsgame__instructions">
                    {t("instructions")}
                </Typography>
                {gameResult ? (
                    <div className="rockpaperscissorsgame__game_results">
                        {gameResult === GameResult.Win ? <div className="rockpaperscissorsgame__sparkles">✨</div> : null}
                        <div className="rockpaperscissorsgame__game_results__container">
                            <Typography variant="body1" className="rockpaperscissorsgame__opponent_choice">
                                {t("opponentChoice")} {opponentChoice}
                            </Typography>
                            <Typography variant="body1" className="rockpaperscissorsgame__game_result">
                                {t("gameResult")} {gameResult}
                            </Typography>
                        </div>
                        {gameResult === GameResult.Win ? <div className="rockpaperscissorsgame__sparkles">✨</div> : null}
                    </div>
                ) : null}
            </div>
            <form className="rockpaperscissorsgame__selection">
                <legend>
                    <label>
                        <input
                            type="radio"
                            name="rock"
                            value={Hand.Rock}
                            checked={selectedOption === Hand.Rock}
                            onChange={handleOptionChange}
                        />
                        {Hand.Rock}
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paper"
                            value={Hand.Paper}
                            checked={selectedOption === Hand.Paper}
                            onChange={handleOptionChange}
                        />
                        {Hand.Paper}
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="scissors"
                            value={Hand.Scissors}
                            checked={selectedOption === Hand.Scissors}
                            onChange={handleOptionChange}
                        />
                        {Hand.Scissors}
                    </label>
                </legend>
                {gameInPlay ? (
                    <Button
                        size="large"
                        variant="outlined"
                        type="button"
                        onClick={handleReset}
                    >
                        Play Again
                    </Button>
                ) : (
                    <Button
                        size="large"
                        variant="contained"
                        type="button"
                        onClick={handleOnClick}
                        disabled={selectedOption === null}
                    >
                        PLAY
                    </Button>
                )}
            </form>
            <div id="streak" className="rockpaperscissorsgame__streak">
                <h3>🥇 current winning streak: {curentWinningStreakCount}</h3>
                <h4>👑 best winning streak: {winningStreakCount}</h4>
            </div>
        </div>
    );
}

export default RockPaperScissorsGame;
