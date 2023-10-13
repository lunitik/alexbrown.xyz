import { useTranslation } from 'react-i18next';
import './HeroBanner.scss';
import { Typography, useTheme } from '@mui/material';

function HeroBanner(props: { pageKey: string }) {
    const theme = useTheme();
    const colourModeClasses= `herobanner__container herobanner__container-colour-mode--${theme.palette.mode}`;
    const { t } = useTranslation('translation', { keyPrefix: `components.herobanner.${props.pageKey}`});

    return (
            <section className={colourModeClasses}>
                <Typography variant="h1" className="herobanner__heading">{t("herobanner__heading")}</Typography>
                <Typography variant='subtitle1' className="herobanner__sub-heading">{t("herobanner__sub-heading")}</Typography>
                <div className="herobanner__background" data-color-mode={theme.palette.mode} aria-hidden="true"></div>
            </section>
    );
}

export default HeroBanner;