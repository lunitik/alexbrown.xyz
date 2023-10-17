import './ComingSoon.scss';
import { Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

function ComingSoon() {
    const theme = useTheme();
    const colourClassNames = `comingsoon comingsoon-colour-mode--${theme.palette.mode}`;
    const { t } = useTranslation("translation", { keyPrefix: "components.comingsoon"})
    return (
        <section className={colourClassNames}>
            <Typography variant="h1">{t("heading")}</Typography>
        </section>
    );
}

export default ComingSoon;