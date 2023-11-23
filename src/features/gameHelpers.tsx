import { GameResult } from "../components/RockPaperScissorsGame/Enum_GameResult";
import { Hand } from "../components/RockPaperScissorsGame/Enum_Hand";

export const generateOpponentChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    return Object.values(Hand)[choice];
};

export function calculateGameResult(selectedOption: Hand | null, opponentChoice: Hand | null) {
    let result = null;
    if (selectedOption === opponentChoice) {
        result = GameResult.Draw;
    } else {
        switch (selectedOption) {
            case Hand.Rock:
                if (opponentChoice === Hand.Scissors)
                    result = GameResult.Win;
                if (opponentChoice === Hand.Paper) result = GameResult.Lose;
                break;
            case Hand.Paper:
                if (opponentChoice === Hand.Rock) result = GameResult.Win;
                if (opponentChoice === Hand.Scissors)
                    result = GameResult.Lose;
                break;
            case Hand.Scissors:
                if (opponentChoice === Hand.Paper) result = GameResult.Win;
                if (opponentChoice === Hand.Rock) result = GameResult.Lose;
                break;
        }
    }
    return result;
}