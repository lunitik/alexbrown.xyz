import { useTheme } from "@mui/material";
import { Hand } from "../RockPaperScissorsGame/Enum_Hand";
import "./GameCard.scss";

function GameCard(props: { face: Hand; selected: boolean, onClick: () => void }) {
    const theme = useTheme();
    const colourModeClasses = `gamecard gamecard-colour-mode--${theme.palette.mode}`;

    return (
        <div
            className={colourModeClasses}
            id={props.face}
            data-value={props.face}
            data-checked={props.selected}
            onClick={() => {
                props.onClick();
            }}>
            {props.face}
        </div>
    );
}

export default GameCard;
