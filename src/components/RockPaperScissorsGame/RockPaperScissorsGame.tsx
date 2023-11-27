import { useState } from "react";
import "./RockPaperScissors.scss";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { Hand } from "./Enum_Hand";
import { GameResult } from "./Enum_GameResult";
import {
    calculateGameResult,
    generateOpponentChoice,
} from "../../features/gameHelpers";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import GameCard from "../GameCard/GameCard";

function RockPaperScissorsGame() {
    const theme = useTheme();
    const colourModeClasses = `rockpaperscissorsgame rockpaperscissorsgame-colour-mode--${theme.palette.mode}`;
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
        const currentGameResult = calculateGameResult(
            selectedOption,
            opponentChoice
        );
        setGameResult(currentGameResult);
        handleCurrentWinningStreak(currentGameResult);
        handleWinningStreak();
    }

    function handleCurrentWinningStreak(currentGameResult: GameResult | null) {
        if (currentGameResult === null) return;

        if (currentGameResult !== GameResult.Win) {
            setCurrentWinningStreakCount(() => 0);
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

    const handleReset = () => {
        setSelectedOption(null);
        setOpponentChoice(generateOpponentChoice());
        setGameResult(null);
        setGameInPlay(false);
    };

    return (
        <div className={colourModeClasses}>
            <div className="rockpaperscissorsgame__title_container">
                <div className="rockpaperscissorsgame__title_flourish">🏆</div>
                <Typography
                    variant="h1"
                    className="rockpaperscissorsgame__title"
                >
                    {t("title")}
                </Typography>
                <div className="rockpaperscissorsgame__title_flourish">🏆</div>
            </div>
            <div id="message" className="rockpaperscissorsgame__message">
                {gameResult ? null : (
                    <>
                        <Typography
                            variant="h3"
                            className="rockpaperscissorsgame__instructions_title"
                        >
                            {t("instructions-title")}
                        </Typography>
                        <Typography
                            variant="body1"
                            className="rockpaperscissorsgame__instructions"
                        >
                            {t("instructions")}
                        </Typography>
                    </>
                )}
                {gameResult ? (
                    <div className="rockpaperscissorsgame__game_results">
                        {gameResult === GameResult.Win ? (
                            <div className="rockpaperscissorsgame__sparkles">
                                ✨
                            </div>
                        ) : null}
                        <div className="rockpaperscissorsgame__game_results__container">
                            <Typography
                                variant="body1"
                                className="rockpaperscissorsgame__opponent_choice"
                            >
                                {t("opponentChoice")} {opponentChoice}
                            </Typography>
                            <Typography
                                variant="body1"
                                className="rockpaperscissorsgame__game_result"
                            >
                                {t("gameResult")} {gameResult}
                            </Typography>
                        </div>
                        {gameResult === GameResult.Win ? (
                            <div className="rockpaperscissorsgame__sparkles">
                                ✨
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
            <div className="rockpaperscissorsgame__selection">
                <div className="rockpaperscissorsgame__game-cards">
                    <GameCard
                        face={Hand.Rock}
                        selected={selectedOption === Hand.Rock}
                        onClick={() => setSelectedOption(Hand.Rock)}
                    />
                    <GameCard
                        face={Hand.Paper}
                        selected={selectedOption === Hand.Paper}
                        onClick={() => setSelectedOption(Hand.Paper)}
                    />
                    <GameCard
                        face={Hand.Scissors}
                        selected={selectedOption === Hand.Scissors}
                        onClick={() => setSelectedOption(Hand.Scissors)}
                    />
                </div>
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
            </div>
            <div id="streak" className="rockpaperscissorsgame__streak">
                <h3>🥇 current winning streak: {curentWinningStreakCount}</h3>
                <h4>👑 best winning streak: {winningStreakCount}</h4>
            </div>
        </div>
    );
}

export default RockPaperScissorsGame;
