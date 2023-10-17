import { useTranslation } from "react-i18next";
import "./HeroBanner.scss";
import { Container, Typography, useTheme } from "@mui/material";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeroBanner(props: {
    pageKey: string;
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | Iterable<ReactNode>
        | null
        | undefined;
}) {
    const theme = useTheme();
    const colourModeClasses = `herobanner__container herobanner__container-colour-mode--${theme.palette.mode}`;
    const { t } = useTranslation("translation", {
        keyPrefix: `components.herobanner.${props.pageKey}`,
    });

    return (
        <section className={colourModeClasses}>
            <Typography variant="h1" className="herobanner__heading">
                {t("herobanner__heading")}
            </Typography>
            <Typography variant="subtitle1" className="herobanner__sub-heading">
                {t("herobanner__sub-heading")}
            </Typography>
            <Container className="herobanner__container--content" maxWidth="sm">{props.children}</Container>
            <div
                className="herobanner__background"
                data-color-mode={theme.palette.mode}
                aria-hidden="true"
            ></div>
        </section>
    );
}

export default HeroBanner;
